import React from "react";

const InputField = ({
  Label = "label",
  placeholder = "Type here",
  type = "text",
}) => {
  return (
    <div className="mb-4">
      <label className="block mb-1"> {Label} </label>
      <input
        className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputField;
