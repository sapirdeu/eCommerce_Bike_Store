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
        axios.get(`${CHATBOT_SERVER}/surveyOverview`)
        .then(response => response.data);
    
    return {
        type: GET_CHATBOT_SURVEY_OVERVIEW, 
        payload: request
    }
}

function getClipingOutliers(){    
    const request = 
        axios.get(`${CHATBOT_SERVER}/clipingOutliers`)
        .then(response => response.data);
    
    return {
        type: GET_CHATBOT_CLIPING_OUTLIERS, 
        payload: request
    }
}

function getHistorgram(){    
    const request = 
        axios.get(`${CHATBOT_SERVER}/histogram`)
        .then(response => response.data);
    
    return {
        type: GET_CHATBOT_HISTOGRAM, 
        payload: request
    }
}

function getRespondersMap(){    
    const request = 
        axios.get(`${CHATBOT_SERVER}/respondersMap`)
        .then(response => response.data);
    
    return {
        type: GET_CHATBOT_RESPONDERS_MAP, 
        payload: request
    }
}

function getPersonalityScoreMini(){    
    const request = 
        axios.get(`${CHATBOT_SERVER}/personalityScoreMini`)
        .then(response => response.data);
    
    return {
        type: GET_CHATBOT_PERSONALITY_SCORE_MINI, 
        payload: request
    }
}

function getPersonalityScoreCalc(){    
    const request = 
        axios.get(`${CHATBOT_SERVER}/personalityScoreCalc`)
        .then(response => response.data);
    
    return {
        type: GET_CHATBOT_PERSONALITY_SCORE_CALC, 
        payload: request
    }
}

function getGroupAssignment(){    
    const request = 
        axios.get(`${CHATBOT_SERVER}/groupAssignment`)
        .then(response => response.data);
    
    return {
        type: GET_CHATBOT_GROUP_ASSIGNMENT, 
        payload: request
    }
}

function getAnalyzingResponse(){    
    const request = 
        axios.get(`${CHATBOT_SERVER}/analyzingResponse`)
        .then(response => response.data);
    
    return {
        type: GET_CHATBOT_ANALYZING_RESPONSE, 
        payload: request
    }
}

function getTestingReliability(){    
    const request = 
        axios.get(`${CHATBOT_SERVER}/testingReliability`)
        .then(response => response.data);
    
    return {
        type: GET_CHATBOT_TESTING_RELIABILITY, 
        payload: request
    }
}

function getCronbachAlpha(){    
    const request = 
        axios.get(`${CHATBOT_SERVER}/cronbachAlpha`)
        .then(response => response.data);
    
    return {
        type: GET_CHATBOT_CRONBACH_ALPHA, 
        payload: request
    }
}

function getVisualDifferences(){    
    const request = 
        axios.get(`${CHATBOT_SERVER}/visualDifferences`)
        .then(response => response.data);
    
    return {
        type: GET_CHATBOT_VISUAL_DIFFERENCES, 
        payload: request
    }
}

function getScatter(){    
    const request = 
        axios.get(`${CHATBOT_SERVER}/scatter`)
        .then(response => response.data);
    
    return {
        type: GET_CHATBOT_SCATTER, 
        payload: request
    }
}

function getAnalysisQuestion(){    
    const request = 
        axios.get(`${CHATBOT_SERVER}/analysisQuestion`)
        .then(response => response.data);
    
    return {
        type: GET_CHATBOT_ANALYSIS_QUESTION, 
        payload: request
    }
}

// function clearProductDetail(){
//     return {
//         type: CLEAR_PRODUCT_DETAIL, 
//         payload: ''
//     }
// }


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