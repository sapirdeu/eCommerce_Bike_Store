import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
import warnings
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.cluster import KMeans
from sklearn.ensemble import IsolationForest, RandomForestRegressor
from sklearn.decomposition import PCA
from sklearn.svm import SVR
from scipy.stats import ttest_ind

warnings.filterwarnings('ignore')

CSV_PATH = "./bike_sharing.csv"
CSV_ANOM_PATH = "./anomalies.csv"
CSV_NO_ANOMALIES_PATH = "./bike_sharing_no_anomalies.csv"


# - instant: record index
# - dteday : date
# - season : season (1:springer, 2:summer, 3:fall, 4:winter)
# - yr : year (0: 2011, 1:2012)
# - mnth : month ( 1 to 12)
# - holiday : weather day is holiday or not (extracted from http://dchr.dc.gov/page/holiday-schedule)
# - weekday : day of the week
# - workingday : if day is neither weekend nor holiday is 1, otherwise is 0.
# + weathersit :
#    - 1: Clear, Few clouds, Partly cloudy, Partly cloudy
#    - 2: Mist + Cloudy, Mist + Broken clouds, Mist + Few clouds, Mist
#    - 3: Light Snow, Light Rain + Thunderstorm + Scattered clouds, Light Rain + Scattered clouds
# - temp : Normalized temperature in Celsius. The values are divided to 41 (max)
# - atemp: Normalized feeling temperature in Celsius. The values are divided to 50 (max)
# - hum: Normalized humidity. The values are divided to 100 (max)
# - windspeed: Normalized wind speed. The values are divided to 67 (max)
# - casual: count of casual users
# - registered: count of registered users
# - cnt: count of total rental bikes including both casual and registered


# fixing the data type of the dataset
def fixingDatatypes(df):
    # some data types need to be changed from numerical to categorical or bool
    # otherwise the prediction model can interpret wrongly
    df['dteday'] = df['dteday'].astype('datetime64')
    df['season'] = df.season.astype('category')
    df['yr'] = df.yr.astype('category')
    df['mnth'] = df.mnth.astype('category')
    df['holiday'] = df.holiday.astype('bool')
    df['weekday'] = df.weekday.astype('category')
    df['workingday'] = df.workingday.astype('bool')
    df['weathersit'] = df.weathersit.astype('category')
    # confirming the converted datatype
    print(df.dtypes)
    return df


# pre-processing and analyzing the data
def prepareData(csvPath):
    # reading csv file
    df = pd.read_csv(csvPath)

    # info about the data- checking missing values and the datatypes of the features
    print(df.info())

    # fix datatypes
    df = fixingDatatypes(df)

    # check the correlation of the features
    plotHeatmap(df)

    # removing features that are not needed- ambiguous or add no importance to the analysis
    df.drop(columns=['instant'], inplace=True)
    df.drop(columns=['dteday'], inplace=True)
    df.drop(columns=['atemp'], inplace=True)
    df.drop(columns=['hum'], inplace=True)

    # x contains season, year, month, holiday, weekday, workingday, weathersit, temp, windspeed
    x = df.iloc[:, :-3].values
    # y contains casual, registered, count
    y = df.iloc[:, -3:].values
    return x, y


# showing the heatmap to check linear correlation between features
def plotHeatmap(df):
    # check the correlation of the features
    plt.subplots(figsize=(9, 9))
    heatmapFeatures = df[['cnt', 'season', 'yr', 'mnth', 'holiday', 'weekday', 'workingday',
                          'weathersit', 'temp', 'atemp', 'hum', 'windspeed']]
    sns.heatmap(abs(heatmapFeatures.corr()), square=True, annot=True, cmap="Reds")
    plt.show()  # heatmap graph


# receives the model with the data and executes it. returns the loss and the predictions
def executeModel(model, x_train, x_test, y_train, y_test):
    model.fit(x_train, y_train[:, 2])
    y_hat = model.predict(x_test)
    # print(np.round(y_hat))
    # print(y_test[:, 2])
    # Mean Square Error- the sum of squared distances between the target variable and predicted values
    # We chose MSE as our loss function because it is outlier sensitive: sigma((y_hat-y_test)^2)
    modelMSE = mean_squared_error(y_hat, y_test[:, 2])
    # normalize MSE (divided by the ||y_hat||^2)
    modelMSE = modelMSE / (mean_squared_error(y_hat, np.zeros(len(y_hat))))
    return modelMSE, y_hat


