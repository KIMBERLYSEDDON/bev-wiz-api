const router = require("express").Router();
// TODO: add individual routes for different table requests

// alcohol data
const alcohol = [
    {
        id: 1,
        name: 'Amaretto',
        type: 'Liqueur',
        percent: '21-28'
    },
    {
        id: 2,
        name: 'Coffee Liqueur',
        type: 'Liqueur',
        percent: '21-28'
    },
    {
        id: 3,
        name: 'Vermouth',
        type: 'Wine',
        percent: '15-18'
    },
    {
        id: 4,
        name: 'Moscato',
        type: 'White Wine',
        percent: '5-7'
    },
    {
        id: 5,
        name: 'Cabernet Sauvignon',
        type: 'Red Wine',
        percent: '13-15'
    },
    {
        id: 6,
        name: 'Asti Martini',
        type: 'Sparkling Wine',
        percent: '7-9.5'
    },
    {
        id: 7,
        name: 'Vodka',
        type: 'Vodka',
        percent: '40'
    },
    {
        id: 8,
        name: 'Coconut Rum',
        type: 'Rum',
        percent: '21-24'
    },
    {
        id: 9,
        name: 'Light Rum',
        type: 'Rum',
        percent: '21-24'
    },
    {
        id: 10,
        name: 'Dark Rum',
        type: 'Rum',
        percent: '21-24'
    },
    {
        id: 11,
        name: 'Spiced Rum',
        type: 'Rum',
        percent: '21-24'
    },
    {
        id: 12,
        name: 'Tequila',
        type: 'Tequila',
        percent: '40-50'
    },
    
];

//drinks data
const drinks = [
    {
      id: 1,
      name: "Bloody Mary",
      description:
        "A Bloody Mary is a cocktail containing vodka, tomato juice, and other spices and flavorings including Worcestershire sauce, hot sauces, garlic, herbs, horseradish, celery, olives, salt, black pepper, lemon juice, lime juice and celery salt.",
      glassware: "Highball glass",
      alcohol: "100ml vodka",
      additional:
        "500ml tomato juice, 1 TBsp lemon juice, few shakes Worcestershire sauce, pinch black pepper, pinch celery salt, few shakes Worcestershire sauce, few shakes Tobasco",
      mixer: "null",
      garnish: "2 celery sticks, 2 slices of lemon",
      instructions: `STEP 1.
          Place the ice in a large jug. Measure the vodka, tomato juice and lemon juice and pour it straight onto the ice.
          STEP 2
          Add 3 shakes of Worcestershire sauce and Tabasco (or more if you like it very spicy) and a pinch of celery salt and pepper. Stir until the outside of the jug feels cold, then strain the cocktail into 2 tall glasses.
          STEP 3
          Top up with fresh ice, add a celery stick and lemon slice to both glasses and enjoy.`,
    },
  ];

// api/alcohol
router.get("/alcohol", (req, res) => {
  return res.send([alcohol]);
});

// api/drinks
router.get("/drinks", (req, res) => {
    return res.send([drinks]);
  });

module.exports = router;
