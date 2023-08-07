const el = {};
const timerElement = document.getElementById("timer");
const startbtn = document.getElementById("startbtn");

function startTimer() {
    let seconds = 30;
    let timer = setInterval(() => {
        timerElement.innerHTML = '00:' + seconds;
        seconds--;
        if (seconds < 0) {
            clearInterval(timer);
        }
    }, 1000);
}

/** Page elements used are set up here */
function prepareHandles() {
    el.startbtn = document.querySelector('#startbtn');
}

/** Connects listeners for button clicks */
function eventListeners() {
    el.startbtn.addEventListener('click', startTimer);
}

prepareHandles();
eventListeners();