# plot the graph for each model
def plotModelGraph(y_test, y_hat, sign, model_name):
    plt.subplots(figsize=(8, 6))
    plt.plot(y_test[:, 2], y_hat, sign)
    plt.xlabel("Predicted Value")
    plt.ylabel("Count Value")
    plt.title(model_name)
    plt.show()


# executing all models that predict count
def executeAllModels(x, y):
    # Splitting the training and test data
    x_train, x_test, y_train, y_test = train_test_split(x, y, test_size=0.2, random_state=0)

    # we are dealing with continuous numerical variables so Linear Regression, SVR
    # and Random Forest Regressor are the right choices to train and predict bikes rental count

    # Linear Regression- Predict count
    loss, y_hat = executeModel(LinearRegression(), x_train, x_test, y_train, y_test)
    print("Linear Regression loss: " + str(loss))
    plotModelGraph(y_test, y_hat, ".", "Linear Regression")

    # SVR- Predict count
    loss, y_hat = executeModel(SVR(kernel='rbf', C=100, gamma=0.1, epsilon=.1), x_train, x_test, y_train, y_test)
    print("SVR loss: " + str(loss))
    plotModelGraph(y_test, y_hat, "^", "SVR")

    # Random Forest Regressor- Predict count
    loss, y_hat = executeModel(RandomForestRegressor(n_estimators=150, max_depth=200, random_state=0), x_train, x_test,
                               y_train, y_test)
    print("Random Forest loss: " + str(loss))
    plotModelGraph(y_test, y_hat, "*", "Random Forest")


# the function predicts count for all 3 models by calling prepare data and executeAllModels functions
def predictCount(file_path):
    # prepare data
    x, y = prepareData(file_path)
    # execute models to predict count on the dataset
    executeAllModels(x, y)


# detecting anomalies in the dataset using PCA, K-Means and Isolation Forest
def detectAnomalies(file_path):
    # reading the data and fixing data types
    df = pd.read_csv(file_path)
    df = fixingDatatypes(df)

    # subset of the dataset for the anomaly detection test without dtday, casual, registered, instant and atemp
    # removing features that are not needed- ambiguous or add no importance to the analysis
    reduced_df = df[['cnt', 'season', 'yr', 'mnth', 'holiday', 'weekday', 'workingday',
                     'weathersit', 'temp', 'hum', 'windspeed']]

    # Z-score- standardize features by removing the mean and scaling to unit variance: z = (x - u) / s
    reduced_df = zScoreNormalize(reduced_df)  # graph before PCA

    # performing PCA - reduce to 2 important features
    pca = PCA(n_components=2)
    reduced_df = pca.fit_transform(reduced_df)  # graph after PCA but before min_max normalization
    # standardize these 2 new features, now we can perform K-Means and Isolation Forest
    reduced_df = zScoreNormalize(reduced_df)  # graph after PCA

    # perform K-Means
    K_Means(df, reduced_df)

    # perform Isolation Forest
    Isolation_forest(df, reduced_df)

    # save anomalies in file
    saveAnomalies(df)


# Z-score- standardize features by removing the mean and scaling to unit variance: z = (x - u) / s
def zScoreNormalize(reduced_df):
    Scaler = StandardScaler()
    np_scaled = Scaler.fit_transform(reduced_df)  # plot info, put breakpoint here to show PCA
    return pd.DataFrame(np_scaled)


