import * as Types from '../actions/types';


const init ={
    error:{}
}
const bannerReducer = (state = init, action) => {
    switch(action.type){
        case Types.ADD_BANNER: {
            let banner = [...state]
            banner.unshift(action.payload.banner)
            return banner;
        }
        case Types.BANNER_ERROR: {
            return {
                ...state,
                error: action.payload.error
            }
        }
    default: return state;
    }

}

export default bannerReducer;