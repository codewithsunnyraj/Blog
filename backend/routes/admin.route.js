import {
  adminLogin,
  approveComments,
  deleteCommentsById,
  getAllBlogsAdmin,
  getAllComments,
  getDashboard,
} from "../controller/admin.controller.js";
import express from "express";
const router = express.Router();

router.post("/login", adminLogin);
router.post("/comments", getAllComments);
router.post("/blogs", getAllBlogsAdmin);
router.delete("/delete", deleteCommentsById);
router.post("/approve", approveComments);
router.get("/dashboard", getDashboard);

export default router;
