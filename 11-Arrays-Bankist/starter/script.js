'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

/////////////////////////////////////////////////
// Simple Array Methods

/*
let arr = ['a', 'b', 'c', 'd', 'e'];

//slice method
console.log('1', arr.slice((2)));
console.log('2', arr.slice((2, 4)));
console.log(arr.slice((-2)));
console.log(arr.slice((-1)));
console.log(arr.slice());


//splice method
console.log('splice', arr.splice(2));
console.log(arr);

// Reverse
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);

// Concat
const letters = arr.concat(arr2);
console.log(letters);
// equivalent to spread operator
console.log([...arr,...arr2]);
*/

/////////////////////////////////////////////////
// At Method

/*
const arr = [23, 11, 64];
console.log(arr[1]);
console.log(arr.at(1));

// getting last array element
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));
*/

/////////////////////////////////////////////////
// Looping Over Arrays: Foreach

/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements) {
// accessing counter variable
for (const [i, movement] of movements.entries()) {
  if(movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}$`);
  }
}

console.log('---- FOR EACH -----');

movements.forEach((movement, i, array) => {
  if(movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}$`);
  }
})

// Iteration 0: (200) 
// Iteration 1: (450)
// Iteration 2: (-400)
// ...
*/

/////////////////////////////////////////////////
// forEach with Maps and Sets
/*
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach((value, key, map) => {
  console.log(`${key}: ${value}`)
});

// Sets
const currenciesUnique = new Set(['USD', 'EUR', 'GBP']);
console.log(currenciesUnique);
currenciesUnique.forEach((value, _, map) => {
  console.log(`${value}: ${value}`);
});
*/

/////////////////////////////////////////////////
// Data Transformation Map, Filter, and Reduce
/*
// Map

// multiplying everything in an array by 2
const vals = [1, 2, 3, 4];

const vals2 = vals.map((val) => val * 2);

console.log(vals2);

// convert euros to usd in array
const euroToUsd = 1.1;

const movementsUSD = movements.map((mov) => Math.trunc(mov * euroToUsd));

console.log('USD', movementsUSD);
console.log('Euros', movements);


// accessing index and current array like forEach method
const movementsDesc = movements.map((mov, i, arr) => 
// {
//   if(mov > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${mov}`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}$`);
//   }
// }
`Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)}`
)

console.log(movementsDesc);
*/

/////////////////////////////////////////////////
// Filter

/*
// filter for deposits
const deposits = movements.filter((mov) => mov > 0);
console.log(deposits);

const withdrawals = movements.filter((mov) => mov < 0);
console.log("🚀 ~ withdrawals:", withdrawals);
*/

/////////////////////////////////////////////////
// Reduce
/*
// accumulator (acc) -> SNOWBALL
const balance = movements.reduce((acc, curr, i, arr) => {
  console.log(`Iteration ${i}: ${acc}, current movement: ${curr > 0 ? '+' : ''}${curr}`)
  return acc + curr
  }, 0)

console.log('balnace', balance);

// Maxmimum value
const max = movements.reduce((acc, mov) => acc > mov ? acc : mov, movements[0]);

console.log('max', max);

*/

/////////////////////////////////////////////////
// Chaining Methods
/*
const euroToUSD = 1.1;

const total = movements
.filter(mov => mov > 0)
.map(mov => mov * euroToUSD)
.reduce((acc, mov) => acc + mov, 0);

console.log("🚀 ~ total:", total)
*/

/////////////////////////////////////////////////
// Find method

/*
const firstWithdrawal = movements.find(mov => mov < 0);
console.log(firstWithdrawal);
console.log(movements);

const account = accounts.find((acc) => acc.owner === 'Jessica Davis');
console.log("🚀 ~ account:", account)
*/

/////////////////////////////////////////////////
// Some and Every Methods
/*
console.log(movements);

//EQUALITY
console.log(movements.includes(-130));

// CONDITION - some method
const anyDeposits = movements.some((mov) => mov > 0);
console.log(anyDeposits);

// Every method
console.log(movements.every((mov) => mov > 0));
console.log(account4.movements.every((mov) => mov > 0));

// Seperate callback
const deposit = mov => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));
*/

