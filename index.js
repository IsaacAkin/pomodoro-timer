'use strict';

/** Page elements used are set up here */
const timerElement = document.querySelector('#timer');
const startBtn = document.querySelector('#startbtn');
const incrementBtn = document.querySelector('#incrementbtn');
const decrementBtn = document.querySelector('#decrementbtn');
const functionButtons = document.querySelector('#function-buttons');

/** Buttons created in JavaScript */
const pauseBtn = document.createElement('button');
pauseBtn.style.display = "none";
pauseBtn.textContent = "Pause";
pauseBtn.classList.add('start-btn');
functionButtons.appendChild(pauseBtn);

const resumeBtn = document.createElement('button');
resumeBtn.style.display = "none";
resumeBtn.textContent = "Resume";
resumeBtn.classList.add('start-btn');
functionButtons.appendChild(resumeBtn);

const resetBtn = document.createElement('button');
resetBtn.style.display = "none";
resetBtn.textContent = "Reset";
resetBtn.classList.add('start-btn');
functionButtons.appendChild(resetBtn);

/** Sets the timers starting values */
let minutes = 25;
let seconds = 0 + "0";
timerElement.textContent = minutes + ':' + seconds;

let timer;

/** Starts the timer */
function startTimer() {
    timer = setInterval(() => {

        seconds--;

        if (seconds < 0) {
            seconds = 59;
            minutes--;
        }

        // adds a 0 before the seconds or minutes if below 10
        const currentMinutes = minutes < 10 ? "0" + minutes : minutes;
        const currentSeconds = seconds < 10 ? "0" + seconds : seconds;
        timerElement.textContent = currentMinutes + ":" + currentSeconds;

        if (minutes === 0 && seconds === 0) {
            resetTimer();
        }
    }, 1000);
}

/** Resets the timer to its default values and apperance */
function resetTimer() {
    clearInterval(timer);
    
    minutes = 25;
    seconds = 0 + "0";
    timerElement.textContent = minutes + ':' + seconds;

    startBtn.style.display = "inline";
    incrementBtn.style.display = "inline";
    decrementBtn.style.display = "inline";
    pauseBtn.style.display = "none";
    resumeBtn.style.display = "none";
    resetBtn.style.display = "none";
}

/** Increments timer */
function incrementTimer() {
    minutes += 5;
    if (minutes > 60) { minutes = 60; }

    timerElement.textContent = minutes + ':00';
}

/** Decrements timer */
function decrementTimer() {
    minutes -= 5;
    if (minutes < 5) { minutes = 5; }

    timerElement.textContent = minutes + ':00';
}

/** Connects listeners for button clicks */
function eventListeners() {
    startBtn.addEventListener('click', () => {
        // hides buttons used for setting the timer
        startBtn.style.display = "none";
        incrementBtn.style.display = "none";
        decrementBtn.style.display = "none";

        // reveals pause and reset buttons
        pauseBtn.style.display = "inline";
        resetBtn.style.display = "inline";

        startTimer();
    });
    
    pauseBtn.addEventListener('click', () => {
        pauseBtn.style.display = "none";
        resumeBtn.style.display = "inline";
        
        // pauses the timer
        clearInterval(timer);
    });
    
    resumeBtn.addEventListener('click', () => {
        resumeBtn.style.display = "none";
        pauseBtn.style.display = "inline";
        
        // continues the timer from where it's paused
        startTimer();
    });

    resetBtn.addEventListener('click', () => {
        resetTimer();
    });

    incrementBtn.addEventListener('click', incrementTimer);
    decrementBtn.addEventListener('click', decrementTimer);
}

eventListeners();