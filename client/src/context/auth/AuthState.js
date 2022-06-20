// Imports
import { useReducer } from "react";
import AuthContext from "./authContext";
import authReducer from "./authReducer";
import jwtDecode from "jwt-decode";

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
import axios from "axios";

axios.defaults.withCredentials = true;

const AuthState = (props) => {
  // Set initial state
  const initialState = {
    isAuthenticated: false,
    user: null,
    error: null,
    token: false,
    googleOneTap: {
      loading: false,
      success: false,
      isAvailable: true,
    },
  };

  // Init Reducer
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Load User
  const loadUser = async () => {
    try {
      // Make a get request at localhost:5000/api/auth
      const res = await axios.get("/api/auth");

      // Dispatch the action to reducer for USER_LOADED
      dispatch({ type: USER_LOADED, payload: res.data });
    } catch (err) {
      if (err.response.status === 401) {
        console.log("This is the desired behaviour");
      }
      // Dispatch the action to reducer for AUTH_ERROR
      dispatch({ type: AUTH_ERROR });
    }
  };

  // Register Customer
  const regCustomer = async (formData) => {
    // Set header of the input data
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    let errorMsg = "";
    try {
      // Make a post request at localhost:5000/api/users/customer
      const res = await axios.post("api/users/customer", formData, config);

      // Dispatch the action to reducer for REGISTER_SUCCESS
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });

      // Load the user after successful registration
      loadUser();
    } catch (err) {
      // Dispatch the action to reducer for REGISTER_FAIL
      dispatch({
        type: REGISTER_FAIL,
        payload: err.response.data.errorMsg,
      });
      errorMsg = err.response.data.errorMsg;
    }
    return errorMsg;
  };

  // Register Customer with google
  const regCustomerGoogle = async (formData) => {
    // Set header of the input data
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    let errorMsg = "";
    try {
      // Make a post request at localhost:5000/api/users/customer
      const res = await axios.post(
        "api/users/loginwithgoogle",
        formData,
        config
      );

      // Dispatch the action to reducer for REGISTER_SUCCESS
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });

      // Load the user after successful registration
      loadUser();
    } catch (err) {
      // Dispatch the action to reducer for REGISTER_FAIL
      dispatch({
        type: REGISTER_FAIL,
        payload: err.response.data.errorMsg,
      });
      errorMsg = err.response.data.errorMsg;
    }
    return errorMsg;
  };

  // Register Admin
  const regAdmin = async (formData) => {
    // Set header of the input data
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      // Make a post request at localhost:5000/api/users/admin1234
      const res = await axios.post("api/users/admin1234", formData, config);

      // Dispatch the action to reducer for REGISTER_SUCCESS
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });

      // Load the user after successful registration
      loadUser();
    } catch (err) {
      // Dispatch the action to reducer for REGISTER_FAIL
      dispatch({
        type: REGISTER_FAIL,
        payload: err.response.data.msg,
      });
    }
  };

  // Login User
  const login = async (formData) => {
    // Set header of the input data
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    let errorMsg = "";
    try {
      // Make a post request at localhost:5000/api/auth
      const res = await axios.post("api/auth", formData, config);

      // Dispatch the action to reducer for LOGIN_SUCCESS
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });

      // Load the user after successful login
      loadUser();
    } catch (err) {
      // Dispatch the action to reducer for LOGIN_FAIL
      dispatch({
        type: LOGIN_FAIL,
        payload: err.response.data.errorMsg,
      });
      errorMsg = err.response.data.errorMsg;
    }
    return errorMsg;
  };

  // Logout
  const logout = async () => {
    try {
      await axios.delete("/api/auth");
      // Dispatch the action to reducer for LOGOUT
      dispatch({ type: LOGOUT });
    } catch (err) {
      console.log(err);
    }
  };

  // Validate user
  const validate = async () => {
    try {
      const res = await axios.get("/api/auth/check");
      if (res.data === "Valid") {
        dispatch({
          type: VALID_SUCCESS,
        });
      }
    } catch (err) {
      dispatch({
        type: VALID_FAIL,
      });
    }
  };

  // Clear Errors
  const clearErrors = () => {
    // Dispatch the action to reducer for CLEAR_ERRORS
    dispatch({
      type: CLEAR_ERRORS,
    });
  };

  const GoogleOneTapFun = (oneTap, backdrop) => {
    // oneTap means do you want onetap login or gbutton login
    if (backdrop) {
      dispatch({ type: GOOGLE_ONE_LOADING_START });
    }

    const handleResponse = async (response) => {
      const token = response.credential;
      const decodedToken = jwtDecode(token);
      const {
        sub: gid,
        email,
        given_name: firstName,
        family_name: lastName,
      } = decodedToken;

      console.log(decodedToken);
      const user = {
        gid,
        firstName,
        lastName,
        email,
      };

      if (!lastName) {
        user.lastName = "undefined";
      }
      console.log("finally ther user ", user);
      const errorMsg = await regCustomerGoogle(user);
      if (errorMsg) {
        console.log(errorMsg);
        dispatch({ type: GOOGLE_ONE_LOGIN_FAIL });
      }
      dispatch({ type: GOOGLE_ONE_LOADING_END });
    };
    try {
      window.google.accounts.id.initialize({
        client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
        callback: handleResponse,
      });
      if (state.googleOneTap.isAvailable && oneTap) {
        window.google.accounts.id.prompt((notification) => {
          if (notification.isNotDisplayed()) {
            dispatch({ type: GOOGLE_ONE_NOT_AVAILABLE });
            dispatch({ type: GOOGLE_ONE_LOADING_END });
          }
          if (notification.isSkippedMoment()) {
            // skipped moment is also triggred even when user cancels the notification
            dispatch({ type: GOOGLE_ONE_LOADING_END });
          }
          if (notification.l === "user_cancel") {
            dispatch({ type: GOOGLE_ONE_NOT_AVAILABLE });
            dispatch({ type: GOOGLE_ONE_LOADING_END });
          }
        });
      } else {
        // render the Gbutton sign in with google button
        window.google.accounts.id.renderButton(
          document.getElementById("GoogleButton"),
          { theme: "outline", size: "large" }
        );
      }
    } catch (error) {
      console.log(error);
      dispatch({ type: GOOGLE_ONE_LOADING_END });
      dispatch({ type: GOOGLE_ONE_NOT_AVAILABLE });
    }
  };

  return (
    <AuthContext.Provider
      // Provide these values to all components wrapped in AuthContext in App.js
      value={{
        isAuthenticated: state.isAuthenticated,
        user: state.user,
        error: state.error,
        token: state.token,
        googleOneTap: state.googleOneTap,
        login,
        loadUser,
        logout,
        clearErrors,
        regCustomer,
        regAdmin,
        validate,
        regCustomerGoogle,
        GoogleOneTapFun,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
