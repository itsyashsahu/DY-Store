import AuthContext from "../../context/auth/authContext";
import { useContext } from "react";
import jwtDecode from "jwt-decode";
export default function HandleGoogleLogin() {
  const authContext = useContext(AuthContext);
  const { regCustomerGoogle } = authContext;

  const handleSubmit = async (values) => {
    const errorMsg = await regCustomerGoogle(values);
    if (errorMsg) {
    }
    console.log(errorMsg);
  };

  const handleResponse = (response) => {
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
    handleSubmit(user);
  };

  // google one tap login handlers
  // remember to add the script file to the index.js
  // <script src="https://accounts.google.com/gsi/client" async defer></script>

  const GoogleLogin = () => {
    // setDisabled(true);
    try {
      window.google.accounts.id.initialize({
        client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
        callback: handleResponse,
      });
      window.google.accounts.id.prompt((notification) => {
        if (notification.isNotDisplayed()) {
          throw new Error("Try to clear the cookies or try again later!");
        }
        if (
          notification.isSkippedMoment() ||
          notification.isDismissedMoment()
        ) {
          //   setDisabled(false);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
  return GoogleLogin;
}
