import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  customers: [],
};
const customers = createSlice({
  initialState,
  name: "customerSlice",
  reducers: {
    addCustomer: (state, action) => {
      state.customers = [...state.customers, action.payload];
    },
  },
});

export default customers.reducer;
export const { addCustomer } = customers.actions;
