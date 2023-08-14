const el = {};
const timerElement = document.querySelector('#timer');
const startBtn = document.querySelector('#startbtn');

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

function changeToPause() {
    startBtn.textContent = 'Pause';
}

/** Page elements used are set up here */
function prepareHandles() {
    el.startBtn = document.querySelector('#startbtn');
}

/** Connects listeners for button clicks */
function eventListeners() {
    el.startBtn.addEventListener('click', () => {
        startTimer(); 
        changeToPause()
    });
}

prepareHandles();
eventListeners();