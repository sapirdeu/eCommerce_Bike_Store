import {
    GET_CHATBOT_SURVEY_OVERVIEW,
    GET_CHATBOT_CLIPING_OUTLIERS,
    GET_CHATBOT_HISTOGRAM,
    GET_CHATBOT_RESPONDERS_MAP,
    GET_CHATBOT_PERSONALITY_SCORE_MINI,
    GET_CHATBOT_PERSONALITY_SCORE_CALC,
    GET_CHATBOT_GROUP_ASSIGNMENT,
    GET_CHATBOT_ANALYZING_RESPONSE,
    GET_CHATBOT_TESTING_RELIABILITY,
    GET_CHATBOT_CRONBACH_ALPHA,
    GET_CHATBOT_VISUAL_DIFFERENCES,
    GET_CHATBOT_SCATTER,
    GET_CHATBOT_ANALYSIS_QUESTION
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
      case GET_CHATBOT_TESTING_RELIABILITY:
        return {...state, testingReliability: action.payload}
      case GET_CHATBOT_CRONBACH_ALPHA:
        return {...state, cronbachAlpha: action.payload}
      case GET_CHATBOT_VISUAL_DIFFERENCES:
        return {...state, visualDifferences: action.payload}
      case GET_CHATBOT_SCATTER:
        return {...state, scatter: action.payload}
      case GET_CHATBOT_ANALYSIS_QUESTION:
        return {...state, analysisQuestion: action.payload}
      default:
        return state
    }
  }
  
  export default fun