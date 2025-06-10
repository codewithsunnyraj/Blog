import React from "react";
import { Route, Routes } from "react-router-dom";
import Blog from "./pages/Blog";
import Homes from "./pages/Homes";
import Footer from "./component/Footer";

const App = () => {
  return (
    <div>
      <Routes>
        <Route element={<Homes />} path="/" />
        <Route element={<Blog />} path="/blog" />
      </Routes>
    </div>
  );
};

export default App;
