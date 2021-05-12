import sys
import pandas as pd
import matplotlib.pyplot as plt

survey_df = pd.read_csv('./server/Bot Research 8 - real bot _April 25, 2021_00.35 - Sheet1.csv')

def surveyOverview():
    print(survey_df.info())

# print("hellooooooo1")

def main(argv):
    if (argv[0] == '1'):
        surveyOverview()
    else:
        print("bye")


if __name__ == "__main__":
    main(sys.argv[1:])