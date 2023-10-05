import express, { response } from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";
import booksRoute from "./routes/booksRoute.js"

const app = express();

// Middleware for parsing request body
    app.use(express.json());

app.get("/", (request, response) => {
    console.log(request)
    return response.status(234).send("Welcome to the Book Store")
});

app.use("/Books", booksRoute);

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