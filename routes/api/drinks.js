//drinks data
const drinks = [
  {
    id: 1,
    name: "Bloody Mary",
    description: `A Bloody Mary is a cocktail containing vodka, tomato juice, and other spices and flavorings including Worcestershire sauce, hot sauces, garlic, herbs, horseradish, celery, olives, salt, black pepper, lemon juice, lime juice and celery salt.`,
    glassware: "Highball glass",
    alcohol: ["100ml vodka"],
    additional: [
      "500ml tomato juice",
      "1 TBsp lemon juice",
      "few shakes Worcestershire sauce",
      "pinch black pepper",
      "pinch celery salt",
      "few shakes Worcestershire sauce",
      "few shakes Tobasco",
    ],
    mixer: null,
    garnish: ["2 celery sticks", "2 slices of lemon"],
    instructions: `STEPS: 
        1. Place the ice in a large jug. Measure the vodka, tomato juice and lemon juice and pour it straight onto the ice.
        2. Add 3 shakes of Worcestershire sauce and Tabasco (or more if you like it very spicy) and a pinch of celery salt and pepper. Stir until the outside of the jug feels cold, then strain the cocktail into 2 tall glasses.
        3. Top up with fresh ice, add a celery stick and lemon slice to both glasses and enjoy.`,
  },
  {
    id: 2,
    name: "Mojito",
    description: `A classic cocktail that originated in Cuba, the mojito is a favorite summertime beverage worldwide. The mint and lime give it a cool, refreshing flavor, and the soda lightens it up with a fizzy crispness. There are many ways that you can switch up the flavor of the basic recipe, which makes it a fun cocktail to share with friends.`,
    glassware: "Collins glass",
    alcohol: ["2 ounces white rum"],
    additional: [
      "3 mint leaves",
      "1/2 ounce simple syrup",
      "3/4 ounce lime juice, freshly squeezed",
      "Club soda, to top",
    ],
    mixer: null,
    garnish: ["Mint Spring Garnish"],
    instructions: `STEPS:
        1. Lightly muddle the mint with the simple syrup in a shaker.
        2. Add the rum, lime juice and ice, and give it a brief shake.
        3. Strain into a highball glass over fresh ice.
        4. Top with the club soda.
        5. Garnish with a mint sprig and lime wheel. Firmly slap the mint sprig on the back of your hand before garnishing; this releases the oils to make the mint more aromatic.`,
  },
  {
    id: 3,
    name: "Sex On The Beach",
    description: `Peachy, tart, and citrusy Sex On The Beach Cocktail is the perfect drink to wind down with after a long day. It's our favorite summer cocktail that makes us feel like we are on the beach no matter where we are. `,
    glassware: "Highball glass",
    alcohol: ["50ml vodka"],
    additional: [
      "ice",
      "25ml peach schnapps",
      "2 oranges, juiced, plus 2 slices to garnish",
      "50ml cranberry juice",
    ],
    mixer: null,
    garnish: ["glacé cherries, to garnish (optional)"],
    instructions: `STEPS:
        1. Fill two tall glasses with ice cubes. Pour the vodka, peach schnapps and fruit juices into a large jug and stir.
        2. Divide the mixture between the two glasses and stir gently to combine. Garnish with the cocktail cherries and orange slices.`,
  },
  {
    id: 4,
    name: "Piña Colada",
    description: `One of the world’s most popular summer cocktails, the Piña Colada tastes refreshing and sweet. It´s super easy to make and perfect to enjoy with friends. It’s no surprise why it’s a favorite in beach bars everywhere!`,
    glassware: "Poco Grande glass",
    alcohol: ["2 ounces light rum"],
    additional: [
      "1 1/2 ounces cream of coconut",
      "1 1/2 ounces pineapple juice",
      "1/2 ounce lime juice, freshly squeezed",
    ],
    mixer: null,
    garnish: [
      "Pineapple leaves or wedges (optional)",
      "Paper umbrella and straw (optional)",
    ],
    instructions: `STEPS:
        1. Add the rum, cream of coconut and pineapple and lime juices to a shaker with ice and shake vigorously for 20 to 30 seconds.
        2. Strain into a chilled Hurricane glass over pebble ice.
        3. Garnish with a pineapple wedge, pineapple leaf, and paper umbrella.
      `,
  },
    {
      id: 5,
      name: "Long Island Iced Tea",
      description:
        `A Long Island iced tea or Long Island ice tea is a type of cocktail typically made with vodka, tequila, light rum, triple sec, gin, and a splash of cola, which gives the drink the same amber hue as iced tea.`,
      glassware: "Collins or Hurricane glass",
      alcohol: ["1/2 fluid ounce vodka", "1/2 fluid ounce rum", "1/2 fluid ounce gin", "1/2 fluid ounce tequila", "1/2 fluid ounce triple sec (orange-flavored liqueur)"],
      additional:
        ["1 fluid ounce cola, or to taste"],
      mixer: "1 fluid ounce sweet and sour mix",
      garnish: ["1 lemon slice "],
      instructions: `STEPS:
        1. Fill a cocktail shaker with ice. 
        2. Pour vodka, rum, gin, tequila, triple sec, and sour mix over ice; cover and shake. 
        3. Pour cocktail into a glass.
        4. Top with splash of cola for color. 
        5. Garnish with a lemon slice.
      `,
    },
  //   {
  //     id: 6,
  //     name: "",
  //     description:
  //       ``,
  //     glassware: "",
  //     alcohol: [],
  //     additional:
  //       [],
  //     mixer: "",
  //     garnish: [],
  //     instructions: ``,
  //   },
  //   {
  //     id: 7,
  //     name: "",
  //     description:
  //       ``,
  //     glassware: "",
  //     alcohol: [],
  //     additional:
  //       [],
  //     mixer: "",
  //     garnish: [],
  //     instructions: ``,
  //   },
  //   {
  //     id: 8,
  //     name: "",
  //     description:
  //       ``,
  //     glassware: "",
  //     alcohol: [],
  //     additional:
  //       [],
  //     mixer: "",
  //     garnish: [],
  //     instructions: ``,
  //   },
  //   {
  //     id: 9,
  //     name: "",
  //     description:
  //       ``,
  //     glassware: "",
  //     alcohol: [],
  //     additional:
  //       [],
  //     mixer: "",
  //     garnish: [],
  //     instructions: ``,
  //   },
  //   {
  //     id: 10,
  //     name: "",
  //     description:
  //       ``,
  //     glassware: "",
  //     alcohol: [],
  //     additional:
  //       [],
  //     mixer: "",
  //     garnish: [],
  //     instructions: ``,
  //   },
  //   {
  //     id: 11,
  //     name: "",
  //     description:
  //       ``,
  //     glassware: "",
  //     alcohol: [],
  //     additional:
  //       [],
  //     mixer: "",
  //     garnish: [],
  //     instructions: ``,
  //   },
  //   {
  //     id: 12,
  //     name: "",
  //     description:
  //       ``,
  //     glassware: "",
  //     alcohol: [],
  //     additional:
  //       [],
  //     mixer: "",
  //     garnish: [],
  //     instructions: ``,
  //   },
  //   {
  //     id: 13,
  //     name: "",
  //     description:
  //       ``,
  //     glassware: "",
  //     alcohol: [],
  //     additional:
  //       [],
  //     mixer: "",
  //     garnish: [],
  //     instructions: ``,
  //   },
];

module.exports = drinks;
