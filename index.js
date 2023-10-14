'use strict';

/** Page elements used are set up here */
const timerElement = document.querySelector('#timer');
const startBtn = document.querySelector('#startbtn');
const incrementBtn = document.querySelector('#incrementbtn');
const decrementBtn = document.querySelector('#decrementbtn');
const buttonsContainer = document.querySelector('#buttons');

/** Buttons created in JavaScript */
const pauseBtn = document.createElement('button');
pauseBtn.style.display = "none";
pauseBtn.textContent = "Pause";
pauseBtn.classList.add('start-btn');
buttonsContainer.appendChild(pauseBtn);

const resumeBtn = document.createElement('button');
resumeBtn.style.display = "none";
resumeBtn.textContent = "Resume";
resumeBtn.classList.add('start-btn');
buttonsContainer.appendChild(resumeBtn);

/** Sets the timers starting values */
let minutes = 25;
let seconds = 0 + "0";
timerElement.textContent = minutes + ':' + seconds;

let setCounter = 0;
let timerInterval;

/** Starts the timer */
function startTimer() {
    let timer = setInterval(() => {

        seconds--;

        if (seconds < 0) {
            seconds = 59;
            minutes--;
        }

        const currentMinutes = minutes < 10 ? "0" + minutes : minutes;
        const currentSeconds = seconds < 10 ? "0" + seconds : seconds;
        timerElement.textContent = currentMinutes + ":" + currentSeconds;

        if (minutes === 0 && seconds === 0) {
            clearInterval(timer);
            setCounter++;
        }
    }, 1000);
}

/** Pauses the timer */
// function pauseTimer() {
//     clearInterval(timerInterval);
//     timerInterval = undefined;

//     resumeBtn.style.display = "inline";
// }

/** Resumes the timer */
// function resumeTimer() {
//     if (!timerInterval) {
//         timerInterval = setInterval(() => {
//             startTimer();
//         }, 1000);
//     }

//     pauseBtn.style.display = "inline";
// }

/** Increments timer */
function incrementTimer() {
    minutes += 5;
    if (minutes > 60) { minutes = 60; }

    timerElement.textContent = minutes + ':00';
}

/** Decrements timer */
function decrementTimer() {
    minutes -= 5;
    if (minutes < 15) { minutes = 15; }

    timerElement.textContent = minutes + ':00';
}

/** Removes increment and decrement buttons */
function hideButtons() {
    startBtn.style.display = "none";
    incrementBtn.style.display = "none";
    decrementBtn.style.display = "none";
}

/** Connects listeners for button clicks */
function eventListeners() {
    startBtn.addEventListener('click', () => {
        timerElement.textContent = minutes + ':' + seconds;
        pauseBtn.style.display = "inline";

        startTimer();
        hideButtons();
    });
    
    pauseBtn.addEventListener('click', () => {
        pauseBtn.style.display = "none";
        // function to pause timer goes here
        resumeBtn.style.display = "inline";
    });
    
    resumeBtn.addEventListener('click', () => {
        resumeBtn.style.display = "none";
        // function to resume timer goes here
        pauseBtn.style.display = "inline";
    });

    incrementBtn.addEventListener('click', incrementTimer);
    decrementBtn.addEventListener('click', decrementTimer);
}

eventListeners();