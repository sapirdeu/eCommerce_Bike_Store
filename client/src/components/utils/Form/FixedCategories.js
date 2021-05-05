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

export {frontForkTravel, weight, price}