import express, {Request, Response} from 'express';
import cors from 'cors';
import "dotenv/config";
import mongoose from 'mongoose';
import userRoutes from './routes/users'
import authRoutes from './routes/auth'
import cookieParser from "cookie-parser";

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string); // write this line on the top of index file as server will crash if it will not work

const app = express(); // creating an app 
app.use(cookieParser()); // use cookie parser to parse or read the cookie
app.use(express.json()); // body of Api will convert into json
app.use(express.urlencoded({extended: true})); // for parsing the url(params etc)
app.use(cors({
    origin: process.env.FRONTEND_URL, // server will accept request from this url
    credentials: true
})); // browser prevents frontend on backend run on different ports

app.use("/api/auth", authRoutes)
app.use("/api/users", userRoutes);

app.listen(7000, ()=>{
    console.log("Server is running on localhost:7000");
})