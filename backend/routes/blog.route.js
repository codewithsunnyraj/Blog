import express from "express";
import {
  addBlog,
  addComment,
  deleteBlog,
  fetchBlog,
  generateContent,
  getBlogById,
  getBlogComments,
  togglePublish,
} from "../controller/blog.controller.js";
import { upload } from "../middleware/multer.js";
import { Auth } from "../middleware/Auth.middleware.js";
const router = express.Router();
router.post("/add", upload.single("image"), Auth, addBlog);
router.get("/allBlog", fetchBlog);
router.get("/blogById/:id", getBlogById);
router.delete("/blogDelete", deleteBlog);
router.post("/toggle", Auth, togglePublish);
router.post("/add-comment", addComment);
router.post("/comment", getBlogComments);
router.post("/generate", Auth, generateContent);

export default router;
