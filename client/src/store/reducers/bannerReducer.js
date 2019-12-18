import * as Types from '../actions/types';


const init ={
    error:{}
}
const bannerReducer = (state = init, action) => {
    switch(action.type){
        case Types.ADD_BANNER: {
            let banners = [...state]
            banners.unshift(action.payload.banners)

            return{
                banners: banners,
                error:{}    
            }
        }
        case Types.LOAD_BANNER: {
            return{
                 banner:action.payload.banners,
                error:{}    
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