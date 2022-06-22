import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ReactComponent as AccountActivated } from "../components/Utils/images/AccountActivated.svg";
import { ReactComponent as AlreadyActivated } from "../components/Utils/images/AlreadyActivated.svg";
import { ReactComponent as ActivationExpired } from "../components/Utils/images/ActivationExpired.svg";
import AuthContext from "../context/auth/authContext";
import jwtDecode from "jwt-decode";

const ActivateAccount = () => {
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

  const { login } = authContext;
  let params = useParams();
  const [status, setStatus] = useState("");

  const [timer, setTimer] = useState(5);
  const [lgloading, setlgloading] = useState(false);

  const handleActivation = async (params) => {
    if (params.activateId && status !== "loading") {
      setStatus("loading");
      axios
        .get(`/api/auth/activate/?activateId=${params.activateId}`)
        .then((res) => {
          setStatus("activated");
          console.log("response ", res);
        })
        .catch((err) => {
          setStatus(err.response.data.msg);
          console.log("Error Occoured", err);
        });
    }
  };

  const LoginUser = async (params) => {
    let errorMsg;
    if (params.activateId) {
      const decodedToken = jwtDecode(params.activateId);
      const { email, password } = decodedToken;
      const values = {
        email,
        password,
      };
      errorMsg = await login(values);
      if (errorMsg) {
        // setLoading(false);
        setlgloading(false);
      }
      setlgloading(false);
    }
  };

  useEffect(() => {
    if (status === "Account already activated" || status === "activated") {
      if (timer > 0) {
        setTimeout(() => setTimer(timer - 1), 1000);
      } else if (timer === 0) {
        setlgloading(true);
        setStatus("loading");
        LoginUser(params);
      }
    }
  }, [timer, status]);

  useEffect(() => {
    if (Object.keys(params).length === 0) {
      navigate("/");
    } else {
      handleActivation(params);
    }
  }, []);

  return (
    <>
      <div
        id="popup-modal"
        className="overflow-y-auto overflow-x-hidden grid place-items-center h-[89vh] border-t top-0 right-0 left-0 z-50 md:inset-0 "
      >
        <div className="relative p-4 w-full max-w-md h-full md:h-auto ">
          <div className="relative bg-white rounded-lg shadow border-2 border-solid border-gray-400 opacity-100">
            <button
              type="button"
              className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center  "
              data-modal-toggle="popup-modal"
            >
              <svg
                className="w-5 h-5 "
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
            <div className="p-6 text-center">
              {status === "loading" && (
                <div className="mx-auto w-full mt-8 grid place-items-center ">
                  <svg
                    role="status"
                    className="mb-4 w-14 h-14 text-gray-400  animate-spin fill-blue-600"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                  {lgloading ? (
                    <h3 className="mb-5 text-lg font-normal text-gray-500 ">
                      Logging you in..
                    </h3>
                  ) : (
                    <h3 className="mb-5 text-lg font-normal text-gray-500 ">
                      Activating Your Account...
                    </h3>
                  )}
                </div>
              )}
              {status === "activated" && (
                <div className="mx-auto w-full mt-8 grid place-items-center ">
                  <AccountActivated className="h-48 w-48 mb-4" />
                  <h3 className="mb-5 text-lg font-normal text-gray-500 ">
                    Account Activated
                  </h3>
                  <h3 className="mb-5 text-lg font-normal text-gray-500 ">
                    Logging you in {timer} sec ..
                  </h3>
                </div>
              )}
              {status === "Account already activated" && (
                <div className="mx-auto w-full mt-8 grid place-items-center ">
                  <AlreadyActivated className="h-48 w-48 mb-4" />
                  <h3 className="mb-5 text-lg font-normal text-gray-500 ">
                    Account Already Activated
                  </h3>
                  <h3 className="mb-5 text-lg font-normal text-gray-500 ">
                    Logging you in {timer} sec ..
                  </h3>
                </div>
              )}
              {status === "Activation Token Expired" && (
                <div className="mx-auto w-full mt-8 grid place-items-center ">
                  <ActivationExpired className="h-48 w-48 mb-6" />
                  <h3 className="mb-5 text-lg font-normal text-gray-500 ">
                    Activation Token Expired
                  </h3>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ActivateAccount;
