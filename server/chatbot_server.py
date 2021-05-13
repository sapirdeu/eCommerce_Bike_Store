import sys
import pandas as pd
import matplotlib.pyplot as plt

survey_df = pd.read_csv('./server/Bot Research 8 - real bot _April 25, 2021_00.35 - Sheet1.csv')

def surveyOverview():
    print(survey_df.info())


def clipingOutliersFirst():
    print(
        survey_df
        .loc[2:,['Duration (in seconds)']]
        .astype(int)
        .quantile([0.05, 0.95])
    )
    print('\n')


def clipingOutliersSecond():
    pd.set_option("display.max_rows", None, "display.max_columns", None)
    valid_survey_df = (
        survey_df
        .loc[2:,:]
        .assign(duration = lambda x : pd.to_numeric(x['Duration (in seconds)']))
        .query("duration > 100 and duration < 900")
    )
    print(valid_survey_df)


def personalityScoreMini():
    print(
        survey_df
        .loc[0,'E1':'I20R']
    )


def main(argv):
    if (argv[0] == '1'):
        surveyOverview()
    elif (argv[0] == '2'):
        clipingOutliersFirst()
        clipingOutliersSecond()
    elif (argv[0] == '3'):
        personalityScoreMini()
    else:
        print("bye")


if __name__ == "__main__":
    main(sys.argv[1:])