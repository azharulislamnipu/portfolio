import Axios from "axios";
import * as Types from "./types";

export const creatCounter = (social, addFlashMessage, history) => dispatch => {
    Axios.post("/api/socials/", social)
      .then(res => {
        dispatch({
          type: Types.CREATE_SOCIAL,
          payload: {
            error: {},
            social: res.data
          }
        });
        history.push("/socials");
        addFlashMessage({
          type: "success",
          text: res.data.message
        });
      })
      .catch(error => {
        dispatch({
          type: Types.ERROR_SOCIAL,
          payload: {
            error: error.response.data
          }
        });
      });
  };
  