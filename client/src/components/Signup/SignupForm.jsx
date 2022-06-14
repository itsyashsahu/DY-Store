// Routing
import { Link } from "react-router-dom";

// Components
import InputField from "../Utils/InputField";

// imports
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const SignupForm = () => {
  const validate = Yup.object({
    email: Yup.string().email("Email is invalid").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 charaters")
      .required("Password is required"),
    firstName: Yup.string()
      .min(3, "First name cannot be of less then 3 Characters")
      .required("First Name is required"),
    lastName: Yup.string()
      .min(3, "Last name cannot be of less then 3 Characters")
      .required("Last Name is required"),
    Tnc: Yup.boolean().oneOf(
      [true],
      "You must accept the pricing policy terms and conditions"
    ),
  });

  const handleSubmit = (values, actions) => {
    console.log("Signup Form Values", values);
    // axios
    //   .post("api/users/signin", values)
    //   .then((res) => {
    //     // console.log(res);
    //     if (res.status === 201) {
    //       setAuthToken(res.data.token);
    //       // console.log(res.data.token)
    //       localStorage.setItem("jwtToken",res.data.token);
    //       // history.push("./signin")
    //       navigate("/dashboard");
    //     }
    //   })
    //   .catch((err) => {
    //     // console.log(err);
    //     actions.setErrors(err.response.status);
    //   });
  };

  return (
    <section className="bg-gray-100 py-10" style={{ minHeight: "86vh" }}>
      <div className="container max-w-screen-xl mx-auto px-4">
        {/*  COMPONENT: SIGN IN */}
        <div
          style={{ maxWidth: 480 }}
          className="mt-8 mb-10 p-4 md:p-7 mx-auto rounded bg-white shadow-lg"
        >
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              password: "",
              Tnc: false,
            }}
            validationSchema={validate}
            onSubmit={handleSubmit}
          >
            {(formik) => (
              <Form>
                <h2 className="mb-5 text-2xl font-semibold">Sign up</h2>
                <div className="grid md:grid-cols-2 gap-x-2">
                  <InputField
                    Label="First Name"
                    placeholder="First Name"
                    name="firstName"
                  />
                  <InputField
                    Label="Last Name"
                    placeholder="Last Name"
                    name="lastName"
                  />
                </div>
                {/* grid */}
                <InputField
                  Label="Email"
                  type="email"
                  placeholder="Email"
                  name="email"
                />
                <InputField
                  Label="Create Password"
                  type="password"
                  placeholder="Create Password"
                  name="password"
                />

                {formik.errors === 424 ? (
                  <>
                    <button
                      type="submit"
                      className="my-2 px-4 py-2 text-center w-full inline-block text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700"
                    >
                      <span className="w-full">User Already Exists </span>
                    </button>
                  </>
                ) : (
                  <button
                    type="submit"
                    className="my-2 px-4 py-2 text-center w-full inline-block text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700"
                  >
                    <span className="w-full">Register </span>
                  </button>
                )}

                <label className="flex items-center w-max my-4">
                  <Field type="checkbox" className="h-4 w-4" name="Tnc" />
                  <span className="ml-2 inline-block">
                    I agree with Terms and Conditions
                    <br />
                    <div className="justify-start text-red-500 text-xs">
                      <ErrorMessage name="Tnc" />
                    </div>
                  </span>
                </label>
                <hr />
                <p className="text-center mt-5">
                  Already have an account?
                  <Link className="text-blue-500" to="/signin">
                    Sign in
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

export default SignupForm;
