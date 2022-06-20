// imports
import React, { useContext, useEffect } from "react";
// import { useValue } from "../../context/ContextProvider";

import Google from "./images/google.svg";
import AuthContext from "../../context/auth/authContext";
// import { useContext } from "react";
// import jwtDecode from "jwt-decode";

const GoogleOneTapLogin = () => {
  const authContext = useContext(AuthContext);
  const { GoogleOneTapFun, googleOneTap } = authContext;

  useEffect(() => {
    // GoogleOneTapFun();

    if (googleOneTap.isAvailable) {
      // Means WE are calling the one tap with backdrop
      GoogleOneTapFun(true, true);
    } else {
      // Means we are calling google signin button without backdrop
      GoogleOneTapFun(false, false);
    }
  }, [googleOneTap.isAvailable]);
  // }, []);

  return (
    <>
      <button
        id="GoogleButton"
        // onClick={handleGLogin}
        onClick={() => {
          // console.log(googleOneTap);
          if (googleOneTap.isAvailable) {
            GoogleOneTapFun(true, true);
          } else {
            GoogleOneTapFun(true, false);
            //   console.log("Google One Tap is Not Available");
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
