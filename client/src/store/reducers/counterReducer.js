import * as Types from '../actions/types';


const counterReducer = (state = [], action) => {
    switch(action.type){
        case Types.LOAD_COUNTER: {
            return action.payload.counters
        }

    default: return state;
    }

}

export default counterReducer;