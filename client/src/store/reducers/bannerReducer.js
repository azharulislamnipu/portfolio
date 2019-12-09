import * as Types from '../actions/types';

const init ={
    banner:{},
    error:{}
}

const bannerReducer = (state=init, action) => {
    switch(action.type){
        case Types.ADD_BANNER: {
            return{
                user: action.payload.banner,
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