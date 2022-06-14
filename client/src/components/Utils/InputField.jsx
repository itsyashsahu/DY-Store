import React from "react";
import { ErrorMessage, useField } from "formik";

const InputField = ({ Label = "label", ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="mb-4">
      <label className="block mb-1"> {Label} </label>
      <input
        className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
        // type={type}

        // name={name}
        {...field}
        {...props}
      />
      <div className="flex justify-start text-red-500 text-xs">
        <ErrorMessage name={field.name} />
      </div>
    </div>
  );
};

export default InputField;
