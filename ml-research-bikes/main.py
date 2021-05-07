import os
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from sklearn.preprocessing import OneHotEncoder
from sklearn.compose import ColumnTransformer
from sklearn.model_selection import train_test_split
from sklearn.metrics import r2_score, mean_squared_error
from sklearn.linear_model import LinearRegression
from sklearn.svm import SVR
from sklearn.ensemble import RandomForestRegressor

CSV_PATH = "./bike_sharing_daily.csv"

# pre-processing and analyzing the data
def prepareData(csvPath):
    # reading csv file
    df = pd.read_csv(csvPath)

    # peeking first 5 rows to make sure file was read properly
    print(df.head())

    # checking missing values - no missing values in the dataset
    print(df.info())

    # getting some interesting info about count
    print(df['cnt'].describe())

    # removing features that are not needed
    df.drop(columns=['instant'], inplace=True)
    df.drop(columns=['atemp'], inplace=True)
    df.drop(columns=['mnth'], inplace=True)
    df.drop(columns=['hum'], inplace=True)
    df.drop(columns=['dteday'], inplace=True)

    # x contains season, year, holiday, weekday, workingday, weathersit, temp, windspeed
    x = df.iloc[:, :-3].values
    # y contains casual, registered, count
    y = df.iloc[:, -3:].values

    #
    ct = ColumnTransformer(
        [('one_hot_encoder', OneHotEncoder(), [0, 3, 5])],
    # Leave the rest of the columns untouched
        remainder='passthrough'
    )

    x = np.array(ct.fit_transform(x), dtype=np.float)
    # To avoid dummy variable trap
    x = np.delete(x, [3, 10, 13], axis=1)

    return x,y


# receives the model with the data and executes it. returns the loss and the predictions
def executeModel(model, x_train, x_test, y_train, y_test):
    model.fit(x_train, y_train[:, 2])
    y_hat = model.predict(x_test)
    modelR2 = r2_score(y_test[:, 2], y_hat)
    # Mean Square Error- the sum of squared distances between the target variable and predicted values
    # We chose MSE as our loss function because it is outlier sensitive
    modelMSE = mean_squared_error(y_test[:, 2], y_hat)
    return modelMSE, y_hat


# plot the graph for each model
def plotModelGraph(y_test, y_hat, sign, model_name):
    plt.plot(y_test[:, 2], y_hat, sign)
    plt.xlabel("Predicted Value")
    plt.ylabel("Count Value")
    plt.title(model_name)
    plt.show()


# executing all models that predict count
def executeAllModels(x,y):
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
    # predict count
    predictCount(CSV_PATH)

    print("\n\nTHE END\n\n")
