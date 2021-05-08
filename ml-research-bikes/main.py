import os
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
import warnings
from sklearn.linear_model import LinearRegression
from sklearn.svm import SVR
from sklearn.ensemble import RandomForestRegressor
from sklearn.metrics import r2_score, mean_squared_error
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler



warnings.filterwarnings('ignore')

CSV_PATH = "./bike_sharing_daily.csv"

#- instant: record index
#- dteday : date
#- season : season (1:springer, 2:summer, 3:fall, 4:winter)
#- yr : year (0: 2011, 1:2012)
#- mnth : month ( 1 to 12)
#- holiday : weather day is holiday or not (extracted from http://dchr.dc.gov/page/holiday-schedule)
#- weekday : day of the week
#- workingday : if day is neither weekend nor holiday is 1, otherwise is 0.
#+ weathersit :
#    - 1: Clear, Few clouds, Partly cloudy, Partly cloudy
#    - 2: Mist + Cloudy, Mist + Broken clouds, Mist + Few clouds, Mist
#    - 3: Light Snow, Light Rain + Thunderstorm + Scattered clouds, Light Rain + Scattered clouds
#    - 4: Heavy Rain + Ice Pallets + Thunderstorm + Mist, Snow + Fog
#- temp : Normalized temperature in Celsius. The values are divided to 41 (max)
#- atemp: Normalized feeling temperature in Celsius. The values are divided to 50 (max)
#- hum: Normalized humidity. The values are divided to 100 (max)
#- windspeed: Normalized wind speed. The values are divided to 67 (max)
#- casual: count of casual users
#- registered: count of registered users
#- cnt: count of total rental bikes including both casual and registered


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



# showing the heatmap to check linear correlation between features
def plotHeatmap(df):
    # check the correlation of the features TODO: make a heatmap function
    heatmapFeatures = df[['cnt', 'season', 'yr', 'mnth', 'holiday', 'weekday', 'workingday',
                   'weathersit', 'temp', 'atemp', 'hum', 'windspeed']]
    sns.heatmap(abs(heatmapFeatures.corr()), square=True, annot=True, cmap="Reds")
    plt.show()  ##### 5.5.2021 heatmap graph


# pre-processing and analyzing the data
def prepareData(csvPath):
    # reading csv file
    df = pd.read_csv(csvPath)

    # peeking first 5 rows to make sure file was read properly
    print(df.head())

    # info about the data- checking missing values and the datatypes of the features
    print(df.info())

    # fix datatypes
    df=fixingDatatypes(df)

    # getting some interesting info about count
    print(df['cnt'].describe())

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


# receives the model with the data and executes it. returns the loss and the predictions
def executeModel(model, x_train, x_test, y_train, y_test):
    model.fit(x_train, y_train[:, 2])
    y_hat = model.predict(x_test)
    print(np.round(y_hat))
    print(y_test[:, 2])
    modelR2 = r2_score(y_test[:, 2], y_hat)
    # Mean Square Error- the sum of squared distances between the target variable and predicted values
    # We chose MSE as our loss function because it is outlier sensitive: sigma((y_hat-y_test)^2)
    modelMSE = mean_squared_error(y_hat,y_test[:, 2])
    # normalize MSE (divided by the ||y_hat||^2)
    modelMSE = modelMSE/(mean_squared_error(y_hat,np.zeros(len(y_hat))))
    return modelMSE, y_hat


# plot the graph for each model
def plotModelGraph(y_test, y_hat, sign, model_name):
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


if __name__ == '__main__':
    # predict count before anomaly-detector.
    predictCount(CSV_PATH)

    print("\n\nTHE END\n\n")

