import axios from 'axios'
import {
    GET_CHATBOT_SURVEY_OVERVIEW
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

// function clearProductDetail(){
//     return {
//         type: CLEAR_PRODUCT_DETAIL, 
//         payload: ''
//     }
// }


export {
    getSurveyOverview
}