import express, { request, response } from "express";
import mongoose from "mongoose";
import "dotenv/config";
import cors from "cors";
import { startServer } from "./db/connection.js";
import bookRouter from "./routes/bookRouters.js";

const app = express();

const port = process.env.PORT;

app.use(cors({ origin: "http://localhost:5173" })); 
app.use(express.urlencoded({ extended: true })); 
app.use(express.json()); 


app.use("/api",bookRouter);
await startServer();
app.listen(port, () => console.log("Server started at port " + port));


