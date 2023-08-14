const el = {};
const timerElement = document.querySelector('#timer');
const startBtn = document.querySelector('#startbtn');
const incrementBtn = document.querySelector('#incrementbtn');
const decrementBtn = document.querySelector('#decrementbtn');

timerElement.textContent = '00:30';

function startTimer() {
    let seconds = 30;
    let timer = setInterval(() => {
        timerElement.textContent = '00:' + seconds;
        seconds--;
        if (seconds < 0) {
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

function changeToPause() {
    startBtn.textContent = 'Pause';
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
        changeToPause()
    });
    el.incrementBtn.addEventListener('click', incrementTimer);
    el.decrementBtn.addEventListener('click', decrementTimer);
}

prepareHandles();
eventListeners();