import "dotenv/config";
import mongoose from "mongoose";

export async function startServer() {
    try {
      await mongoose.connect(process.env.MONGODBURL);
      
    } catch (error) {
      console.log("Error connecting to the DB", error);
    }
  }