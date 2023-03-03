const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const shoes = new Schema(
    {
        name: {
            type: String,
            default: "",
            maxLength: 50,
            required: true
        },
        price: {
            type: Number,
            default: 0,
            maxLength: 50,
            require: true,
        },
    }
);

module.exports = mongoose.model("Shoe", shoes);