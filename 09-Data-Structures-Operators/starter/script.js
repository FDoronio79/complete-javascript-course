'use strict';

// // Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '22:00', address = 'Some Address' }) {
    console.log(`these are the pieces of the object: ${starterIndex}, ${mainIndex}, ${time}, ${address}`);
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`Ing1 ${ing1}, ing2 ${ing2}, ing3 ${ing3}`)
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient, otherIngredients);
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'test',
//   mainIndex: 2,
//   starterIndex: 2,
// })
// // using default values 
// restaurant.orderDelivery({
//   mainIndex: 2,
// })

// const arr = [2, 3, 4];
// const [x, y, z] = arr;
// // console.log(x, y, z);

// // skips 'Pizzeria' and assigns second to 'Vegetarian' instead
// let [first, ,second] = restaurant.categories;
// // console.log(first, second);

// // swap the variables using destructuring
// [first, second] = [second, first];
// // console.log(first, second);

// const [starter, main] = restaurant.order(2, 0);
// // console.log(starter, main);

// // Nested destructuring
// const nested = [2, 4, [5, 6]];
// // const [i, , j] = nested;
// // console.log(i, j);
// const [i, , [j, k]] = nested;
// // console.log(i, j, k);

// // Default values
// const [p = 1, q = 1, r = 1] = [8, 9];
// // console.log(p, q, r);

// ///////////////////////////////////////
// // Object Destructuring
const {name, openingHours, categories} = restaurant;
// // console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags
// } = restaurant;

// const {
//   menu = [],
//   starterMenu: starters = []
// } = restaurant;
// // console.log(menu, starters)

// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };

// ({a, b} = obj);
// // console.log(a, b);

// // Nested Objects
// const {
//   fri: { open, close }
// } = openingHours;
// // console.log(open, close);

// ///////////////////////////////////////
// // Spread Operator
// // old way of copying an array
// const arr2 = [4, 5, 6];
// const badNewArr = [1, 2, 3, arr2[0], arr2[1], arr2[2]];
// // console.log('bad copy', badNewArr);

// //using spread operator
// const newArr = [1, 2, 3, ...arr2];
// // console.log('spread', newArr)

// //copy array
// const mainMenuCopy = [...restaurant.mainMenu];

// //join 2 arrays
// const fullMenu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// // console.log(fullMenu)

// const str = 'Jonas';
// const letters = [...str, ' ', 'S.'];
// // console.log(letters);
// // console.log(...str);

// const ingredients = [
//   // prompt('Let\'s make pasta! ingredient 1?'),
//   // prompt('ingredient 2'),
//   // prompt('ingredient 3'),
// ]
// console.log(ingredients);

// restaurant.orderPasta(...ingredients);

// const newRestaurant = {
//   foundedIn: 1998,
//   ...restaurant,
//   founder: 'Linguinie'
// }

// const restaurantCopy = { ...restaurant }
// restaurantCopy.name = 'New Name';

// console.log(restaurant.name);
// console.log(newRestaurant.name)
// console.log(restaurantCopy.name)


///////////////////////////////////////
// Rest Pattern and Paramters

// // 1 Destructuring
// //spread, because on RIGHT side of =
//   const arr3 = [1, 2, ...[3, 4]];

// // REST, because on LEFT side of =
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// // console.log(a, b, others);

// // uising rest with spread operator
// const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
// // console.log(pizza, risotto, otherFood);

// //rest with objects
// const { sat, ...weekdays } = restaurant.openingHours;
// // console.log(weekdays);

// // 2 Functions

// // using REST to allow any amount of parameters to the function
// const add = function(...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   console.log(sum);
// }

// add(2, 3);
// add(5, 3, 7);
// add(1, 2, 3, 4,5);

// // using spread operator with the add function to unpack the x array
// const x = [23, 5, 7];
// add(...x);

// restaurant.orderPizza('peparoni', 'onions', 'tomato', 'sausage');
// restaurant.orderPizza('pepperoni');

// restaurant.numGuests = 0;
// const guest = restaurant.numGuests || 10;
// // logs 10 if numGuests is falseyl;

// //using nullish operator
// // nullishing values: null and undefined (NOT 0 or '') this means 0 and '' are considered truthy
// const guest2 = restaurant.numGuests ?? 10;
// // logs 0

// const rest1 = {
//   name: 'Capri',
//   numGuests: 20,
// };

// const rest2 = {
//   name: 'La Piazza',
//   owner: 'Bob',
// };

// // rest1.numGuests = rest1.numGuests || 10;
// // rest2.numGuests = rest1.numGuests || 10;

// // rest1.numGuests ||= 10;
// // rest2.numGuests ||= 10;

// // nullish assignment operator (null or undefined)
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// // rest1.owner = rest1.owner && '<ANONYMOUS>';
// // rest2.owner = rest2.owner && '<ANONYMOUS>';

// rest1.owner &&= '<ANONYMOUS>';
// rest2.owner &&= '<ANONYMOUS>';

