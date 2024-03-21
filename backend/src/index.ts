import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import userRoutes from "./routes/users";
import authRoutes from "./routes/auth";
import cookieParser from "cookie-parser";
import path from "path";
import { v2 as cloudinary } from "cloudinary"; // v2 is a SDK
import myHotelRoutes from "./routes/my-hostels";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string); // write this line on the top of index file as server will crash if it will not work

const app = express(); // creating an app
app.use(cookieParser()); // use cookie parser to parse or read the cookie
app.use(express.json()); // body of Api will convert into json
app.use(express.urlencoded({ extended: true })); // for parsing the url(params etc)
app.use(
  cors({
    origin: process.env.FRONTEND_URL, // server will accept request from this url
    credentials: true,
  })
); // browser prevents frontend on backend run on different ports

app.use(express.static(path.join(__dirname, "../../frontend/dist"))); // express can serve static assets
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/my-hotels", myHotelRoutes);

app.get("*", (req: Request, res: Response)=>{
    res.sendFile(path.join(__dirname, "../../frontend/dist/index.html"))
})// all the other routes will go to index.html


app.listen(7000, () => {
  console.log("Server is running on localhost:7000");
});
