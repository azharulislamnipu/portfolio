import {combineReducers} from 'redux';
import authReducer from './authReducer';
import bannerReducer from './bannerReducer';
import counterReducer from './counterReducer';
import aboutReducer from './aboutReducer';
import socialReducer from './socialReducer';
import contactReducer from './contactReducer';
import portfolioReducer from './portfolioReducer';
import skillsReducer from './skillsReducer';
import serviceReducer from './serviceReducer';
import experienceReducer from './experienceReducer';
import infoReducer from './infoReducer';
import flashMessages from './flashMessages';
const rootReducer = combineReducers({
 auth:authReducer, 
  flashMessages, 
  banner:bannerReducer,
  counter:counterReducer,
  about:aboutReducer ,
  social:socialReducer,
  contact:contactReducer,
  info:infoReducer,
  portfolio:portfolioReducer,
  service:serviceReducer,
  skill:skillsReducer,
  experience:experienceReducer
})

export default rootReducer;

