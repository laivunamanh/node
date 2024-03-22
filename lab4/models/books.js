import mongoose from "mongoose";
const pschema = mongoose.Schema({
    name: String,
    image: String,
    price: Number,
    image: String,
    author: String

}, {
    timestamps: true
});
export const books = mongoose.model('books', pschema);