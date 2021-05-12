import {
    GET_CHATBOT_SURVEY_OVERVIEW
} from '../actions/Types'

const fun = (state = {}, action) => {
    switch (action.type) {
      case GET_CHATBOT_SURVEY_OVERVIEW:
        return {...state, surveyOverview: action.payload}
      default:
        return state
    }
  }
  
  export default fun