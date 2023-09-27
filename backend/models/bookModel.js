import mongoose from "mongoose";

const bookSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true 
        }, 
        
        subgenre: {
            type: String,
            required: false 
        },
        
        author: {
            type: String,
            required: true 
        }, 
        
        yearReleased: {
            type: String,
            required: true 
        }, 
    },
    {
        timestamps: true,
    }
);

export const Book = mongoose.model("The Book", bookSchema);