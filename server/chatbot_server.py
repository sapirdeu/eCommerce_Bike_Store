import sys
import pandas as pd
import matplotlib.pyplot as plt
import base64
from io import BytesIO
import geopandas
import numpy as np
import pingouin as pg
import typing
import seaborn as sns

# import warnings
# warnings.filterwarnings("ignore", category=DeprecationWarning)

# # import warnings

# # warnings.filterwarnings()
# import os

# # Set environment variables
# os.environ['OUTDATED_IGNORE'] = 1


survey_df = pd.read_csv('./server/Bot_Research.csv')
#survey_df = pd.read_csv('D:\\ReactProjects\\eCommerce_Bike_Store\\server\\Bot Research 8 - real bot _April 25, 2021_00.35 - Sheet1.csv')

def surveyOverview():
    return survey_df.info()


def clipingOutliersFirst():
    return (
        survey_df
        .loc[2:,['Duration (in seconds)']]
        .astype(int)
        .quantile([0.05, 0.95])
    )


def clipingOutliersSecond():
    pd.set_option("display.max_rows", None, "display.max_columns", None)
    valid_survey_df = (
        survey_df
        .loc[2:,:]
        .assign(duration = lambda x : pd.to_numeric(x['Duration (in seconds)']))
        .query("duration > 100 and duration < 900")
    )
    return valid_survey_df


def historgram(valid_survey_df):
    (
        valid_survey_df
        ['duration']
        .plot(
            kind='hist', 
            alpha=0.5, 
            title='Duration (in seconds) (between 0.05 and 0.95)'
        )
    )

    tmpfile = BytesIO()
    plt.savefig(tmpfile, format='png')
    encoded = base64.b64encode(tmpfile.getvalue()).decode('utf-8')
    html = '<img src=\'data:image/png;base64,{}\'>'.format(encoded)
    return html


def respondersMap(valid_survey_df):
    gdf = (
        geopandas
        .GeoDataFrame(
            valid_survey_df, 
            geometry=geopandas.points_from_xy(
                valid_survey_df.LocationLongitude, 
                valid_survey_df.LocationLatitude)
            )
    )
    world = geopandas.read_file(geopandas.datasets.get_path('naturalearth_lowres'))

    ax = (
        world
        .plot(
            color='white', 
            edgecolor='black',
            figsize=(15,10)
            )
    )
    gdf.plot(ax=ax, color='red')

#    plt.show()

    tmpfile = BytesIO()
    plt.savefig(tmpfile, format='png')
    encoded = base64.b64encode(tmpfile.getvalue()).decode('utf-8')
    html = '<img src=\'data:image/png;base64,{}\'>'.format(encoded)
    return html
    # print ("hello11")


def personalityScoreMini():
    print(
        survey_df
        .loc[0,'E1':'I20R']
    )


def ipip_df(valid_survey_df):
    survey_ipip_df = (
        valid_survey_df
        .assign(pE = 0)
        .assign(pA = 0)
        .assign(pC = 0)
        .assign(pN = 0)
        .assign(pI = 0)
        .assign(pE = lambda x : x.pE + x.E1.str[-1:].astype(int))
        .assign(pA = lambda x : x.pA + x.A2.str[-1:].astype(int))
        .assign(pC = lambda x : x.pC + x.C3.str[-1:].astype(int))
        .assign(pN = lambda x : x.pN + x.N4.str[-1:].astype(int))
        .assign(pI = lambda x : x.pI + x.I5.str[-1:].astype(int))
        .assign(pE = lambda x : x.pE + 6 - x.E6R.str[-1:].astype(int))
        .assign(pA = lambda x : x.pA + 6 - x.A7R.str[-1:].astype(int))
        .assign(pC = lambda x : x.pC + 6 - x.C8R.str[-1:].astype(int))
        .assign(pN = lambda x : x.pN + 6 - x.N9R.str[-1:].astype(int))
        .assign(pI = lambda x : x.pI + 6 - x.I10R.str[-1:].astype(int))
        .assign(pE = lambda x : x.pE + x.E11.str[-1:].astype(int))
        .assign(pA = lambda x : x.pA + x.A12.str[-1:].astype(int))
        .assign(pC = lambda x : x.pC + x.C13.str[-1:].astype(int))
        .assign(pN = lambda x : x.pN + x.N14.str[-1:].astype(int))
        .assign(pI = lambda x : x.pI + 6 - x.I15R.str[-1:].astype(int))
        .assign(pE = lambda x : x.pE + 6 - x.E16R.str[-1:].astype(int))
        .assign(pA = lambda x : x.pA + 6 - x.A17R.str[-1:].astype(int))
        .assign(pC = lambda x : x.pC + 6 - x.C18R.str[-1:].astype(int))
        .assign(pN = lambda x : x.pN + 6 - x.N19R.str[-1:].astype(int))
        .assign(pI = lambda x : x.pI + 6 - x.I20R.str[-1:].astype(int))
        .assign(pE = lambda x : x.pE / 4)
        .assign(pA = lambda x : x.pA / 4)
        .assign(pC = lambda x : x.pC / 4)
        .assign(pN = lambda x : x.pN / 4)
        .assign(pI = lambda x : x.pI / 4)
    )
    return survey_ipip_df

