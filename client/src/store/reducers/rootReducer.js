import {combineReducers} from 'redux';
import authReducer from './authReducer';
import bannerReducer from './bannerReducer';
import counterReducer from './counterReducer';
import flashMessages from './flashMessages';
const rootReducer = combineReducers({
 auth:authReducer, 
  flashMessages, 
  banner:bannerReducer,
  counter:counterReducer
})

export default rootReducer;

