import * as Types from '../actions/types';


const init ={
    error:{},
    banners:[]
}
const bannerReducer = (state = init, action) => {
    switch(action.type){
        case Types.ADD_BANNER: {
            let banner = [...state]
            banner.unshift(action.payload.banner)

            return{
                banners: banner,
                error:{}    
            }
        }
        case Types.LOAD_BANNER: {
            return {
                error:{} ,
                banners: action.payload.banners
            }
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