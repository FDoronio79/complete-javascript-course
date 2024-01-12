'use strict';

// assign elements to variables for easier use and reuse
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

// function to remove the hidden attribute from the modal and overlay class
const openModal = () => {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

// function to add the hidden attribute from the modal and overlay class
const closeModal = () => {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

for (let i = 0; i < btnsOpenModal.length; i++)
    btnsOpenModal[i].addEventListener('click', openModal)

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// adding an event listener to the document to check for if a user presses the esc key
// to close the modals
document.addEventListener('keydown', (e) => {
    // console.log(e.key);

    if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeModal();
})