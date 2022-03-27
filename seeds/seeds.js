const db = require("../config/connection");
const { User, Alcohol, Drink, Garnish, Mixer } = require("../models");
const alcoholSeeds = require("./alcoholSeeds.json");
const drinkSeeds = require("./drinkSeeds.json");
const garnishSeeds = require("./garnishSeeds.json");
const mixerSeeds = require("./mixerSeeds.json");
// const userSeeds = require('./userSeeds.json');

db.once("open", async () => {
  try {
    // Clean the db
    await Alcohol.deleteMany({});
    await Drink.deleteMany({});
    await Garnish.deleteMany({});
    await Mixer.deleteMany({});
    // await User.deleteMany({});

    // Seed the db
    await Alcohol.create(alcoholSeeds);
    await Drink.create(drinkSeeds);
    await Garnish.create(garnishSeeds);
    await Mixer.create(mixerSeeds);
    // await User.create(userSeeds);

    console.log("The database has been successfully seeded!");
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