/////////////////////////////////////////////////
// Flat and Flatmap Methods
/*
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log('flat', arr.flat());

const arrDeep = [[[1,2], 3], [4, [5, 6]], 7, 8];
console.log('flat on deep arr', arrDeep.flat(2));

// const accMovements = accounts.map((acc) => acc.movements);
// console.log("🚀 ~ accMovements:", accMovements)

// const allMovements = accMovements.flat();
// console.log("🚀 ~ allMovements:", allMovements)

// const overallBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
// console.log("🚀 ~ overallBalance:", overallBalance)

const overallBalanceChaining = accounts
.map(acc => acc.movements)
.flat()
.reduce((acc, mov) => acc + mov, 0);
console.log("🚀 ~ overallBalanceChaining:", overallBalanceChaining)

//flatMap
const overallBalance2 = accounts
    .flatMap(acc => acc.movements)
    .reduce((acc, mov) => acc + mov, 0);
console.log("🚀 ~ overallBalance2:", overallBalance2)
*/

/////////////////////////////////////////////////
// Sorting Arrays
/*
//  strings
const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owners.sort());
console.log(owners);

// numbers
console.log(movements);

// returns < 0 , A, B (keep order)
// returns > 0, A, B (switch order)
// Ascneding
movements.sort((a, b) => {
  if (a > b) return 1;
  if (a < b) return -1;
});
console.log(movements);

// Descending
movements.sort((a, b) => {
  if (a > b) return -1;
  if (a < b) return 1;
});
console.log(movements);
*/

/////////////////////////////////////////////////
// More Ways of Creating and Filling Arrays

/*
const x = new Array(7);
console.log(x);
x.fill(1, 3, 5);
console.log(x);

// Array.from
const y = Array.from({length: 7}, () => 1);
console.log("🚀 ~ y:", y)

const z = Array.from({length: 7}, (_, i) => i + 1);
console.log("🚀 ~ z:", z)

const diceRolles = Array.from({length: 100}, () => Math.floor(Math.random() * 100  + 1));
console.log("🚀 ~ diceRolles:", diceRolles)

// convert node list to array
labelBalance.addEventListener('click', () => {
  const movementsUI = Array.from(document.querySelectorAll('.movements__value'));
  console.log("🚀 ~ movementsUI:", movementsUI.map(el => el.textContent.replace('€', '')))

})
*/

/////////////////////////////////////////////////
// Project Bankist

