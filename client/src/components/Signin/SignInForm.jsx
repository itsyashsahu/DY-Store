// Routing
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// components
import InputField from "../Utils/InputField";
import AuthContext from "../../context/auth/authContext";
import AlertContext from "../../context/alert/alertContext";

// imports
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useContext, useEffect, useState } from "react";
import GoogleOneTapLogin from "./GoogleOneTapLogin";

const SignInForm = () => {
  let navigate = useNavigate();

  const authContext = useContext(AuthContext);
  const alertContext = useContext(AlertContext);

  const { setAlert, loading } = alertContext;
  const { login, error, clearErrors, token, validate } = authContext;
  const [Loading, setLoading] = useState(false);

  const validateYup = Yup.object({
    email: Yup.string().email("Email is invalid").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 charaters")
      .required("Password is required"),
  });

  useEffect(() => {
    if (token) {
      navigate("/");
    }
    if (error === "User already exists") {
      setAlert(error, "danger");
    }

    clearErrors();
  }, [error, token]);

  const handleSubmit = async (values, actions) => {
    console.log("Singin Form Values", values);
    setLoading(true);
    const errorMsg = await login(values);
    if (errorMsg) {
      actions.setErrors({ msg: errorMsg });
      setLoading(false);
    }
  };

  return (
    <>
      <section className="bg-gray-100 py-10" style={{ minHeight: "80vh" }}>
        <div className="container max-w-screen-xl mx-auto px-4">
          {/*  COMPONENT: SIGN IN */}
          <div
            style={{ maxWidth: 360 }}
            className="mt-5 mb-8 p-4 md:p-7 mx-auto rounded bg-white shadow-lg"
          >
            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              validationSchema={validateYup}
              onSubmit={handleSubmit}
            >
              {(formik) => (
                <Form>
                  <h2 className="mb-5 text-2xl font-semibold">Sign in</h2>

                  <InputField
                    Label="Email"
                    type="email"
                    placeholder="Email"
                    name="email"
                  />
                  <InputField
                    Label="Password"
                    type="password"
                    placeholder="Password"
                    name="password"
                  />

                  <label className="flex items-center w-max mb-5">
                    <input
                      defaultChecked=""
                      name=""
                      type="checkbox"
                      className="h-4 w-4"
                    />
                    <span className="ml-2 inline-block text-gray-500">
                      Remember me
                    </span>
                  </label>

                  {formik.errors.msg ? (
                    <>
                      <button
                        type="submit"
                        disabled
                        className="px-4 py-2 text-center w-full inline-block text-white bg-red-500 border border-transparent rounded-md hover:bg-red-700"
                        to="#"
                      >
                        <span className="w-full">{formik.errors.msg}</span>
                      </button>
                    </>
                  ) : (
                    <>
                      {Loading ? (
                        <>
                          <button
                            type="submit"
                            disabled
                            className="px-4 py-2 text-center w-full inline-block text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700"
                          >
                            <svg
                              role="status"
                              className="inline w-4 h-4 mr-3 text-white animate-spin"
                              viewBox="0 0 100 101"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                fill="#E5E7EB"
                              />
                              <path
                                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                fill="currentColor"
                              />
                            </svg>
                            Loading...
                          </button>
                        </>
                      ) : (
                        <button
                          type="submit"
                          className="px-4 py-2 text-center w-full inline-block text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700"
                          to="#"
                        >
                          <span className="w-full">Submit </span>
                        </button>
                      )}
                    </>
                  )}
                </Form>
              )}
            </Formik>
            {/* Inline style for decoration */}
            <div
              className="text-center border-b my-5"
              style={{ lineHeight: "0.1rem" }}
            >
              <span className="px-3 bg-white text-gray-400">or</span>
            </div>
            <GoogleOneTapLogin />
            <p className="text-center mt-5">
              Don't have an account?
              <Link className="text-blue-500" to="/signup">
                Sign up
              </Link>
            </p>
          </div>
          {/*  COMPONENT: SIGN IN //END */}
        </div>
      </section>
    </>
  );
};

export default SignInForm;