def personalityScoreCalcFirst(survey_ipip_df):
    #survey_ipip_df = ipip_df(valid_survey_df)
    (
        survey_ipip_df
        .pE
        .hist()
    ).set_title("Extroverts")
    
    tmpfile = BytesIO()
    plt.savefig(tmpfile, format='png')
    encoded = base64.b64encode(tmpfile.getvalue()).decode('utf-8')
    html = '<img src=\'data:image/png;base64,{}\'>'.format(encoded)

    return html


def personalityScoreCalcSecond(survey_ipip_df):
    #survey_ipip_df = ipip_df(valid_survey_df)
    plt.gca().cla()

    (
        survey_ipip_df
        .pI
        .hist()
    ).set_title("Information")
    
    tmpfile = BytesIO()
    plt.savefig(tmpfile, format='png')
    encoded = base64.b64encode(tmpfile.getvalue()).decode('utf-8')
    html = '<img src=\'data:image/png;base64,{}\'>'.format(encoded)

    return html


def groupAssignment(survey_ipip_df):
        #survey_ipip_df = ipip_df(valid_survey_df)
        survey_ipip_df['group'] = np.select(
            [
                survey_ipip_df['Introvert_Time_Page Submit'].notnull(), 
                survey_ipip_df['Extrovert_Time_Page Submit'].notnull(), 
            ], 
            [
                'Introvert Bot', 
                'Extrovert Bot'
            ], 
            default='Unknown'
        )

        return (
            survey_ipip_df
            .groupby('group')
            ['Finished']
            .count()
        )


def analyzingResponse():
    return (
    survey_df
    .loc[0,'Appropriate 1':'Online experience 1']
    )
    #return survey_questions


def numeric_ipip_df(survey_ipip_df):
    numeric_survey_ipip_df = (
    survey_ipip_df
        .apply(lambda x: x.str[-1:].astype(int) if x.name.startswith('Appropriate') else x)
        .apply(lambda x: x.str[-1:].astype(int) if x.name.startswith('Trust') else x)
        .apply(lambda x: x.str[-1:].astype(int) if x.name.startswith('Retention') else x)
        .apply(lambda x: x.str[-1:].astype(int) if x.name.startswith('Purchase') else x)
        .apply(lambda x: x.str[-1:].astype(int) if x.name.startswith('Online') else x)
    )
    return numeric_survey_ipip_df

##################### Anaconda funcs ######################
# Testing Reliability with Alpha Button
def get_questions_for(numeric_survey_ipip_df, attribute:str):
    '''
    Function to return all the question of a specific attribute based on the prefix
    of the question name
    '''
    return [x for x in numeric_survey_ipip_df.columns if x.startswith(attribute)]

# def cronbach_alpha(numeric_survey_ipip_df, str):
#     pg.cronbach_alpha(data=
#     numeric_survey_ipip_df
#     .loc[:,get_questions_for(str)])

# # Cronbach-Alpha Summary Button
# def summary_numeric_df(numeric_survey_ipip_df):
#     summary_numeric_survey_df = (
#     numeric_survey_ipip_df
#     .assign(Purchase = 
#         numeric_survey_ipip_df[get_questions_for(numeric_survey_ipip_df,'Purchase')]
#         .mean(axis='columns')
#     )
#     .assign(Appropriate = 
#         numeric_survey_ipip_df[get_questions_for(numeric_survey_ipip_df,'Appropriate')]
#         .mean(axis='columns')
#     )
#     .assign(Trust = 
#         numeric_survey_ipip_df[get_questions_for(numeric_survey_ipip_df,'Trust')]
#         .mean(axis='columns')
#     )
#     .assign(Trust_Competence = 
#         numeric_survey_ipip_df[get_questions_for(numeric_survey_ipip_df,'Trust Competence')]
#         .mean(axis='columns')
#     )
#     .assign(Trust_Benevolence = 
#         numeric_survey_ipip_df[get_questions_for(numeric_survey_ipip_df,'Trust Benevolence')]
#         .mean(axis='columns')
#     )
#     .assign(Trust_Info = 
#         numeric_survey_ipip_df[get_questions_for(numeric_survey_ipip_df,'Trust Info')]
#         .mean(axis='columns')
#     ))

