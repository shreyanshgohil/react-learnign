import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCustomer } from "../store/slice/customers";

const AddCoustomer = () => {
  const [customer, setCustomer] = useState();
  const dispatch = useDispatch();
  const changeHandler = (event) => {
    setCustomer(event.target.value);
  };

  const adCustomerHandler = () => {
    dispatch(addCustomer({ title: customer }));
    setCustomer("");
  };

  return (
    <div className="flex flex-col max-w-[400px] p-20 border-solid border border-red-400">
      <input
        type="text"
        className="border border-solid p-1 border-blue-600 mb-3"
        onChange={changeHandler}
        value={customer}
      />
      <button
        className="border border-solid p-1 border-blue-600"
        onClick={adCustomerHandler}
      >
        Add Customer
      </button>
    </div>
  );
};

export default AddCoustomer;
