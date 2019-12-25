import * as Types from '../actions/types';

const init ={
    error:{},
    counters:[]
  
}
const counterReducer = (state = init, action) => {
    switch(action.type){
        case Types.LOAD_COUNTER: {
            return {
                error:{},
                counters: action.payload.counters
            };
        }
        case Types.ADD_COUNTER: {
            let counters = [...state]
            counters.unshift(action.payload.counter)

            return{
                error:{},
                counters: counters
            }
        }
        case Types.REMOVE_COUNTER: {

            let counters = [...state]   ;
            counters = counters.filter(counter => {
                return counter._id !== action.payload.id
                });
            return{
                error:{},
                counters : counters
            }

        }
        case Types.ERROR_COUNTER: {
            return {
                ...state,
                error: action.payload.error
            }
        }
        default: return state;
    }

}

export default counterReducer;