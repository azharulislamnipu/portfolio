import Axios from 'axios';
import * as Types from './types';

const config = { headers: { 
    'Content-Type': 'multipart/form-data;boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW',
    "Accept": "application/json",
    "type": "formData"} };
//regiser
export const uploadSuccess = uploadimage => dispatch => {
    Axios.post('/api/banner/create', uploadimage ,config)
        .then((res) => {
            dispatch({
                type: Types.UPLOAD_IMAGE,
                payload: {
                    banner: res.data
                }
            });
  
        })
 
  }
