import React from "react";
import { Route, Routes } from "react-router-dom";
import Blog from "./pages/Blog";
import Homes from "./pages/Homes";
import Layout from "./pages/admin/Layout";
import Dashboard from "./pages/admin/Dashboard";
import AddBlog from "./pages/admin/AddBlog";
import ListBlog from "./pages/admin/ListBlog";
import Comment from "./pages/admin/Comment";

const App = () => {
  return (
    <div>
      <Routes>
        <Route element={<Homes />} path="/" />
        <Route element={<Blog />} path="/blog/:id" />
        <Route element={<Layout />} path="/admin">
          <Route index element={<Dashboard />} />
          <Route path="addBlog" element={<AddBlog />} />
          <Route path="listBlog" element={<ListBlog />} />
          <Route path="comments" element={<Comment />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
