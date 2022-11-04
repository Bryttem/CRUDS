import mongoose from "mongoose";

const gameSchema = new mongoose.Schema({
    id: String,
    name: String,
    description: String,
    price: String,
    slug: String,

});

export const Game = mongoose.model('Game', gameSchema);