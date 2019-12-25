import Axios from 'axios';
import * as Types from './types';
 export const loadCounters = () => dispatch => {
        Axios.get('/api/counters/')
        .then(response => {
            dispatch({
                type: Types.LOAD_COUNTER,
                payload: {
                    erorr:{},
                    counters: response.data
                }
            })
        })
        .catch(error => {
            dispatch({
                type: Types.ERROR_COUNTER,
                payload: {
                    error: error.response.data
                }
            })
        })
    }

    
  export const creatCounter = (counter, addFlashMessage, history) => dispatch => {
    Axios.post('/api/counters/', counter)
        .then(res => {
            dispatch({
                type: Types.ADD_COUNTER,
                payload: {
                    error:{},
                    counter: res.data
                }
            });
            history.push('/counters');
            addFlashMessage({
                type: 'success',
                text: res.data.message
            })
  
        })
        .catch(error => {
            dispatch({
                type: Types.ERROR_COUNTER,
                payload: {
                    error: error.response.data
                }
            })
        })
  }




    export const removeCounter = id => dispatch => {
        Axios.delete(`/api/counters/${id}`)
        .then(res => {
            dispatch({
                type: Types.REMOVE_COUNTER,
                payload: {
                    id: res.data._id,
                    counters: res.data
                }})
        })
        .catch(error => {
            dispatch({
                type: Types.ERROR_COUNTER,
                payload: {
                    error: error.response.data
                }
            })
        })
      }