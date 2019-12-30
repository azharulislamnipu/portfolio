import * as Types from '../actions/types';


const init ={
    error:{},
    abouts:[]
}
const aboutReducer = (state = init, action) => {
    switch(action.type){
        case Types.CREATE_ABOUT: {
            let abouts = [...state]
            abouts.unshift(action.payload.about)
            return{
                error:{},
                abouts: abouts  
            }
        }
        case Types.ERROR_ABOUT: {
            return {
                ...state,
                error: action.payload.error
            }
        }
    default: return state;
    }

}

export default aboutReducer;