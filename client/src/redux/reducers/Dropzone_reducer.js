import {
    POST_DROPZONE_UPLOAD_CSV,
} from '../actions/Types'

const fun = (state = {}, action) => {
    switch (action.type) {
      case POST_DROPZONE_UPLOAD_CSV:
        return {...state, uploadCSV: action.payload}
      default:
        return state
    }
  }
  
  export default fun