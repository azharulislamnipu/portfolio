import Axios from "axios";
import * as Types from "./types";
export const loadContacts = () => dispatch => {
  Axios.get("/api/contacts/")
    .then(response => {
      dispatch({
        type: Types.LOAD_CONTACT,
        payload: {
          erorr: {},
          contacts: response.data
        }
      });
    })
    .catch(error => {
      dispatch({
        type: Types.ERROR_CONTACT,
        payload: {
          error: error.response.data
        }
      });
    });
};

export const creatContact = (contact, addFlashMessage) => dispatch => {
  Axios.post("/api/contacts/", contact)
    .then(res => {
      dispatch({
        type: Types.CREATE_CONTACT,
        payload: {
          error: {},
          contact: res.data
        }
      });
      addFlashMessage({
        type: "success",
        text: res.data.message
      });
    })
    .catch(error => {
      dispatch({
        type: Types.ERROR_CONTACT,
        payload: {
          error: error.response.data
        }
      });
    });
};

export const removeContact = id => dispatch => {
  Axios.delete(`/api/contacts/${id}`)
    .then(res => {
      dispatch({
        type: Types.REMOVE_CONTACT,
        payload: {
          id: res.data._id,
          ...res.data
        }
      });
    })
    .catch(error => {
      dispatch({
        type: Types.ERROR_CONTACT,
        payload: {
          error: error.response.data
        }
      });
    });
};
