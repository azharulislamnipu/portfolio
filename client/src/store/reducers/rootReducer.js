import {combineReducers} from 'redux';
import authReducer from './authReducer';
import bannerReducer from './bannerReducer';
import counterReducer from './counterReducer';
import aboutReducer from './aboutReducer';
import flashMessages from './flashMessages';
const rootReducer = combineReducers({
 auth:authReducer, 
  flashMessages, 
  banner:bannerReducer,
  counter:counterReducer,
  about:aboutReducer
})

export default rootReducer;

