import {
  ADD_CONTACT_FAIL,
  ADD_CONTACT_REQUEST,
  ADD_CONTACT_SUCCESS,
  DELETE_REQUEST,
  DELETE_SUCCESS,
  DELETE_FAIL,
  VIEW_REQUEST,
  VIEW_SUCCESS,
  VIEW_FAIL,
  UPDATE_REQUEST,
  UPDATE_SUCCESS,
  UPDATE_FAIL,
  SINGLE_FAIL,
  SINGLE_REQUEST,
  SINGLE_SUCCESS,
  CLEAR_ERRORS,
} from "../constants/userConstants";

export const userReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case ADD_CONTACT_REQUEST:
      return {
        loading: true,
      };
    case ADD_CONTACT_SUCCESS:
      return {
        ...state,
        loading: false,

        user: action.payload,
      };

    case ADD_CONTACT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};

export const viewReducer = (state = { contacts: [] }, action) => {
  switch (action.type) {
    case VIEW_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case VIEW_SUCCESS:
      return {
        ...state,
        loading: false,
        contacts: action.payload,
      };

    case VIEW_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};

export const updateReducer = (state = { contacts: [] }, action) => {
  switch (action.type) {
    case UPDATE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_SUCCESS:
      return {
        ...state,
        loading: false,
        contacts: action.payload,
      };

    case UPDATE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};

export const SingleReducer = (state = { contact: [] }, action) => {
  switch (action.type) {
    case SINGLE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SINGLE_SUCCESS:
      return {
        ...state,
        loading: false,
        contact: action.payload,
      };

    case SINGLE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};

export const deleteReducer = (state = { contact: [] }, action) => {
  switch (action.type) {
    case DELETE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_SUCCESS:
      return {
        ...state,
        loading: false,
        contacts: action.payload,
      };

    case DELETE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};