const displayMovements = (movements, sort = false) => {
  // remove all child elements
  containerMovements.innerHTML = '';

  // Sort Feature
  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  // insert new child elements
  movs.forEach((mov, i) => {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
    <div class="movements">
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
      <div class="movements__value">${mov}€</div>
    </div>
    `;
    // insert the new child element after the parent element
    containerMovements.insertAdjacentHTML('afterbegin', html);
  })
}
// displayMovements(account1.movements);


/////////////////////////////////////////////////
// Computing User Names

// split the original name stirng into an array, map over the array to get the first character of each part of the name and join to create a new string
const createUsernames = (accs) => {
  accs.forEach((acc) => {
    //create a new property on each object called username
    // take the acc.owner value and split it into an array, map over the array to get the first character of each part
    acc.username = acc.owner
    .toLowerCase()
    .split(' ')
    .map(name => name[0])
    .join('');
  });
};

createUsernames(accounts);
console.log(accounts);

// function to calculate balance and display it in the balance label
const calcPrintBalance = function (acc) {
  acc.balance = acc.movements?.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}€`;
};


// calcPrintBalance(account1.movements);

const calcDisplaySummary = (acc) => {
  const movements = acc.movements;
  const incomes = movements
  .filter(mov => mov > 0)
  .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`

  const out = movements
  .filter(mov => mov < 0)
  .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`

  const interest = movements
  .filter(mov => mov > 0)
  .map(deposit => deposit * acc.interestRate /100)
  .filter(int => int > 1)
  .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`
}

// calcDisplaySummary(account1.movements);

/////////////////////////////////////////////////
// Login Feature

// Event handler
let currAccount;

const updateUI = (acc) => {
      // Display movements
      displayMovements(currAccount.movements);
      // Display balance
      console.log('TEST', currAccount.movements);
      calcPrintBalance(currAccount);
      // Display Summary
      calcDisplaySummary(currAccount);
}

btnLogin.addEventListener('click', (e) => {
  e.preventDefault();
  
  currAccount = accounts.find((acc) => acc.username === inputLoginUsername.value);
  console.log("🚀 ~ btnLogin.addEventListener ~ currAccount:", currAccount)

  if(currAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and welcome message
    labelWelcome.textContent = `Welcome back, ${currAccount?.owner.split(' ')[0]}`;
    containerApp.style.opacity = 100;

    // clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // update UI
    updateUI(currAccount);
  }
})

/////////////////////////////////////////////////
// Implementing Features

// event handler
btnTransfer.addEventListener('click', (e) => {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  // console.log("🚀 ~ btnTransfer.addEventListener ~ amount:", amount)
  const receiverAcc = accounts.find(acc => acc.username === inputTransferTo.value);
  // console.log("🚀 ~ btnTransfer.addEventListener ~ receiverAcc:", receiverAcc)
  inputTransferAmount.value = inputTransferTo.value = '';
  if (amount > 0 && 
    receiverAcc &&
    currAccount.balance >= amount && 
    receiverAcc?.username !== currAccount.username) {
      console.log('working?')
      currAccount.movements.push(-amount);
      receiverAcc.movements.push(amount);
      updateUI(currAccount);
  }
  

})

/////////////////////////////////////////////////
// Loan
btnLoan.addEventListener('click', (e) => {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if ( amount > 0 && currAccount.movements.some((mov) => mov >= amount * .1)) {
    // add movement
    currAccount.movements.push(amount);

    // update UI
    updateUI(currAccount);
  }
  inputLoanAmount.value = '';
});

/////////////////////////////////////////////////
// Deleting/Removing ACC with findIndex method
btnClose.addEventListener('click', (e) => {
  e.preventDefault();
  
  if(inputCloseUsername.value === currAccount.username && Number(inputClosePin.value) === currAccount.pin) {
    const index = accounts.findIndex(acc => acc.username === currAccount.username);
    // console.log("🚀 ~ btnClose.addEventListener ~ index:", index)
    // Delete account
    accounts.splice(index, 1);
    console.log('accounts', accounts);
    // hide UI
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = '';
})

/////////////////////////////////////////////////
// Sort Feature
let sorted = false;
btnSort.addEventListener('click', (e) => {
  e.preventDefault();
  displayMovements(currAccount.movements, !sorted);
  sorted = !sorted;
})

/////////////////////////////////////////////////
// Coding Challenge 1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

/*
const julia1 = [3, 5, 2, 12, 7];
const julia2 = [9, 16, 6, 8, 3];
const kate1 = [4, 1, 15, 8, 3];
const kate2 = [10, 5, 6, 1, 4];

const checkDogs = (dogsJulia, dogsKate) => {
  // 1
  const correctedJulia = dogsJulia.slice(1, dogsJulia.length - 2);
  //2
  const temp = [...correctedJulia, ...dogsKate];
  // 3
  temp.forEach((dogAge, i) => console.log(dogAge >= 3 ? `Dog number ${i + 1} is an adult, and is ${dogAge} years old` : `Dog number ${i + 1} is still a puppy 🐶`));
}

checkDogs(julia1, kate1);
console.log('----------------------------------------------------');
checkDogs(julia2, kate2);
*/

/////////////////////////////////////////////////
// Coding Challenge 2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

/*
const julia = [5, 2, 4, 1, 15, 8, 3];
const kate = [16, 6, 10, 5, 6, 1, 4];


const calcAverageHumanAge = (ages) => {
  // 1
  const humanAges = ages.map((age) => age <= 2 ? 2 * age : 16 + age * 4);
  console.log("🚀 ~ calcAverageHumanAge ~ humanAges:", humanAges)
  //2
  const adults = humanAges.filter((age) => age >= 18);
  console.log("🚀 ~ calcAverageHumanAge ~ adults:", adults)
  // 3
  const averageAge = Math.trunc(adults.reduce((acc, age) => acc + age, 0) / adults.length);
  console.log("🚀 ~ calcAverageHumanAge ~ averageAge:", averageAge)
}

calcAverageHumanAge(julia);
calcAverageHumanAge(kate);
*/

/////////////////////////////////////////////////
// Coding Challenge 3

/* 
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

/*
const test1 = [5, 2, 4, 1, 15, 8, 3];
const test2 = [16, 6, 10, 5, 6, 1, 4];
const calcAverageHumanAge = (ages) => {
  const averageAge = ages
  .map((age) => age <= 2 ? 2 * age : 16 + age * 4)
  .filter((age, i, arr) =>  age >= 18)
  .reduce((acc, curr, i, arr) => acc + curr / arr.length, 0);
  console.log(averageAge);
  return averageAge;
}

calcAverageHumanAge(test1);
calcAverageHumanAge(test2);
*/

///////////////////////////////////////
// Array Methods Practice

// 1
const bankDepositSum = accounts
.flatMap((acc) => acc.movements)
.filter((mov) => mov > 0)
.reduce((acc, curr) => acc + curr, 0);
console.log("🚀 ~ bankDepositSum:", bankDepositSum)


// 2
const numDeposits1000 = accounts
.flatMap((acc) => acc.movements)
//easier way
// .filter((mov) => mov >= 1000)
// .length;
// using reduce
.reduce((count, curr) => curr >= 1000 ? ++count : count, 0);
console.log("🚀 ~ numDeposits1000:", numDeposits1000)

// Prefixed ++ operator
let a = 10;
console.log(++a);
console.log(a);

// 3
const {deposits, withdrawals} = accounts
.flatMap((acc) => acc.movements)
.reduce((sums, curr) => {
  // curr > 0 ?  
  // sums.deposits += curr : sums.withdrawals += curr; 
  // return 
  //refactor
  sums[curr > 0 ? 'deposits' : 'withdrawals'] += curr;
  return sums;
}, 
  {deposits: 0, withdrawals: 0})
console.log(`Depositsm: ${deposits}, \n Withdrawals: ${withdrawals}`)

// 4
// this is a nice title -> This Is a Nice Title
const convertTitleCase = (str) => {
  const capitalize = str => str[0].toUpperCase() + str.slice(1);
  const exceptions = ['a', 'an', 'the', 'but', 'or', 'on', 'in', 'with', 'and'];
  const titleCase = str
  .toLowerCase()
  .split(' ')
  // this map will check if the word is in the exceptions array, if it is then it will return the word else it will capitalize the first letter of the word
  .map((word) => exceptions.includes(word) ? word : capitalize(word))
  .join(' ');

  return capitalize(titleCase);
}

console.log(convertTitleCase('this is a nice title'));
console.log(convertTitleCase('this is a LONG title but not too long'));
console.log(convertTitleCase('and here is another title with an EXAMPLE'));

///////////////////////////////////////
// Coding Challenge #4

/* 
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];

GOOD LUCK 😀
*/

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];

// 1 Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
const recommendedFood = (dog) => dog.weight ** 0.75 * 28;
dogs.forEach((dog) => dog.recommendedFood = recommendedFood(dog));
console.log(dogs);

// 2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
const sarahDog = dogs.find((dog) => dog.owners.includes('Sarah'));
console.log("🚀 ~ sarahDog:", sarahDog)
const tooMuchortooLittle = (dog) => {
  if (dog.curFood > (dog.recommendedFood * 1.1)) {
    return 'too much';
  } else if (dog.curFood < (dog.recommendedFood * 0.90)) {
    return 'too little';
  } else {
    return 'just enough';
  }
}

console.log(`Sarah's dog is eating ${tooMuchortooLittle(sarahDog)}`);

// 3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
const ownersEatTooMuch = dogs
.filter((dog) => dog.curFood > (dog.recommendedFood * 1.1))
.flatMap((dog) => dog.owners);
console.log("🚀 ~ ownersEatTooMuch:", ownersEatTooMuch)

const ownersEatTooLittle = dogs
.filter((dog) => dog.curFood < (dog.recommendedFood * 0.90))
.flatMap((dog) => dog.owners);
console.log("🚀 ~ ownersEatTooLittle:", ownersEatTooLittle)
// 4 Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much! ${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);

// 5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
console.log(dogs.some((dog) => dog.curFood === dog.recommendedFood));

// 6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
console.log(dogs.some((dog) => dog.curFood <= (dog.recommendedFood * 1.1) && dog.curFood >= (dog.recommendedFood * 0.90)));

// 7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
const okayAmountOfFood = dogs.filter((dog) => dog.curFood <= (dog.recommendedFood * 1.1) && dog.curFood >= (dog.recommendedFood * 0.90));
console.log("🚀 ~ okayAmountOfFood:", okayAmountOfFood)

// 8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)
const dogsSorted = dogs.slice().sort((a, b) => a.recommendedFood - b.recommendedFood);
console.log("🚀 ~ dogsSorted:", dogsSorted)
