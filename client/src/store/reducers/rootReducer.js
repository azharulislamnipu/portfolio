import {combineReducers} from 'redux';
import authReducer from './authReducer';
import bannerReducer from './bannerReducer';
import flashMessages from './flashMessages';
const rootReducer = combineReducers({
 auth:authReducer,  flashMessages, banners:bannerReducer
})

export default rootReducer;

