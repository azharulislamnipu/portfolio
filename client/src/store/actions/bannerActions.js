import Axios from 'axios';
import * as Types from './types';
const config = { headers: { 
    'Content-Type': 'multipart/form-data;boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW',
    "Accept": "application/json",
    "type": "formData"} };

 export const loadBanners = () => dispatch => {
        Axios.get('/api/banners/')
        .then(response => {
            dispatch({
                type: Types.LOAD_BANNER,
                payload: {
                    banners: response.data
                }
            })
        })
        .catch(error => {
            dispatch({
                type: Types.BANNER_ERROR,
                payload: {
                    error: error.response.data
                }
            })
        })
    }


export const createBanner = (banner, addFlashMessage) => dispatch => {
    Axios.post('/api/banners/', banner)
        .then((res) => {
            dispatch({
                type: Types.ADD_BANNER,
                payload: {
                    error:{},
                    banners: res.data
                }
            });
            addFlashMessage({
                type: 'success',
                text: res.data.message
            })
  
        })
        .catch(error => {
            dispatch({
                type: Types.BANNER_ERROR,
                payload: {
                    error: error.response.data
                }
            })
        })
  }
  