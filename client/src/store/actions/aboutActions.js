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
            history.push('/abouts');
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
  

  export const loadAbouts = () => dispatch => {
    Axios.get("/api/abouts/")
      .then(response => {
        dispatch({
          type: Types.LOAD_ABOUT,
          payload: {
            erorr: {},
            abouts: response.data
          }
        });
      })
      .catch(error => {
        dispatch({
          type: Types.ERROR_ABOUT,
          payload: {
            error: error.response.data
          }
        });
      });
  };

  export const removeAbout = id => dispatch => {
    Axios.delete(`/api/abouts/${id}`)
      .then(res => {
        dispatch({
          type: Types.REMOVE_ABOUT,
          payload: {
            id: res.data._id,
            ...res.data
          }
        });
      })
      .catch(error => {
        dispatch({
          type: Types.ERROR_ABOUT,
          payload: {
            error: error.response.data
          }
        });
      });
  };