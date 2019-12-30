import Axios from 'axios';
import * as Types from './types';


export const createAbout = (about, addFlashMessage, history) => dispatch => {
    Axios.post('/api/abouts/', about)
        .then((res) => {
            dispatch({
                type: Types.CREATE_ABOUT,
                payload: {
                    error:{},
                    about: res.data
                }
            });
            // history.push('/banners');
            addFlashMessage({
                type: 'success',
                text: res.data.message
            })
  
        })
        .catch(error => {
            dispatch({
                type: Types.ERROR_ABOUT,
                payload: {
                    error: error.response.data
                }
            })
        })
  }
  

