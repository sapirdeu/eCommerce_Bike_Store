import axios from 'axios'
import {
    GET_CHATBOT_SURVEY_OVERVIEW,
    GET_CHATBOT_CLIPING_OUTLIERS,
    GET_CHATBOT_PERSONALITY_SCORE_MINI
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

function getPersonalityScoreMini(){    
    const request = 
        axios.get(`${CHATBOT_SERVER}/personalityScoreMini`)
        .then(response => response.data);
    
    return {
        type: GET_CHATBOT_PERSONALITY_SCORE_MINI, 
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
    getPersonalityScoreMini
}