import os
import pandas as pd

CSV_PATH = "./bike_sharing_daily.csv"

def prepareData(csvPath):
    ######################################
    ########## DATA PREPARATION ##########
    ######################################

    df = pd.read_csv(csvPath)
    # Converting the dteday column which is of type object to datetime64
    df['dteday'] = df['dteday'].astype('datetime64')
    # As the instant columns in just the index removing them won't effect
    df.drop(columns=['instant'], inplace=True)
    df.drop(columns=['atemp'], inplace=True)
    df.drop(columns=['mnth'], inplace=True)
    df.drop(columns=['hum'], inplace=True)
    df.drop(columns=['dteday'], inplace=True)

    #
    x = df.iloc[:, :-3].values
    y = df.iloc[:, -3:].values

    


if __name__ == '__main__':
    # prepare data
    prepareData(CSV_PATH)
    print("\n\nTHE END\n\n")
