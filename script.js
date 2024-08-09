const fruitBaskets = {
  red: [
    { name: "Apple", isCitrus: false },
    { name: "Strawberry", isCitrus: false },
    { name: "Raspberry", isCitrus: false },
    { name: "Cherry", isCitrus: false },
    { name: "Red Grapes", isCitrus: false },
  ],
  yellow: [
    { name: "Banana", isCitrus: false },
    { name: "Mango", isCitrus: false },
    { name: "Pineapple", isCitrus: true },
    { name: "Cantaloupe", isCitrus: false },
    { name: "Lemon", isCitrus: true },
  ],
  green: [
    { name: "Lime", isCitrus: true },
    { name: "Kiwi", isCitrus: false },
    { name: "Avocado", isCitrus: false },
    { name: "Green Apple", isCitrus: false },
    { name: "Green Grapes", isCitrus: false },
  ],
  blue: [
    { name: "Blueberry", isCitrus: false },
    { name: "Blackberry", isCitrus: false },
    { name: "Blue Grape", isCitrus: false },
    { name: "Blue Plum", isCitrus: false },
    { name: "Elderberry", isCitrus: false },
  ],
  orange: [
    { name: "Orange", isCitrus: true },
    { name: "Peach", isCitrus: false },
    { name: "Tangerine", isCitrus: true },
    { name: "Papaya", isCitrus: false },
    { name: "Apricot", isCitrus: false },
  ],
  purple: [
    { name: "Grapes", isCitrus: false },
    { name: "Plum", isCitrus: false },
    { name: "Elderberry", isCitrus: false },
    { name: "Blackberry", isCitrus: false },
    { name: "Purple Grape", isCitrus: false },
  ],
};

// Initialize arrays for sorting
const fruitBank = [];
const redFruits = [];
const yellowFruits = [];
const greenFruits = [];
const blueFruits = [];
const orangeFruits = [];
const purpleFruits = [];
const citrusFruits = [];
const nonCitrusFruits = [];

// Populate the fruit bank from the fruit baskets
Object.values(fruitBaskets).forEach((basket) => {
  fruitBank.push(...basket);
});

