import React from "react";
import { useSelector } from "react-redux";

const Display = () => {
  const { customers } = useSelector((state) => state.customers);
  const { balance } = useSelector((state) => state.bank);

  return (
    <div className="flex flex-col gap-3 py-20 border border-solid border-red-900">
      <h1 className="uppercase text-4xl font-extrabold">
        Current Balance:{balance}
      </h1>
      <h2 className="uppercase text-4xl">List of coustomer:</h2>
      {customers.map((singleCustomer, index) => {
        return (
          <h2 className="uppercase text-4xl" key={index}>
            {singleCustomer.title}
          </h2>
        );
      })}
    </div>
  );
};

export default Display;
