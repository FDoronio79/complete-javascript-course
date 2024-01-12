'use strict';

/* console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number'
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random()*20) + 1;
// const generateSecNum = () => {
//     let secretNumber = Math.trunc(Math.random() * 20) + 1;
//     return secretNumber
// }

let score = 20;
let highScore = 0;

const changeMessage = (message) => {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    // if no guess
    if (!guess) {
        // document.querySelector('.message').textContent = '⛔️ No number!';
        changeMessage('⛔️ No number!');
        // when player wins
    } else if (guess === secretNumber) {
        // document.querySelector('.message').textContent = '🎉 Correct Number!';
        changeMessage('🎉 Correct Number!');
        // changing the background to green when player wins
        document.querySelector('body').style.backgroundColor = '#60b347';
        // changing the width of the number class
        document.querySelector('.number').style.width = '30rem';

        document.querySelector('.number').textContent = secretNumber;

        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
        // guess is too high
    } else if (guess !== secretNumber) {
        if (score > 0) {
            // document.querySelector('.message').textContent = guess > secretNumber ? '📈 number too high' : '📉 number too low';
            changeMessage(guess > secretNumber ? '📈 number too high' : '📉 number too low');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            // document.querySelector('.message').textContent = '💥 You lost the game';
            changeMessage('💥 You lost the game');
        }
    }
    //  else if (guess > secretNumber) {
    //     if (score > 0) {
    //         document.querySelector('.message').textContent = '📈 number too high';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = '💥 You lost the game'
    //     }
    //     // guess too low
    // } else if (guess < secretNumber) {
    //     if (score > 0) {
    //         document.querySelector('.message').textContent = '📉 number too low';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = '💥 You lost the game'
    //     }
    // }
});


///////////////////////////////////////
// Coding Challenge #1

/* 
Implement a game rest functionality, so that the player can make a new guess! Here is how:

1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and secretNumber variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15rem)

GOOD LUCK 😀
*/

document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    
    // document.querySelector('.message').textContent = 'Start guessing...';
    changeMessage('Start guessing...');
    document.querySelector('.number').textContent = '?';
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
})