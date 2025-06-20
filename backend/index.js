import express from "express";
import dotenv from "dotenv";
dotenv.config();
import { DbConnect } from "./config/DbConnect.js";
import cors from "cors";
import adminRoute from "./routes/admin.route.js";
import blogRouter from "./routes/blog.route.js";

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/admin", adminRoute);
app.use("/api/blog", blogRouter);
const PORT = process.env.PORT;
app.listen(PORT || 3000, () => {
  DbConnect();
  console.log(`server is running on PORT ${PORT}`);
});
