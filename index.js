const el = {};
const timerElement = document.querySelector('#timer');
const startBtn = document.querySelector('#startbtn');
const incrementBtn = document.querySelector('#incrementbtn');
const decrementBtn = document.querySelector('#decrementbtn');

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

/** Removes increment and decrement buttons once the timer has started */
function removeButtons() {
    incrementBtn.remove();
    decrementBtn.remove();
}

/** Page elements used are set up here */
function prepareHandles() {
    el.startBtn = document.querySelector('#startbtn');
    el.incrementBtn = document.querySelector('#incrementbtn');
    el.decrementBtn = document.querySelector('#decrementbtn');
}

/** Connects listeners for button clicks */
function eventListeners() {
    el.startBtn.addEventListener('click', () => {
        startTimer();
        removeButtons();
    });
    el.incrementBtn.addEventListener('click', incrementTimer);
    el.decrementBtn.addEventListener('click', decrementTimer);
}

prepareHandles();
eventListeners();