import Axios from 'axios';
import * as Types from './types';
 export const loadCounters = () => dispatch => {
        Axios.get('/api/counters/')
        .then(response => {
            dispatch({
                type: Types.LOAD_COUNTER,
                payload: {
                    counters: response.data
                }
            })
        })
        .catch(error => {
            console.log(error);
        })
    }

