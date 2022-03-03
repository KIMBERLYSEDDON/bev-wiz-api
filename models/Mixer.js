const { Schema, model } = require("mongoose");



const mixerSchema = new Schema({
    name: {
        type: String,
        trim: true
    },
    type: {
        type: String
    }
});



const Mixer = model("Mixer", mixerSchema);

module.exports = Mixer;