import { combineReducers } from 'redux'
import user from './User_reducer'
import products from './Products_reducer'
import site from './Site_reducer'
import chatbot from './Chatbot_reducer'
import dropzone from './Dropzone_reducer'

const rootReducer = combineReducers({
    user,
    products,
    site,
    chatbot,
    dropzone
})

export default rootReducer
