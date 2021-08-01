import axios from 'axios'
import {
    GET_CHATBOT_SURVEY_OVERVIEW,
    GET_CHATBOT_CLIPING_OUTLIERS,
    GET_CHATBOT_PERSONALITY_SCORE_MINI,
    GET_CHATBOT_RESPONDERS_MAP,
    GET_CHATBOT_HISTOGRAM,
    GET_CHATBOT_PERSONALITY_SCORE_CALC,
    GET_CHATBOT_GROUP_ASSIGNMENT,
    GET_CHATBOT_ANALYZING_RESPONSE,
    GET_CHATBOT_TESTING_RELIABILITY,
    GET_CHATBOT_CRONBACH_ALPHA,
    GET_CHATBOT_VISUAL_DIFFERENCES,
    GET_CHATBOT_SCATTER,
    GET_CHATBOT_ANALYSIS_QUESTION
} from './Types'
import {CHATBOT_SERVER} from '../../components/utils/Misc'

function getSurveyOverview(){  
    const request = 
        axios.get(`${CHATBOT_SERVER}/statistics?statistic=surveyOverview`)
        .then(response => response.data);  
    
    return {
        type: GET_CHATBOT_SURVEY_OVERVIEW, 
        payload: request
    }
}

function getClipingOutliers(){    
    const request = 
        axios.get(`${CHATBOT_SERVER}/statistics?statistic=clipingOutliers`)
        .then(response => response.data);
    
    return {
        type: GET_CHATBOT_CLIPING_OUTLIERS, 
        payload: request
    }
}

function getHistorgram(){    
    const request = 
        axios.get(`${CHATBOT_SERVER}/statistics?statistic=histogram`)
        .then(response => response.data);
    
    return {
        type: GET_CHATBOT_HISTOGRAM, 
        payload: request
    }
}

function getRespondersMap(){    
    const request = 
        axios.get(`${CHATBOT_SERVER}/statistics?statistic=respondersMap`)
        .then(response => response.data);
    
    return {
        type: GET_CHATBOT_RESPONDERS_MAP, 
        payload: request
    }
}

function getPersonalityScoreMini(){    
    const request = 
        axios.get(`${CHATBOT_SERVER}/statistics?statistic=personalityScoreMini`)
        .then(response => response.data);
    
    return {
        type: GET_CHATBOT_PERSONALITY_SCORE_MINI, 
        payload: request
    }
}

function getPersonalityScoreCalc(){    
    const request = 
        axios.get(`${CHATBOT_SERVER}/statistics?statistic=personalityScoreCalc`)
        .then(response => response.data);
    
    return {
        type: GET_CHATBOT_PERSONALITY_SCORE_CALC, 
        payload: request
    }
}

function getGroupAssignment(){    
    const request = 
        axios.get(`${CHATBOT_SERVER}/statistics?statistic=groupAssignment`)
        .then(response => response.data);
    
    return {
        type: GET_CHATBOT_GROUP_ASSIGNMENT, 
        payload: request
    }
}

function getAnalyzingResponse(){    
    const request = 
        axios.get(`${CHATBOT_SERVER}/statistics?statistic=analyzingResponse`)
        .then(response => response.data);
    
    return {
        type: GET_CHATBOT_ANALYZING_RESPONSE, 
        payload: request
    }
}

function getTestingReliability(){    
    const request = 
        axios.get(`${CHATBOT_SERVER}/statistics?statistic=testingReliability`)
        .then(response => response.data);
    
    return {
        type: GET_CHATBOT_TESTING_RELIABILITY, 
        payload: request
    }
}

function getCronbachAlpha(){    
    const request = 
        axios.get(`${CHATBOT_SERVER}/statistics?statistic=cronbachAlpha`)
        .then(response => response.data);
    
    return {
        type: GET_CHATBOT_CRONBACH_ALPHA, 
        payload: request
    }
}

function getVisualDifferences(){    
    const request = 
        axios.get(`${CHATBOT_SERVER}/statistics?statistic=visualDifferences`)
        .then(response => response.data);
    
    return {
        type: GET_CHATBOT_VISUAL_DIFFERENCES, 
        payload: request
    }
}

function getScatter(){    
    const request = 
        axios.get(`${CHATBOT_SERVER}/statistics?statistic=scatter`)
        .then(response => response.data);
    
    return {
        type: GET_CHATBOT_SCATTER, 
        payload: request
    }
}

function getAnalysisQuestion(){    
    const request = 
        axios.get(`${CHATBOT_SERVER}/statistics?statistic=analysisQuestion`)
        .then(response => response.data);
    
    return {
        type: GET_CHATBOT_ANALYSIS_QUESTION, 
        payload: request
    }
}


export {
    getSurveyOverview,
    getClipingOutliers,
    getHistorgram,
    getRespondersMap,
    getPersonalityScoreMini,
    getPersonalityScoreCalc,
    getGroupAssignment,
    getAnalyzingResponse,
    getTestingReliability,
    getCronbachAlpha,
    getVisualDifferences,
    getScatter,
    getAnalysisQuestion
}