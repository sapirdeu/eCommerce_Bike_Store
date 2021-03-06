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
        "name": "Survey overview"
    },
    {
        "_id": 2,
        "name": "Clipping outliers"
    },
    {
        "_id": 3,
        "name": "Historgram of the duration of test taking"
    },
    {
        "_id": 4,
        "name": "Map of responders"
    },
    {
        "_id": 5,
        "name": "Personality score - mini-IPIP"
    },
    {
        "_id": 6,
        "name": "Personality score calculation"
    },
    {
        "_id": 7,
        "name": "Random groups - group assignment"
    },
    {
        "_id": 8,
        "name": "Analyzing the survey response"
    },
    {
        "_id": 9,
        "name": "Testing reliability with alpha"
    },
    {
        "_id": 10,
        "name": "Cronbach alpha summary"
    },
    {
        "_id": 11,
        "name": "Visual differences between the groups"
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
        "name": "Rental Bikes PoC Overview"
    },
    {
        "_id": 2,
        "name": "Data Analysis"
    },
    {
        "_id": 3,
        "name": "Data Preparation"
    },
    {
        "_id": 4,
        "name": "Predictions Before Anomaly Detection"
    },
    {
        "_id": 5,
        "name": "Anomaly Detector"
    },
    {
        "_id": 6,
        "name": "Predictions After Anomaly Detection"
    }
]

export {frontForkTravel, weight, price, chatbotStatistics, mlResearch}