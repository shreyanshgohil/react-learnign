import { configureStore } from "@reduxjs/toolkit";
import bankSlice from "./slice/bankSlice";
import customers from "./slice/customers";
import postSlice from "./slice/postSlice";
const store1 = configureStore({
  reducer: {
    bank: bankSlice,
    customers,
    posts: postSlice,
  },
});

export default store1;
