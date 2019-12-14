import Axios from 'axios';
import * as Types from './types';
const config = { headers: { 
    'Content-Type': 'multipart/form-data;boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW',
    "Accept": "application/json",
    "type": "formData"} };
//regiser
export const createBanner = banner => dispatch => {
    Axios.post('/user-profile', banner)
        .then((res) => {
            dispatch({
                type: Types.ADD_BANNER,
                payload: {
                    banner: res.data
                }
            });
  
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
  