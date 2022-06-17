// images
import { ReactComponent as Logo } from "../../components/Utils/images/logo.svg";

// Components
import InvoiceTable from "./InvoiceTable";

const Invoice = ({ CartItems }) => {
  const EditSVG = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#2563eb"
        stroke-width="0.7"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="feather feather-edit-3"
      >
        <path d="M12 20h9"></path>
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
      </svg>
    );
  };
  return (
    <div className="md:py-2 md:px-10  ">
      <h2 className="text-3xl font-semibold my-5">Invoice</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div></div>
        <div className="flex justify-end flex-col">
          <div className="h-16 w-24 ml-auto flex justify-end ">
            <Logo />
          </div>
          <h1 className="font-medium md:text-2xl text-xl text-gray-900 text-right whitespace-nowrap">
            DY Store
          </h1>
          <h1 className="font-medium md:text-base text-sm text-gray-900 text-right whitespace-nowrap">
            Gandhi Chowk, Ahemdabad,IN
          </h1>
          <p className="font-medium md:text-base text-sm text-gray-700 text-right whitespace-nowrap">
            23 June, 2022
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-14 mt-6">
        <div>
          <h1 className="font-medium md:text-2xl text-xl mb-3 text-gray-900 whitespace-nowrap">
            Bill To
          </h1>
          <h1 className="font-medium md:text-lg text-base uppercase text-gray-900 whitespace-nowrap">
            Name
            {/* Here goes the add of the coustomer */}
          </h1>
          <span className="text-sm dark:text-gray-400 flex items-end ">
            Deliver to Address
          </span>
          <h1 className="font-medium md:text-base text-sm text-gray-900 whitespace-nowrap">
            Gandhi Chowk, Ahemdabad,IN
            {/* Here goes the add of the coustomer */}
          </h1>
          <p className=" flex font-medium md:text-base text-sm text-gray-700 whitespace-nowrap">
            23 June, 2022
            <div class="group flex items-end">
              <p class="">
                {/* Hover me{" "} */}
                <div className="h-5 w-5 ml-1 cursor-pointer">{EditSVG()}</div>
                <span class='tooltip-text text-xs text-white bg-blue-500 p-3 -mt-16 -ml-6 rounded hidden group-hover:block absolute text-center py-2 px-4 z-50"'>
                  Change the delivery address
                </span>
              </p>
            </div>
          </p>
        </div>
        <div className="flex justify-end flex-col"></div>
      </div>

      <InvoiceTable CartItems={CartItems} />
    </div>
  );
};

export default Invoice;
