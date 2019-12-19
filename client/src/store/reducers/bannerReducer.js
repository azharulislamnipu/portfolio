import * as Types from '../actions/types';


const init ={
    error:{}
}
const bannerReducer = (state = init, action) => {
    switch(action.type){
        case Types.ADD_BANNER: {
            let banners = [...state]
            banners.unshift(action.payload.banner)
            return{
                banner: banners,
                error:{}    
            }
        }
        case Types.LOAD_BANNER: {
            return action.payload.banners;
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