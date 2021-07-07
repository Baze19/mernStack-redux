import {combineReducers} from 'redux'
import postReducer from './postreducer'
import AuthReducer from './AuthReducers'
export default combineReducers({
    posts:postReducer,
    auth:AuthReducer
})

 // "proxy": "http://localhost:5000",