# performing K-Means end to end: elbow function, choosing k, clusters, anomalies
def K_Means(df, reduced_df):
    # elbow method to choose K
    n_cluster = range(1, 10)
    kmeans = [KMeans(n_clusters=i).fit(reduced_df) for i in n_cluster]
    scores = [kmeans[i].score(reduced_df) for i in range(len(kmeans))]
    fig, ax = plt.subplots(figsize=(6, 3))
    ax.plot(n_cluster, scores)
    plt.show()

    # chosen K is 3, hence index 2 and plot the sticks graph
    cluster_index = 2
    df['cluster'] = kmeans[cluster_index].predict(reduced_df)
    df['PCA1'] = reduced_df[0]
    df['PCA2'] = reduced_df[1]
    plt.subplots(figsize=(8, 6))
    plt.yticks(df['cluster'].value_counts())
    df['cluster'].value_counts().plot.bar()
    plt.show()

    # K-Means result plot the different clusters with the 2 main features
    plotAnomalyGraph(df, "cluster")

    outliers_fraction = 0.05
    # get the distance between each point and its nearest centroid. The biggest distances are considered as anomalies.
    distance = getDistanceByPoint(reduced_df, kmeans[cluster_index])
    number_of_outliers = int(outliers_fraction * len(distance))

    # return the first number_of_outliers rows ordered by columns in descending order.
    threshold = distance.nlargest(number_of_outliers).min()

    # create column for the anomaly result of K-Means (0:normal, 1:anomaly)
    df['Anom-KMeans'] = (distance >= threshold).astype(int)
    plotAnomalyGraph(df, 'Anom-KMeans')  # K-Means graph clusters (divided to anomalies)


# returns the distance of each example from the center of it's cluster
def getDistanceByPoint(data, model):
    distance = pd.Series()
    for i in range(0, len(data)):
        Xa = np.array(data.loc[i])
        Xb = model.cluster_centers_[model.labels_[i] - 1]
        distance.at[i] = np.linalg.norm(Xa - Xb)
    return distance


# performing Isolation Forest
def Isolation_forest(df, reduced_df):
    outliers_fraction = 0.05
    model = IsolationForest(contamination=outliers_fraction)
    model.fit(reduced_df)
    # create column for the anomaly result of Isolation Forest (0:normal, 1:anomaly)
    df['Anom-Isol'] = pd.Series(model.predict(reduced_df))
    df['Anom-Isol'] = df['Anom-Isol'].map({1: 0, -1: 1})
    plotAnomalyGraph(df, 'Anom-Isol')  # isolation forest graph (divided to anomalies)


# plot the graph for the anomalies
def plotAnomalyGraph(df, hue_name):
    plt.subplots(figsize=(10, 8))
    sns.scatterplot(df['PCA1'], df['PCA2'], hue=df[hue_name],
                    data=df, style=df["cluster"])
    plt.show()


# save anomalies in csv file and show results
def saveAnomalies(df):
    an = pd.DataFrame(df)
    an.to_csv(CSV_ANOM_PATH, index=False, header=True)

    # final results
    print(df['Anom-KMeans'].value_counts())
    print(df['Anom-Isol'].value_counts())


############################################
def ttest(df):
    # As we can see below season has an impact on bikeshare usage.
    # There are the least number of rides in winter and the greatest in summer.
    # The large T-Value of -20.41 and the small P-Value of 2.12e-62 tell us there is
    # a significant difference between summer and winter ridership.
    # The differences in ridership between Spring and Fall however are not significant
    # with a small T-value of 1.48 and a large P-Value of 0.14.
    print('Winter vs. Spring:')
    print(ttest_ind(df.cnt[df['season'] == 1], df.cnt[df['season'] == 2]))
    print("")
    print('Winter vs. Summer:')
    print(ttest_ind(df.cnt[df['season'] == 1], df.cnt[df['season'] == 3]))
    print("")
    print('Winter vs. Fall:')
    print(ttest_ind(df.cnt[df['season'] == 1], df.cnt[df['season'] == 4]))
    print("")
    print('Spring vs. Fall:')
    print(ttest_ind(df.cnt[df['season'] == 2], df.cnt[df['season'] == 4]))
    print("")
    print('Spring vs. Summer:')
    print(ttest_ind(df.cnt[df['season'] == 2], df.cnt[df['season'] == 3]))
    print("")
    print('Summer vs. Fall:')
    print(ttest_ind(df.cnt[df['season'] == 3], df.cnt[df['season'] == 4]))
    print("")


