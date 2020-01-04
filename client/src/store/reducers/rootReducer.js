import {combineReducers} from 'redux';
import authReducer from './authReducer';
import bannerReducer from './bannerReducer';
import counterReducer from './counterReducer';
import aboutReducer from './aboutReducer';
import socialReducer from './socialReducer';
import contactReducer from './contactReducer';
import flashMessages from './flashMessages';
const rootReducer = combineReducers({
 auth:authReducer, 
  flashMessages, 
  banner:bannerReducer,
  counter:counterReducer,
  about:aboutReducer ,
  social:socialReducer,
  contact:contactReducer
})

export default rootReducer;

