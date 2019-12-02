import {combineReducers} from 'redux';
import authReducer from './authReducer';
import flashMessages from './flashMessages';
const rootReducer = combineReducers({
 auth:authReducer,  flashMessages,
})

export default rootReducer;

