import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";

const app = express();

app.get("/", (request, response) => {
    console.log(request)
    return response.status(234).send("Welcome to the Book Store")
});

mongoose.connect(mongoDBURL)
.then(() => {
    console.log("App connected to DB")
    app.listen(PORT, () => {
        console.log(`App is listenning in port: ${PORT}`)
    });
})
.catch((error) => {
    console.log(error)
});