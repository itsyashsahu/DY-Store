// Routing
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// components
import InputField from "../Utils/InputField";
import AuthContext from "../../context/auth/authContext";
import AlertContext from "../../context/alert/alertContext";

// Images
import Facebook from "./images/facebook.svg";
import Google from "./images/google.svg";

// imports
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useContext, useEffect, useState } from "react";

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

                {formik.errors === 401 || formik.errors === 422 ? (
                  <>
                    <button
                      type="submit"
                      className="px-4 py-2 text-center w-full inline-block text-white bg-red-500 border border-transparent rounded-md hover:bg-red-700"
                      to="#"
                    >
                      <span className="w-full">
                        {formik.errors === 401 ? "Wrong Credentials" : null}
                        {formik.errors === 422 ? "User Does Not Exists" : null}
                      </span>
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

                {/* Inline style for decoration */}
                <div
                  className="text-center border-b my-5"
                  style={{ lineHeight: "0.1rem" }}
                >
                  <span className="px-3 bg-white text-gray-400">or</span>
                </div>
                <Link
                  to="#"
                  className="mb-2 px-4 py-2 w-full flex items-center justify-center text-center text-gray-700 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 hover:text-blue-600"
                >
                  <img
                    src={Google}
                    className="mr-3"
                    width={20}
                    height={20}
                    alt="Google Oauth"
                  />
                  Continue with Google
                </Link>
                <Link
                  to="#"
                  className="mb-2 px-4 py-2 w-full flex items-center justify-center text-center text-gray-700 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 hover:text-blue-600"
                >
                  <img
                    src={Facebook}
                    className="mr-3"
                    width={20}
                    height={20}
                    alt="Facebook Oauth"
                  />
                  Continue with Facebook
                </Link>
                <p className="text-center mt-5">
                  Don't have an account?
                  <Link className="text-blue-500" to="/signup">
                    Sign up
                  </Link>
                </p>
              </Form>
            )}
          </Formik>
        </div>
        {/*  COMPONENT: SIGN IN //END */}
      </div>
    </section>
  );
};

export default SignInForm;
