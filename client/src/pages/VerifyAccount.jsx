import React from "react";
import { ReactComponent as EmailSent } from "../components/Utils/images/EmailSent.svg";

const VerifyAccount = () => {
  return (
    <>
      <div
        id="popup-modal"
        className="overflow-y-auto overflow-x-hidden grid place-items-center h-[89vh] border-t top-0 right-0 left-0 z-50 md:inset-0 "
      >
        <div className="relative p-4 w-full max-w-md h-auto ">
          <div className="relative bg-white rounded-lg shadow border-2 border-solid border-gray-400 opacity-100">
            <button
              type="button"
              className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm ml-auto inline-flex items-center  "
              data-modal-toggle="popup-modal"
            ></button>
            <div className="p-6 text-center">
              <div className="mx-auto w-full mt-8 grid place-items-center ">
                {/* <AccountActivated className="h-48 w-48 mb-4" /> */}
                <EmailSent className="h-48 w-48 mb-4" />
                <h3 className="mb-0 text-lg font-normal text-gray-500 ">
                  Verification email sent successfully
                </h3>
                <h3 className="mb-5 text-base font-normal text-gray-500 ">
                  check your email
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VerifyAccount;