def rideBySeason(df):
    fig, ax = plt.subplots()
    sns.barplot(data=df[['season', 'cnt']],
                x='season',
                y='cnt',
                ax=ax)

    plt.title('Rental bikes by season')
    plt.ylabel('Total Rides')
    plt.xlabel('Season')

    tick_val = [0, 1, 2, 3]
    tick_lab = ['Winter', 'Spring', 'Summer', 'Fall']
    plt.xticks(tick_val, tick_lab)

    plt.show()


def rideByMonth(df):
    fig, ax = plt.subplots()
    sns.barplot(data=df[['mnth', 'cnt']], x='mnth', y='cnt', ax=ax)

    plt.title('Rental bikes by month')
    plt.ylabel('Total Rides')
    plt.xlabel('month')

    tick_val = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
    tick_lab = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct',
                'Nov', 'Dec']
    plt.xticks(tick_val, tick_lab)

    plt.show()


def rideByDay(df):
    # create a column for the day of the month, range 1-31
    df['day_of_month'] = df.dteday.str[:2]

    fig, ax = plt.subplots(figsize=(10, 5))
    sns.pointplot(data=df[['day_of_month', 'cnt', 'season']],
                  x='day_of_month',
                  y='cnt',
                  hue='season',
                  ax=ax)

    plt.title('Rental bikes by day')
    plt.ylabel('Total Rides')
    plt.xlabel('Day of Month')

    leg_handles = ax.get_legend_handles_labels()[0]
    ax.legend(leg_handles, ['Winter', 'Spring', 'Summer', 'Fall'], title='Season', bbox_to_anchor=(1, 1), loc=2)
    plt.show()


def rideByWeather(df):
    # As we can see below, types of weather has a large impact on ridership.
    # There are significantly less rides during snow and thunderstorms than during periods of nicer weather.
    # We can also see that this trend holds up across all seasons
    plt.rcParams['figure.figsize'] = [13.0, 10.0]
    sns.set_context('talk', font_scale=0.8)

    g = sns.FacetGrid(data=df,
                      col='season',
                      row='weathersit', hue='season')
    g.map(plt.hist, 'cnt')
    plt.subplots_adjust(top=0.9)
    g.fig.suptitle('Rental bikes by weather type')

    g.set_xlabels('Total Rides')
    g.set_ylabels('Frequency')

    plt.show()


def countPerDay(df):
    df.cnt.plot(title="Count of total rental bikes per day")
    plt.xlabel("")
    plt.ylabel("Count")
    plt.tight_layout()
    plt.show()


def pieChartBySeason(df):
    season_data = df[['season', 'cnt']]
    grouped_data = season_data.groupby('season', as_index=False).sum()
    grouped_data['season'].replace([1, 2, 3, 4], ['spring', 'summer', 'fall', 'winter'], inplace=True)

    plt.figure(figsize=(6, 6))
    plt.pie(grouped_data['cnt'],
            labels=grouped_data['season'],
            autopct='%.1f',
            wedgeprops={'linewidth': 4,
                        'edgecolor': "white"})

    plt.suptitle('Percentage count of rental bikes by season')
    plt.show()


def analyzeData(CSV_PATH):
    df = pd.read_csv(CSV_PATH)

    # peeking first 5 rows to make sure file was read properly
    print(df.head())

    # getting some interesting info about count
    print(df['cnt'].describe())

    # plot count graph per day
    countPerDay(df)

    # question: does season affect bikeshare usage? yes
    ttest(df)
    rideBySeason(df)
    pieChartBySeason(df)
    rideByMonth(df)
    rideByDay(df)

    # question: does weather affect bikeshare usage? yes
    rideByWeather(df)


############################################
if __name__ == '__main__':
    # analyze data.
    # analyzeData(CSV_PATH)

    # # predict count before anomaly-detector.
    # predictCount(CSV_PATH)

    # # detect anomalies.
    # detectAnomalies(CSV_PATH)

    # # predict count after anomalies are removed from the dataset -> loss is lower -> better accuracy.
    predictCount(CSV_NO_ANOMALIES_PATH)

    print("\n\nTHE END\n\n")
