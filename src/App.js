import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import Post from "./pages/Post";
import Product from "./pages/Product";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/post" element={<Post />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </>
  );
};

export default App;
