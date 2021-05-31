const frontForkTravel = [
    {
        "_id": 140,
        "name": "140 mm"
    },
    {
        "_id": 150,
        "name": "150 mm"
    },
    {
        "_id": 160,
        "name": "160 mm"
    }
]

const weight = [
    {
        "_id": 0,
        "name": "Any",
        "array": []
    },
    {
        "_id": 1,
        "name": "13.0 kg to 13.49 kg",
        "array": [13.0, 13.49]
    },
    {
        "_id": 2,
        "name": "13.5 kg to 14.49 kg",
        "array": [13.5, 14.49]
    },
    {
        "_id": 3,
        "name": "More than 14.5 kg",
        "array": [14.5, 1500000]
    },
]

const price = [
    {
        "_id": 0,
        "name": "Any",
        "array": []
    },
    {
        "_id": 1,
        "name": "$0 to $999",
        "array": [0, 999]
    },
    {
        "_id": 2,
        "name": "$1000 to $1999",
        "array": [1000, 1999]
    },
    {
        "_id": 3,
        "name": "$2000 to $2999",
        "array": [2000, 2999]
    },
    {
        "_id": 4,
        "name": "$3000 to $3999",
        "array": [3000, 3999]
    },
    {
        "_id": 5,
        "name": "More than $4000",
        "array": [4000, 1500000]
    },
]

const chatbotStatistics = [
    {
        "_id": 1,
        "name": "Survey Overview"
    },
    {
        "_id": 2,
        "name": "Clipping Outliers"
    },
    {
        "_id": 3,
        "name": "Historgram of the duration of test taking (after clipping)"
    },
    {
        "_id": 4,
        "name": "Map of responders"
    },
    {
        "_id": 5,
        "name": "Personality Score - Mini-IPIP test questions"
    },
    {
        "_id": 6,
        "name": "Personality Score Calculation"
    },
    {
        "_id": 7,
        "name": "Random Groups - Group Assignment"
    },
    {
        "_id": 8,
        "name": "Analyzing the survey response to the different aspects of the experiment"
    },
    {
        "_id": 9,
        "name": "Testing Reliability with Alpha"
    },
    {
        "_id": 10,
        "name": "Cronbach-Alpha Summary"
    },
    {
        "_id": 11,
        "name": "Visual Differences between the groups for the questions"
    },
    {
        "_id": 12,
        "name": "Scatter with the personality attributes"
    },
    {
        "_id": 13,
        "name": "Analysis of each question"
    }
]

const mlResearch = [
    {
        "_id": 1,
        "name": "Research Overview"
    },
    {
        "_id": 2,
        "name": "Analyze Data"
    },
    {
        "_id": 3,
        "name": "Predctions Before Anomaly Detection"
    },
    {
        "_id": 4,
        "name": "Detect Anomalies"
    },
    {
        "_id": 5,
        "name": "Predctions After Anomaly Detection"
    }
]

export {frontForkTravel, weight, price, chatbotStatistics, mlResearch}