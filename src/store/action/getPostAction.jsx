import { createAsyncThunk } from "@reduxjs/toolkit";

const postAction = createAsyncThunk("get/post", async (value) => {
  console.log(value, "lllllll");
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return data;
});

export default postAction;
