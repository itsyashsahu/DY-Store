import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Modal = ({ setOpenModal }) => {
  const navigate = useNavigate();
  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);
  const enableScroll = () => {
    document.body.style.overflow = "auto";
  };

  const CloseModal = () => {
    setOpenModal(false);
    enableScroll();
  };
  const handleParentClick = (e) => {
    CloseModal();
  };

  const handleChildClick = (e) => {
    e.stopPropagation();
  };
  return (
    <>
      <div
        id="popup-modal"
        tabindex="-1"
        className=" absolute overflow-y-auto overflow-x-hidden grid place-items-center bg-slate-900 opacity-50 top-0 right-0 left-0 z-50 md:inset-0 h-modal md:h-full"
      ></div>
      <div
        id="popup-modal"
        onClick={handleParentClick}
        tabindex="-1"
        className="overflow-y-auto overflow-x-hidden grid place-items-center  fixed top-0 right-0 left-0 z-50 md:inset-0 h-modal md:h-full"
      >
        <div className="relative p-4 w-full max-w-md h-full md:h-auto ">
          <div
            onClick={handleChildClick}
            className="relative bg-white rounded-lg shadow border-2 border-solid border-gray-400 opacity-100"
          >
            <button
              onClick={CloseModal}
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
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
            <div className="p-6 text-center">
              <svg
                className="mx-auto mb-4 w-14 h-14 text-gray-400 "
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <h3 className="mb-5 text-lg font-normal text-gray-500 ">
                Are you sure you want to logout?
              </h3>
              <button
                data-modal-toggle="popup-modal"
                type="button"
                onClick={() => {
                  navigate("/logout");
                }}
                className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300  font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
              >
                Yes, I'm sure
              </button>
              <button
                data-modal-toggle="popup-modal"
                type="button"
                onClick={CloseModal}
                className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 "
              >
                No, cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
