import { adminLogin } from "../controller/admin.controller.js";
import express from "express";
import { addBlog, fetchBlog } from "../controller/blog.controller.js";
import { upload } from "../middleware/multer.js";
import { Auth } from "../middleware/Auth.middleware.js";

const router = express.Router();

export const adminRoute = router.post("/login", adminLogin);
export const blogRouter = router.post(
  "/add",
  upload.single("image"),
  Auth,
  addBlog
);

export const fetchBlogs = router.get("/allBlog", fetchBlog);
