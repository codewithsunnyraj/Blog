import express from "express";
import {
  addBlog,
  deleteBlog,
  fetchBlog,
  getBlogById,
  togglePublish,
} from "../controller/blog.controller.js";
import { upload } from "../middleware/multer.js";
import { Auth } from "../middleware/Auth.middleware.js";
const router = express.Router();
export const blogRouter = router.post(
  "/add",
  upload.single("image"),
  Auth,
  addBlog
);

export const fetchBlogs = router.get("/allBlog", fetchBlog);
export const fetchBlogById = router.get("/blogById/:id", getBlogById);
export const deleteblog = router.delete("/blogDelete", deleteBlog);
export const toggleBlogPubhished = router.post("/toggle", togglePublish);