///////////////////////////////////////
// Looping over Objects

// Property keys
const properties = Object.keys(openingHours);
console.log(properties);

for (const day of Object.keys(openingHours)) {
  console.log(day);
}

// Property Values
const values = Object.values(openingHours);

// Entries Object
const entries = Object.entries(openingHours);

for (const [day, {open, close}] of entries) {
  console.log(`On ${day} we open at ${open} and close at ${close}`);
}

///////////////////////////////////////
// Sets

// creating a new set
const orderSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pasta']);

// using sets to remove duplicates and add to an array
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];

const uniqueStaff = [...new Set(staff)]

///////////////////////////////////////
// Maps
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));

rest.set('categories', ['Italian', 'Pizzaria',
'Vegetarian', 'Organic'])
.set('open', 11)
.set('close', 23)
.set(true, 'We are open')
.set(false, 'We are closed')

console.log(rest.get('name'))
console.log(rest.get(true))

const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')))

console.log(rest.has('categories'))
rest.delete(2);
console.log(rest);

// populating a new map without using the set method
const question = new Map([
  ['questoion', 'What is the best programming in the worthld?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct'],
  [false, 'Try again!']
]);

console.log(question);

//conver object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));

console.log(hoursMap);

// iterating through a map
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}

// const answer = Number(prompt('Your answer'));
// console.log(answer);

// // comparing answer to retrieve if it is correct or not from the map
// console.log(question.get(question.get('correct') === answer));

///////////////////////////////////////
// Strings Part 1


///////////////////////////////////////
// Destructuring Arrays Assignment
const books = [
  {
    title: 'Algorithms',
    author: ['Robert Sedgewick', 'Kevin Wayne'],
    publisher: 'Addison-Wesley Professional',
    publicationDate: '2011-03-24',
    edition: 4,
    keywords: ['computer science', 'programming', 'algorithms', 'data structures', 'java', 'math', 'software', 'engineering'],
    pages: 976,
    format: 'hardcover',
    ISBN: '9780321573513',
    language: 'English',
    programmingLanguage: 'Java',
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.41,
        ratingsCount: 1733,
        reviewsCount: 63,
        fiveStarRatingCount: 976,
        oneStarRatingCount: 13
      }
    },
    highlighted: true
  },
  {
    title: 'Structure and Interpretation of Computer Programs',
    author: ['Harold Abelson', 'Gerald Jay Sussman', 'Julie Sussman (Contributor)'],
    publisher: 'The MIT Press',
    publicationDate: '2022-04-12',
    edition: 2,
    keywords: ['computer science', 'programming', 'javascript', 'software', 'engineering'],
    pages: 640,
    format: 'paperback',
    ISBN: '9780262543231',
    language: 'English',
    programmingLanguage: 'JavaScript',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.36,
        ratingsCount: 14,
        reviewsCount: 3,
        fiveStarRatingCount: 8,
        oneStarRatingCount: 0
      }
    },
    highlighted: true
  },
  {
    title: 'Computer Systems: A Programmer\'s Perspective',
    author: ['Randal E. Bryant', 'David Richard O\'Hallaron'],
    publisher: 'Prentice Hall',
    publicationDate: '2002-01-01',
    edition: 1,
    keywords: ['computer science', 'computer systems', 'programming', 'software', 'C', 'engineering'],
    pages: 978,
    format: 'hardcover',
    ISBN: '9780130340740',
    language: 'English',
    programmingLanguage: 'C',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 1010,
        reviewsCount: 57,
        fiveStarRatingCount: 638,
        oneStarRatingCount: 16
      }
    },
    highlighted: true
  },
  {
    title: 'Operating System Concepts',
    author: ['Abraham Silberschatz', 'Peter B. Galvin', 'Greg Gagne'],
    publisher: 'John Wiley & Sons',
    publicationDate: '2004-12-14',
    edition: 10,
    keywords: ['computer science', 'operating systems', 'programming', 'software', 'C', 'Java', 'engineering'],
    pages: 921,
    format: 'hardcover',
    ISBN: '9780471694663',
    language: 'English',
    programmingLanguage: 'C, Java',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 3.9,
        ratingsCount: 2131,
        reviewsCount: 114,
        fiveStarRatingCount: 728,
        oneStarRatingCount: 65
      }
    }
  },
  {
    title: 'Engineering Mathematics',
    author: ['K.A. Stroud', 'Dexter J. Booth'],
    publisher: 'Palgrave',
    publicationDate: '2007-01-01',
    edition: 14,
    keywords: ['mathematics', 'engineering'],
    pages: 1288,
    format: 'paperback',
    ISBN: '9781403942463',
    language: 'English',
    programmingLanguage: null,
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.35,
        ratingsCount: 370,
        reviewsCount: 18,
        fiveStarRatingCount: 211,
        oneStarRatingCount: 6
      }
    },
    highlighted: true
  },
  {
    title: 'The Personal MBA: Master the Art of Business',
    author: 'Josh Kaufman',
    publisher: 'Portfolio',
    publicationDate: '2010-12-30',
    keywords: ['business'],
    pages: 416,
    format: 'hardcover',
    ISBN: '9781591843528',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.11,
        ratingsCount: 40119,
        reviewsCount: 1351,
        fiveStarRatingCount: 18033,
        oneStarRatingCount: 1090
      }
    }
  },
  {
    title: 'Crafting Interpreters',
    author: 'Robert Nystrom',
    publisher: 'Genever Benning',
    publicationDate: '2021-07-28',
    keywords: ['computer science', 'compilers', 'engineering', 'interpreters', 'software', 'engineering'],
    pages: 865,
    format: 'paperback',
    ISBN: '9780990582939',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.7,
        ratingsCount: 253,
        reviewsCount: 23,
        fiveStarRatingCount: 193,
        oneStarRatingCount: 0
      }
    }
  },
  {
    title: 'Deep Work: Rules for Focused Success in a Distracted World',
    author: 'Cal Newport',
    publisher: 'Grand Central Publishing',
    publicationDate: '2016-01-05',
    edition: 1,
    keywords: ['work', 'focus', 'personal development', 'business'],
    pages: 296,
    format: 'hardcover',
    ISBN: '9781455586691',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.19,
        ratingsCount: 144584,
        reviewsCount: 11598,
        fiveStarRatingCount: 63405,
        oneStarRatingCount: 1808
      }
    },
    highlighted: true
  }
];

