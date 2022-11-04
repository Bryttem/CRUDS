import mongoose from "mongoose";

const toySchema = new mongoose.Schema({
    id: String,
    name: String,
    description: String,
    slug: String

});

export const Toy = mongoose.model('Toy', toySchema);