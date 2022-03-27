const { Schema, model } = require("mongoose");

const drinkSchema = new Schema({
  name: {
    type: String,
    trim: true,
  },
  description: {
    type: String,
  },
  glassware: {
    type: String,
  },
  alcohol: [
    {
      _id: {
        type: String,
      },
      type: {
        type: String,
      },
    },
  ],
  mixer: [
    {
      _id: {
        type: String,
      },
      name: {
        type: String,
      },
      type: {
        type: String,
      },
    },
  ],
  garnish: [
    {
      _id: {
        type: String,
      },
      name: {
        type: String,
      },
    },
  ],
  instructions: {
    type: String,
  },
});

const Drink = model("Drink", drinkSchema);

module.exports = Drink;
