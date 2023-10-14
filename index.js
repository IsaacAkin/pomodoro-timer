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
let seconds = 59;
timerElement.textContent = minutes + ':00';

/** Starts the timer on button click */
function startTimer() {
    startBtn.textContent = 'Pause';
    let timer = setInterval(() => {

        // Adds 0 in front of the minute and second values if they go below 10 
        timerElement.textContent = minutes + ':' + seconds;
        if (minutes < 10 && seconds < 10) {
            timerElement.textContent = "0" + minutes + ":0" + seconds;
        } else if (minutes < 10) {
            timerElement.textContent = "0" + minutes + ":" + seconds;
        } else if (seconds < 10){
            timerElement.textContent = minutes + ":0" + seconds;
        }

        // Decrements the seconds each second. Once seconds reaches 0, 
        // minutes is decremented by 1 and seconds goes back to 59
        seconds--
        if (seconds === 0) {
            minutes--
            seconds = 59;
            if (seconds < 0) {
                clearInterval(timer);
            }
        }

        // Timer stops once minutes equal 0
        if (minutes < 0) {
            clearInterval(timer);
        }
    }, 1000);
}

/** Increments timer on button click */
function incrementTimer() {
    minutes += 5;
    if (minutes > 50) {
        minutes = 50;
    }
    timerElement.textContent = minutes + ':00';
}

/** Decrements timer on button click */
function decrementTimer() {
    minutes -= 5;
    if (minutes < 25) {
        minutes = 25;
    }
    timerElement.textContent = minutes + ':00';
}

/** Hides buttons once the timer has started */
function hideButtons() {
    startBtn.style.display = "none";
    incrementBtn.style.display = "none";
    decrementBtn.style.display = "none";
}

/** Connects listeners for button clicks */
function eventListeners() {
    el.startBtn.addEventListener('click', () => {
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

    el.incrementBtn.addEventListener('click', incrementTimer);
    el.decrementBtn.addEventListener('click', decrementTimer);
}

prepareHandles();
eventListeners();