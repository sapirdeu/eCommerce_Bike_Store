import {
    GET_CHATBOT_SURVEY_OVERVIEW,
    GET_CHATBOT_CLIPING_OUTLIERS,
    GET_CHATBOT_PERSONALITY_SCORE_MINI
} from '../actions/Types'

const fun = (state = {}, action) => {
    switch (action.type) {
      case GET_CHATBOT_SURVEY_OVERVIEW:
        return {...state, surveyOverview: action.payload}
      case GET_CHATBOT_CLIPING_OUTLIERS:
        return {...state, clipingOutliers: action.payload}
      case GET_CHATBOT_PERSONALITY_SCORE_MINI:
        return {...state, personalityScoreMini: action.payload}
      default:
        return state
    }
  }
  
  export default fun