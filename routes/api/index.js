const router = require("express").Router();
// TODO: add individual routes for different table requests

// requiring alcohol, drinks, mixers, and garnish data
const alcohol = require("./alcohol");
const drinks = require("./drinks");
const mixers = require("./mixers");
const garnish = require("./garnish");

// api/alcohol
router.get("/alcohol", (req, res) => {
  return res.send([alcohol]);
});

// api/drinks
router.get("/drinks", (req, res) => {
  return res.send([drinks]);
});

// api/mixers
router.get("/mixers", (req, res) => {
  return res.send([mixers]);
});

// api/garnish
router.get("/garnish", (req, res) => {
  return res.send([garnish]);
});

module.exports = router;
