const mongoose = require("mongoose");


const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        required:[true,"Setup is required"],
        minlength: [10,"Setup has to be more than 10 characters"]
    },
    punchline: {
        type: String,
        required:[true, "YON NEED A PUNCHLINE!!!!"],
        minlength: [3, "Punchiline must be 3 characters"],

    }    
},{timestamps:true})

// This is how we register our schema.
const Joke = mongoose.model("Joke",JokeSchema);

// Finally we export it out of the file.
module.exports = Joke;