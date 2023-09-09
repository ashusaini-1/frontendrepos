import {
  ADD_CONTACT_FAIL,
  ADD_CONTACT_REQUEST,
  ADD_CONTACT_SUCCESS,
  VIEW_REQUEST,
  VIEW_SUCCESS,
  VIEW_FAIL,
  DELETE_REQUEST,
  DELETE_SUCCESS,
  DELETE_FAIL,
  UPDATE_REQUEST,
  UPDATE_SUCCESS,
  UPDATE_FAIL,
  SINGLE_FAIL,
  SINGLE_REQUEST,
  SINGLE_SUCCESS,

  // CLEAR_ERRORS,
} from "../constants/userConstants";
import axios from "axios";

export const AddContact = (userData) => async (dispatch) => {
  console.log(userData);
  try {
    dispatch({ type: ADD_CONTACT_REQUEST });

    const config = {
      headers: {
        "content-type": "application/json",
      },
    };
    const { data } = await axios.post("/api/v1/contact", userData, config);
console.log(data);
    dispatch({ type: ADD_CONTACT_SUCCESS, payload: data.user });
  } catch (error) {
    dispatch({
      type: ADD_CONTACT_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const view = () => async (dispatch) => {
  try {
    dispatch({ type: VIEW_REQUEST });

    const { data } = await axios.get("/api/v1/view");
console.log(data);
    dispatch({ type: VIEW_SUCCESS, payload: data.contacts });
  } catch (error) {
    dispatch({
      type: VIEW_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const Update = (id, UpdateDetail) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_REQUEST });

    const config = {
      headers: {
        "content-type": "application/json",
      },
    };
    const { data } = await axios.put(
      `/api/v1/update/${id}`,
      UpdateDetail,
      config
    );

    dispatch({ type: UPDATE_SUCCESS, payload: data.user });
  } catch (error) {
    dispatch({
      type: UPDATE_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const Single = (id) => async (dispatch) => {
  try {
    dispatch({ type: SINGLE_REQUEST });

    const config = {
      headers: {
        "content-type": "application/json",
      },
    };
    const { data } = await axios.get(`/api/v1/single/${id}`, config);

    dispatch({ type: SINGLE_SUCCESS, payload: data.contact });
  } catch (error) {
    dispatch({
      type: SINGLE_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const Delete = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_REQUEST });

    const config = {
      headers: {
        "content-type": "application/json",
      },
    };
    const { data } = await axios.delete(`/api/v1/delete/${id}`, config);

    dispatch({ type: DELETE_SUCCESS, payload: data.user });
  } catch (error) {
    dispatch({
      type: DELETE_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Logout User
// export const logout = () => async (dispatch) => {
//   try {
//     await axios.get('/api/v1/logout');

//     dispatch({ type: LOGOUT_SUCCESS });
//   } catch (error) {
//     dispatch({ type: LOGOUT_FAIL, payload: error.response.data.message });
//   }
// };
