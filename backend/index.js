import express, { response } from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
// let dotenv = require("dotenv");
// dotenv.config();
import "dotenv/config";
import { Book } from "./models/bookModel.js";

const app = express();

// Middleware for parsing request body
    app.use(express.json());

app.get("/", (request, response) => {
    console.log(request)
    return response.status(234).send("Welcome to the Book Store")
});

// Route to Fave a new Book 
app.post("/books", async (request, response) => {
    try {
        if (
            !request.body.title ||
            !request.body.subgenre ||
            !request.body.author ||
            !request.body.yearReleased
        ) {
            return response.status(400).send({
                message: "Send all required fields: title, author, yearReleased"
            });
        }
        const newBook = {
            title: request.body.title,
            subgenre: request.body.subgenre,
            author: request.body.author,
            yearReleased: request.body.yearReleased,
        };

        const book = await Book.create(newBook);

        return response.status(201).send(book);
    } catch (error) {
      console.log(error.message);
      response.status(500).send({ message: error.message })      
    }
})
// Route to get all Books
app.get("/books", async (request, response) => {
    try{
        const books = await Book.find({});

        return response.status(200).json({
            count: books.length,
            data: books
        });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message })
    }
}); 

// Route to get a single Book by its id
app.get("books/:id", async (request, response) => {
    try{
        const { id } = request.params;

        const book = await Book.findById(id);

        return response.status(200).json(book);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message })
    }
}) 
// Route to update a single Book
app.put("books/:id", async (request, response) => {
    try{
        if(
            !request.body.title ||
            !request.body.subgenre ||
            !request.body.author ||
            !request.body.yearReleased
        ) {
            return response.status(400).send({
                message: "Send all required fields: title, author, yearReleased"
            });
        }
        
        const { id } = request.params;
        
        const result = await Book.findByIdAndUpdate(id, request.body); 

        if (!result) {
            return response.status(404).json({ message: "Book not found "});
        }
        return response.status(200).send({ message: " Book updated successfully"})
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message});
    }
})
// Route to delete a sinlge Book 
app.delete("/books/:id", async (request, response) => {
    try{
        const { id } = request.params;

        const result = await Book.findByIdAndDelete(id);
        
        if (!result) {
            return response.status(404).send({ message:"Book not found"});   
        }

        return response.status(200).send({ message:"Book deleted successfully"});
        
    }catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message})
    }
})

mongoose.connect(mongoDBURL, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
    console.log("App connected to DB")
    app.listen(PORT, () => {
        console.log(`App is listenning in port: ${PORT}`)
    });
})
.catch((error) => {
    console.log(error)
});