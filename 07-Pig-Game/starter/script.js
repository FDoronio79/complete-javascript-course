'use strict';

// using the querySelector method to get the element with the id score--0
const score0El = document.querySelector('#score--0');
// using the getElementById method to get the element with the id score--1
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// starting conditions
let scores, currScore, activePlayer, playing

const init = () => {
    score0El.textContent = 0;
    score1El.textContent = 0;
    diceEl.classList.add('hidden');

    scores = [0, 0];
    currScore = 0;
    activePlayer = 0;
    playing = true;

    score0El.textContent = 0;
    score1El.textContent = 0;
    diceEl.classList.add('hidden');
    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');

}
init();

const switchPlayer = () => {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currScore = 0;
    player0El.classList.toggle('player--active')
    player1El.classList.toggle('player--active')
}

//ROlling dice functionality
btnRoll.addEventListener('click', () => {
    if (playing) {
        // 1. Generate a random dice roll
        const dice = Math.trunc(Math.random() * 6) + 1;
        // console.log(dice);

        // 2. Display dice
        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${dice}.png`;

        // 3. Check for rolled 1: if true, switch to next player
        if (dice !== 1) {
            // Add dice val to current score
            currScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent = currScore;
        } else {
            // switch to next player
            // document.getElementById(`current--${activePlayer}`).textContent = 0;
            // activePlayer = activePlayer === 0 ? 1 : 0;
            // currScore = 0;
            // player0El.classList.toggle('player--active')
            // player1El.classList.toggle('player--active')
            switchPlayer();
        }
    }
})

btnHold.addEventListener('click', () => {
    if (playing) {
        // 1. Add current score to active player's score
        scores[activePlayer] += currScore;
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

        // 2. Check if player's score is  >= 100
        if (scores[activePlayer] >= 20) {
            //Finish game
            playing = false;
            diceEl.classList.add('hidden')
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        } else {
            // 3. Switch to the next player
            switchPlayer();
        }
    }
})

document.querySelector('.btn--new').addEventListener('click', init)