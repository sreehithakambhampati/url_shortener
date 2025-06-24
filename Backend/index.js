import dotenv from "dotenv";
import express from "express";
import short_url from "./src/routes/short_url.route.js";
import { redirectFromShortUrl } from "./src/controllers/short_url.controller.js";
import connectDB from "./src/config/db.js";
import cors from "cors";
import { attachUser } from "./src/utils/attachUser.js";
import auth_routes from "./src/routes/auth.route.js";
import user_routes from "./src/routes/user.routes.js"
import cookieParser from "cookie-parser"
import { errorHandler } from "./src/utils/errorHandler.js";

dotenv.config("./.env");

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
app.use(cors({
    origin: 'http://localhost:5173', 
    credentials: true 
}));
app.use(attachUser)
app.use("/api/user",user_routes)
app.use("/api/auth",auth_routes)
app.use("/api/create", short_url);
app.get("/:id", redirectFromShortUrl);
app.use(errorHandler)
app.listen(5000, async () => {
  await connectDB();
  console.log("Server running at http://localhost:5000");
});
