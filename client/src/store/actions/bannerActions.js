import Axios from 'axios';
import * as Types from './types';
const config = { headers: { 'Content-Type': 'multipart/form-data' } };
//regiser
export const createBanner = banner => dispatch => {
    Axios.post('/api/banner/create', banner, config)
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
  