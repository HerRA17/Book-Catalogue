import express from "express";
import { Book } from "../models/bookModel.js";
const router = express.Router()

// Route to Fave a new Book 
router.post("/", async (request, response) => {
    try {
        if (
            !request.body.title ||
            !request.body.subgenre ||
            !request.body.author ||
            !request.body.publishYear
        ) {
            return response.status(400).send({
                message: "Send all required fields: title, subgenre, author, publish Year"
            });
        }
        const newBook = {
            title: request.body.title,
            subgenre: request.body.subgenre,
            author: request.body.author,
            publishYear: request.body.publishYear,
        };

        const book = await Book.create(newBook);

        return response.status(201).send(book);
    } catch (error) {
      console.log(error.message);
      response.status(500).send({ message: error.message })      
    }
})
// Route to get all Books
router.get("/", async (request, response) => {
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
router.get("/:_id", async (request, response) => {
    try{
        const { _id } = request.params;

        const book = await Book.findById(_id);

        return response.status(200).json(book);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message })
    }
}) 
// Route to update a single Book
router.put("/:_id", async (request, response) => {
    try{
        if(
            !request.body.title ||
            !request.body.subgenre ||
            !request.body.author ||
            !request.body.publishYear
        ) {
            return response.status(400).send({
                message: "Send all required fields: title, author, yearReleased"
            });
        }
        
        const { _id } = request.params;
        
        const result = await Book.findByIdAndUpdate(_id, request.body); 

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
router.delete("/:_id", async (request, response) => {
    try{
        const { _id } = request.params;

        const result = await Book.findByIdAndDelete(_id);
        
        if (!result) {
            return response.status(404).send({ message:"Book not found"});   
        }

        return response.status(200).send({ message:"Book deleted successfully"});
        
    }catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message})
    }
})

export default router;