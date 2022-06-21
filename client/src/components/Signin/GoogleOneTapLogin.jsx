// imports
import React, { useContext, useEffect } from "react";

import Google from "./images/google.svg";
import AuthContext from "../../context/auth/authContext";

const GoogleOneTapLogin = () => {
  const authContext = useContext(AuthContext);
  const { GoogleOneTapFun, googleOneTap } = authContext;

  useEffect(() => {
    if (googleOneTap.isAvailable) {
      // Means WE are calling the one tap with backdrop
      GoogleOneTapFun(true, true);
    } else {
      // Means we are calling google signin button without backdrop
      GoogleOneTapFun(false, false);
    }
    // we need to check this since google one tap will not be available for next 2 Hr once user
    // manually cancels ( closes ) the one tap prompt
  }, [googleOneTap.isAvailable]);

  return (
    <>
      <button
        id="GoogleButton"
        onClick={() => {
          if (googleOneTap.isAvailable) {
            GoogleOneTapFun(true, true);
          } else {
            GoogleOneTapFun(true, false);
          }
        }}
        className="mb-2 px-4 py-2 w-full flex items-center justify-center text-center disabled:opacity-50 disabled:bg-gray-200 text-gray-700 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 hover:text-blue-600"
      >
        <img
          src={Google}
          className="mr-3"
          width={20}
          height={20}
          alt="Google Oauth"
        />
        Continue with Google
      </button>
    </>
  );
};

export default GoogleOneTapLogin;
