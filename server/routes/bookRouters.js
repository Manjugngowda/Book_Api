import express from "express";
import {getBooks, addBook,getBook, updateBook, deleteBook} from "../controllers/books.js";


const bookRouter=express.Router();


bookRouter.get("/get/books", getBooks);

bookRouter.get("/get/book/:id", getBook);
bookRouter.post("/add/book", addBook);
bookRouter.put("/update/:id", updateBook);
bookRouter.delete("/delete/:id", deleteBook);

export default bookRouter;


  

  

  
 