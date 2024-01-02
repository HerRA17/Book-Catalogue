import express, { response } from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";
import booksRoute from "./routes/booksRoute.js"
import cors from "cors";

const app = express();

// Middleware for parsing request body
    app.use(express.json());

// Middleware for handling CORS Policy
// app.use(cors());
app.use(
    cors({
        origin: ["http://localhost:5555", "http://127.0.0.1:5173/", "https://book-catalogue-backend-nu.vercel.app/"],
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: ["Content Type"],
    })
) 

app.get("/", (request, response) => {
    console.log(request)
    return response.status(234).send("Welcome to the Book Store")
});

app.use("/Books", booksRoute);

mongoose.connect(mongoDBURL, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
    console.log("App connected to DB")
    app.listen(PORT, () => {
        console.log(`App is listening in port: ${PORT}`)
    });
})
.catch((error) => {
    console.log(error)
});