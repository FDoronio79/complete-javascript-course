'use strict';

///////////////////////////////////////
// Default Parameters
/*
const bookings = [];

const createBooking = function(flightNum, numPassengers = 1, price = 199 * numPassengers) {
    // ES5
    numPassengers = numPassengers || 1;
    price = price || 199;

    const booking = {
        flightNum,
        numPassengers,
        price
    }
    console.log(booking);
    bookings.push(booking);
}

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', undefined, 1000);
*/

///////////////////////////////////////
// Passing Arguments Value and Reference
/*

const flight = 'LH234';

const jonas = {
    name: 'Jonas',
    passport: 31245121323
}


const checkIn = function(flightNum, passenger) {
    flightNum = 'LH999';
    passenger.name = 'Mr. ' + passenger.name;

    if(passenger.passport === 31245121323) {
        console.log('Check in');
    } else {
        console.log('Check in failed');
    }
}

checkIn(flight, jonas);
console.log("🚀 ~ flight:", flight);
console.log("🚀 ~ jonas:", jonas);


const newPassport = function(person) {
    person.passport = Math.trunc(Math.random ()* 100000000000000000);
}

newPassport(jonas);
checkIn(flight, jonas);

*/

///////////////////////////////////////
// Higher Order Functions
/*
const oneWord = function(str) {
    return str.replace(/ /g, '').toLowerCase();
}

const upperFirstWord = function(str) {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
}

// Higher-order function
const transformer = function(str, fn) {
    console.log(`Original string: ${str}`)
    console.log(`Transformed string: ${fn(str)}`)
    console.log(`Transformed by: ${fn.name}`)
}

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);
*/

///////////////////////////////////////
// Functions Returning Functions
/*
    const greet = function(greeting) {
        return function(name) {
            console.log(`${greeting} ${name}`);
        }
    };

    const greeterHey = greet('Hey');
    greeterHey('Jonas');
    greeterHey('Steven')

    greet('Hello')('Jonas');

    // Challenge refactor to arrow functions
    const greet2 = (greeting) => (name) => {
        console.log(`${greeting} ${name}`)
    };

    greet2('Hello')('Jonas');
*/

///////////////////////////////////////
// The Call and Apply Methods
/* 
const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    book(flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline} flgiht ${this.iataCode} ${flightNum}`);
        this.bookings.push({flight: `${this.iataCode}${flightNum}, ${name}`})
    },
};

lufthansa.book(239, 'Filamer Doronio');
lufthansa.book(635, 'John Smit');

console.log(lufthansa.bookings);

const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
    
}

const book = lufthansa.book;
book.call(eurowings, 23, 'Robbie')
console.log(eurowings);

const swissAirlines = {
    airline: 'Swiss Airlines',
    iataCode: 'LX',
    bookings: [],
}

book.call(swissAirlines, 583, 'Mary Cooper')

// Apply method
const flgihtData = [583, 'George Cooper'];
book.apply(swissAirlines, flgihtData);
console.log(swissAirlines);

book.call(swissAirlines, ...flgihtData);
*/

///////////////////////////////////////
// The Call and Apply Methods