import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS,
  VALID_SUCCESS,
  VALID_FAIL,
  GOOGLE_ONE_LOADING_START,
  GOOGLE_ONE_LOADING_END,
  GOOGLE_ONE_LOGIN_SUCCESS,
  GOOGLE_ONE_LOGIN_FAIL,
  GOOGLE_ONE_NOT_AVAILABLE,
} from "../types";

// Change state according to the type of action
const authReducer = (state, action) => {
  switch (action.type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
        token: true,
      };

    case REGISTER_SUCCESS:
      return {
        ...state,
        ...action.payload,
        isAuthenticated: false,
        token: false,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        token: true,
      };

    case REGISTER_FAIL:
    case AUTH_ERROR:
    case LOGIN_FAIL:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        error: action.payload,
        token: false,
      };

    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        error: null,
        token: false,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    case VALID_SUCCESS:
      return {
        ...state,
        token: true,
      };

    case VALID_FAIL:
      return {
        ...state,
        token: false,
      };
    case GOOGLE_ONE_LOADING_START:
      return {
        ...state,
        googleOneTap: {
          ...state.googleOneTap,
          loading: true,
        },
      };
    case GOOGLE_ONE_LOADING_END:
      return {
        ...state,
        googleOneTap: {
          ...state.googleOneTap,
          loading: false,
        },
      };
    case GOOGLE_ONE_LOGIN_SUCCESS:
      return {
        ...state,
        googleOneTap: {
          ...state.googleOneTap,
          success: true,
        },
      };
    case GOOGLE_ONE_LOGIN_FAIL:
      return {
        ...state,
        googleOneTap: {
          ...state.googleOneTap,
          success: false,
        },
      };
    case GOOGLE_ONE_NOT_AVAILABLE:
      return {
        ...state,
        googleOneTap: {
          ...state.googleOneTap,
          isAvailable: false,
        },
      };

    default:
      return state;
  }
};

export default authReducer;
