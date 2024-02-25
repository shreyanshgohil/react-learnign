import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAmount, subtractAmount } from "../store/slice/bankSlice";

const ChangeBalance = () => {
  const [amount, setAmount] = useState(null);
  const { balance } = useSelector((state) => state.bank);
  const dispatch = useDispatch();
  const changeHandler = (event) => {
    setAmount(event.target.value);
  };

  const changeBalance = (type) => {
    if (type === "add") {
      dispatch(addAmount(+amount));
    } else if (type === "subtract") {
      if (balance > 0) {
        dispatch(subtractAmount(+amount));
      }
    }
  };

  return (
    <>
      <input
        type="number"
        className="border border-solid p-1 border-blue-600 mb-3"
        onChange={changeHandler}
        value={amount}
      />
      <button
        className="border border-solid p-1 border-blue-600"
        onClick={() => changeBalance("add")}
      >
        Add Amount
      </button>
      <button
        className="border border-solid p-1 border-blue-600"
        onClick={() => changeBalance("subtract")}
      >
        Subtract Amount
      </button>
    </>
  );
};

export default ChangeBalance;
