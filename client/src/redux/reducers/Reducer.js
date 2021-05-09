import { combineReducers } from 'redux'
import user from './User_reducer'
import products from './Products_reducer'
import site from './Site_reducer'

const rootReducer = combineReducers({
    user,
    products,
    site
})

export default rootReducer