#     return summary_numeric_survey_df


# def cronbach_alpha_summary(summary_numeric_survey_df,survey_attributes):
#     # survey_attributes = ['Appropriate','Trust_Benevolence','Trust_Competence','Trust_Info','Purchase','Trust']
#     # personality_attributes = ['pE','pA','pC','pN','pI']

#     for attribute in survey_attributes:
#         fig, ax = plt.subplots()
#         (
#             summary_numeric_survey_df
#             [attribute]
#             .hist(ax=ax)
#         ).set_title(attribute)

#     (
#     summary_numeric_survey_df
#     [survey_attributes +['group']]
#     .boxplot(by='group', figsize=(13,8))
#     )
#     #make graphs suit html format


# # Visual Differences between the groups for the questions Button
# def visual_diffrences_graph(summary_numeric_survey_df,survey_questions):
#     (
#     summary_numeric_survey_df
#     .boxplot(column=list(survey_questions.index), by='group', figsize=(14, 10))
#     )

# # Scatter with the personality attributes button
# def scatter_personality_attr(summary_numeric_survey_df, survey_attributes):
#     fig, ax = plt.subplots(6, 2, figsize=(10,12))

#     for idx, attribute in enumerate(survey_attributes):
#         for i,group in enumerate(sorted(summary_numeric_survey_df.group.unique())):
#             sub_df = summary_numeric_survey_df.query('group == @group')
#             sns.regplot(x=sub_df.pE, y=sub_df[attribute], ax=ax[idx,i])
#             ax[idx,i].set_title(group, loc='left')

#     fig.tight_layout()
#     # fig.subplots_adjust(top=0.95)

#     plt.show()
#     # plt.clf()
#     # plt.close()



def main(argv):
    valid_survey_df = clipingOutliersSecond()
    survey_ipip_df = ipip_df(valid_survey_df)
    numeric_survey_ipip_df = numeric_ipip_df(survey_ipip_df)
    #summary_numeric_survey_df = summary_numeric_df(numeric_survey_ipip_df)

    #survey_questions = analyzingResponse()
    #survey_attributes = ['Appropriate','Trust_Benevolence','Trust_Competence','Trust_Info','Purchase','Trust']
    #personality_attributes = ['pE','pA','pC','pN','pI']
    
    if (argv[0] == '1'):
        surveyOverview()
    elif (argv[0] == '2'):
        print(clipingOutliersFirst())
        print('\n')
        print(valid_survey_df)
    elif (argv[0] == '3'):
        print (historgram(valid_survey_df))
    elif (argv[0] == '4'):
        print(respondersMap(valid_survey_df))
    elif (argv[0] == '5'):
        personalityScoreMini()
    elif (argv[0] == '6'):
        print (personalityScoreCalcFirst(survey_ipip_df))
        print (personalityScoreCalcSecond(survey_ipip_df))
    elif (argv[0] == '7'):
        print(groupAssignment(survey_ipip_df))
    elif (argv[0] == '8'):
        print(analyzingResponse())
    # elif (argv[0] == '9'):
    #     print('Appropriate: ', cronbach_alpha(numeric_survey_ipip_df,'Appropriate'))
    #     print('Trust: ', cronbach_alpha(numeric_survey_ipip_df,'Trust'))
    #     print('Trust Competence: ', cronbach_alpha(numeric_survey_ipip_df,'Trust Competence'))
    #     print('Trust Benevolence: ', cronbach_alpha(numeric_survey_ipip_df,'Trust Benevolence'))
    #     print('Trust Info: ', cronbach_alpha(numeric_survey_ipip_df,'Trust Info'))
    #     print('Purchase: ', cronbach_alpha(numeric_survey_ipip_df,'Purchase'))
    # elif (argv[0] == '10'):
    #     print(cronbach_alpha_summary(summary_numeric_survey_df,survey_attributes))
    #     print(list(survey_questions.index))
    # elif (argv[0] == '11'):
    #     print(visual_diffrences_graph(summary_numeric_survey_df,survey_questions))
    # elif (argv[0]== '12'):
    #     print(scatter_personality_attr(summary_numeric_survey_df, survey_attributes))
    else:
        print("bye")


if __name__ == "__main__":
    main(sys.argv[1:])