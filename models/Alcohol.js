const { Schema, model } = require("mongoose");



const alcoholSchema = new Schema({
    name: {
        type: String,
        trim: true
    },
    type: {
        type: String,
        trim: true
    },
    percent: {
        type: Number,
    }
});



const Alcohol = model("Alcohol", alcoholSchema);

module.exports = Alcohol;