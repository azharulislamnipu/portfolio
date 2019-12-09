import * as Types from '../actions/types';



const bannerReducer = (state = [], action) => {
    switch(action.type){
        case Types.ADD_BANNER: {
            let banner = [...state]
            banner.unshift(action.payload.banner)
            return banner;
        }

    default: return state;
    }

}

export default bannerReducer;