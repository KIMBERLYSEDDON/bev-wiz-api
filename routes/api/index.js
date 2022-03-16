const router = require("express").Router();
// TODO: add individual routes for different table requests

// requiring alcohol, drinks data 
const alcohol = require('./alcohol');
const drinks = require('./drinks');

// api/alcohol
router.get("/alcohol", (req, res) => {
  return res.send([alcohol]);
});

// api/drinks
router.get("/drinks", (req, res) => {
    return res.send([drinks]);
  });

module.exports = router;
