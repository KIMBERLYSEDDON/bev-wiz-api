const { Schema, model } = require("mongoose");



const garnishSchema = new Schema({
    name: {
        type: String,
        trim: true
    }
});



const Garnish = model("Garnish", garnishSchema);

module.exports = Garnish;