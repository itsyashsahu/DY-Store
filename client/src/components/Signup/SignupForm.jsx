// Routing
import { Link } from "react-router-dom";

// Components
import InputField from "../Utils/InputField";

const SignupForm = () => {
  return (
    <section className="bg-gray-100 py-10" style={{ minHeight: "86vh" }}>
      <div className="container max-w-screen-xl mx-auto px-4">
        {/*  COMPONENT: SIGN IN */}
        <div
          style={{ maxWidth: 480 }}
          className="mt-8 mb-10 p-4 md:p-7 mx-auto rounded bg-white shadow-lg"
        >
          <form action="">
            <h2 className="mb-5 text-2xl font-semibold">Sign up</h2>
            <div className="grid md:grid-cols-2 gap-x-2">
              <InputField Label="First Name" placeholder="First Name" />
              <InputField Label="Last Name" placeholder="LastName" />
            </div>
            {/* grid */}
            <InputField Label="Email" type="email" placeholder="Email" />
            <InputField
              Label="Create Password"
              type="password"
              placeholder="Create Password"
            />
            <button
              type="submit"
              className="my-2 px-4 py-2 text-center w-full inline-block text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700"
            >
              Register
            </button>
            <label className="flex items-center w-max my-4">
              <input
                defaultChecked=""
                name=""
                type="checkbox"
                className="h-4 w-4"
              />
              <span className="ml-2 inline-block">
                I agree with Terms and Conditions
              </span>
            </label>
            <hr />
            <p className="text-center mt-5">
              Already have an account?
              <Link className="text-blue-500" to="/signin">
                Sign in
              </Link>
            </p>
          </form>
        </div>
        {/*  COMPONENT: SIGN IN //END */}
      </div>
    </section>
  );
};

export default SignupForm;
