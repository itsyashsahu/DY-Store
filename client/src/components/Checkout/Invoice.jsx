// images
import { ReactComponent as Logo } from "../../components/Utils/images/logo.svg";

// Components
import InvoiceTable from "./InvoiceTable";

const Invoice = () => {
  return (
    <div className="py-2 px-10">
      <h2 className="text-3xl font-semibold my-5">Invoice</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div></div>
        <div className="flex justify-end flex-col">
          <div className="h-16 w-24 ml-auto flex justify-end ">
            <Logo />
          </div>
          <h1 className="font-medium text-2xl text-gray-900 text-right whitespace-nowrap">
            DY Store
          </h1>
          <h1 className="font-medium text-base text-gray-900 text-right whitespace-nowrap">
            Gandhi Chowk, Ahemdabad,IN
          </h1>
          <p className="font-medium text-base text-gray-700 text-right whitespace-nowrap">
            23 June, 2022
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16 mt-6">
        <div>
          <h1 className="font-medium text-2xl text-gray-900 whitespace-nowrap">
            Bill To
          </h1>
          <h1 className="font-medium text-base text-gray-900 whitespace-nowrap">
            Gandhi Chowk, Ahemdabad,IN
            {/* Here goes the add of the coustomer */}
          </h1>
          <p className="font-medium text-base text-gray-700 whitespace-nowrap">
            23 June, 2022
          </p>
        </div>
        <div className="flex justify-end flex-col"></div>
      </div>

      <InvoiceTable />
    </div>
  );
};

export default Invoice;