// 1. Destructure the books array into two variables called firstBook and secondBook.
const [firstBook, secondBook] = books;
// console.log(firstBook, secondBook);

//2. Destructure the books array into a variable called thirdBook. You must skip the first two books.
const [, , thirdBook] = books;
// console.log(thirdBook);

// 3. Below is the nested ratings array that contains two other arrays. Destructure the nested ratings arrays into two variables 
// called rating and ratingsCount. In the result of your destructuring, the ratings variable should store a number 4.19, 
// and the ratingsCount variable should store a number 144584.
const ratings = [['rating', 4.19], ['ratingsCount', 144584]];
const [[, rating], [, ratingsCount]] = ratings;
// console.log(rating, ratingsCount);

// 4. Below is the ratingStars array. Destructure it into three variables called fiveStarRatings, oneStarRatings
// and threeStarRatings. Assign the threeStarRatings variable with a default value of 0.
const ratingStars = [63405, 1808];
const [fiveStarRatings = 0, oneStarRatings = 0, threeStarRatings = 0] = ratingStars;
// console.log(fiveStarRatings, oneStarRatings, threeStarRatings)

///////////////////////////////////////
// Coding Challenge #1

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/


// 1. Create one player array for each team (variables 'players1' and 'players2')
const players1 = [...game.players[0]];
const players2 = [...game.players[1]];
// console.log('p1', players1, 'p2', players2);

// 2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);

// 3. Create an array 'allPlayers' containing all players of both teams (22 players)
const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final)

// 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
const {team1, x: draw, team2} = game.odds;
// console.log(team1, draw, team2);

// 6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
const printGoals = function(...players) {
  // console.log(players);
  // console.log(`${players.length} goals were scored`);
}

printGoals(...game.scored);

// // 7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.
// team1 < team2 && console.log('Team 1 is more likely to win');
// team2 < team1 && console.log('Team 2 is more likely to win');


///////////////////////////////////////
// Coding Challenge #2

/* 
Let's continue with our football betting app!
GOOD LUCK 😀
*/

// 1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
const test = game.scored.entries();
for (const [idx, player] of test) {
  console.log(`Goal ${idx + 1}: ${player}`)
};

// 2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
let sum = 0;
const gameOdds = Object.values(game.odds);
console.log(gameOdds);
for (const num of gameOdds) {
  sum += num;
}
console.log(sum / gameOdds.length);
// 3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
//       Odd of victory Bayern Munich: 1.33
//       Odd of draw: 3.25
//       Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉
const gameOddsEntries = Object.entries(game.odds);
for (const [team, odd] of gameOddsEntries) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr}: ${odd}`)
}
// BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
//       {
//         Gnarby: 1,
//         Hummels: 1,
//         Lewandowski: 2
//       }

const scores = {};
for (const player of game.scored) {
  scores[player] ? scores[player]++ : scores[player] = 1;
}
console.log(scores);

///////////////////////////////////////
// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

// 1. Create an array 'events' of the different game events that happened (no duplicates)
const events = [...new Set(gameEvents.values())]
console.log(events);

// 2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
gameEvents.delete(64);
console.log(gameEvents);

// 3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
console.log(`An event happened, on average, every ${90 / gameEvents.size} minutes`);

// 4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
//       [FIRST HALF] 17: ⚽️ GOAL
for (const [min, event] of gameEvents) {
  const half = min < 45 ? 'FIRST' : 'SECOND';
  console.log(`${half} HALF ${min}: ${event}`)
}