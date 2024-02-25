import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  balance: 0,
};

const bankSlice = createSlice({
  initialState,
  name: "bankSlice",
  reducers: {
    addAmount: (state, { payload }) => {
      state.balance = state.balance + payload;
    },
    subtractAmount: (state, action) => {
      state.balance = state.balance - action.payload;
    },
  },
});

export default bankSlice.reducer;
export const { addAmount, subtractAmount } = bankSlice.actions;
