import {
    GET_CHATBOT_SURVEY_OVERVIEW,
    GET_CHATBOT_CLIPING_OUTLIERS,
    GET_CHATBOT_HISTOGRAM,
    GET_CHATBOT_RESPONDERS_MAP,
    GET_CHATBOT_PERSONALITY_SCORE_MINI,
    GET_CHATBOT_PERSONALITY_SCORE_CALC,
    GET_CHATBOT_GROUP_ASSIGNMENT,
    GET_CHATBOT_ANALYZING_RESPONSE
} from '../actions/Types'

const fun = (state = {}, action) => {
    switch (action.type) {
      case GET_CHATBOT_SURVEY_OVERVIEW:
        return {...state, surveyOverview: action.payload}
      case GET_CHATBOT_CLIPING_OUTLIERS:
        return {...state, clipingOutliers: action.payload}
      case GET_CHATBOT_HISTOGRAM:
        return {...state, historgram: action.payload}
      case GET_CHATBOT_RESPONDERS_MAP:
        return {...state, respondersMap: action.payload}
      case GET_CHATBOT_PERSONALITY_SCORE_MINI:
        return {...state, personalityScoreMini: action.payload}
      case GET_CHATBOT_PERSONALITY_SCORE_CALC:
        return {...state, personalityScoreCalc: action.payload}
      case GET_CHATBOT_GROUP_ASSIGNMENT:
        return {...state, groupAssignment: action.payload}
      case GET_CHATBOT_ANALYZING_RESPONSE:
        return {...state, analyzingResponse: action.payload}
      default:
        return state
    }
  }
  
  export default fun