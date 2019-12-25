import * as Types from '../actions/types';


const init ={
    error:{},
    banners:[]
}
const bannerReducer = (state = init, action) => {
    switch(action.type){
        case Types.ADD_BANNER: {
            let banners = [...state]
            banners.unshift(action.payload.banner)

            return{
                error:{},
                banners: banners  
            }
        }
        case Types.LOAD_BANNER: {
            return {
                error:{} ,
                banners: action.payload.banners
            }
        }
        case Types.REMOVE_BANNER: {
            let banners = [...state]
        
            banners = banners.filter(banner => {
            return banner._id !== action.payload.id
            });
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