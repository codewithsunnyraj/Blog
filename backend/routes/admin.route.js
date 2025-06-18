import { adminLogin } from "../controller/admin.controller.js";
import express from "express";

const router = express.Router();

export const adminRoute = router.post("/login", adminLogin);
