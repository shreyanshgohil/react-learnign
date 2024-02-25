import { createSlice } from "@reduxjs/toolkit";
import postAction from "../action/getPostAction";
const initialState = {
  loading: false,
  posts: [],
  error: null,
};

const postSlice = createSlice({
  name: "postSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(postAction.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(postAction.fulfilled, (state, { payload }) => {
      state.posts = payload;
      state.loading = false;
    });
    builder.addCase(postAction.rejected, (state) => {
      state.error = "Something went wrong";
    });
  }, //
});

export default postSlice.reducer;
