const startbut = document.querySelector('.start');
const pausebut = document.querySelector('.pause');
const resetbut = document.querySelector('.reset');
const lap = document.querySelector('.lap');
const laps = document.querySelector('.laps');

function print(str) {
    document.querySelector('.timer').innerHTML = str;
}

function timeToString(time) {
    const diffHrs = time / 3600000;
    const hh = Math.floor(diffHrs);
    const diffmm = (diffHrs - hh) * 60;
    const mm = Math.floor(diffmm);
    const diffss = (diffmm - mm) * 60;
    const ss = Math.floor(diffss);
    // const diffMs = (diffss - ss) * 100;
    // const ms = Math.floor(diffMs);

    const formattedhh = hh.toString().padStart(2, '0');
    const formattedmm = mm.toString().padStart(2, '0');
    const formattedss = ss.toString().padStart(2, '0');
    // const formattedms = ms.toString().padStart(2, '0');

    return `${formattedhh} : ${formattedmm} : ${formattedss}`;
}

function printLap(arr) {
    laps.style.display = 'block';
    lap.style.display = 'block';
    arr.forEach((element) => {
        document.querySelector('.lap').innerHTML = timeToString(element);
    });
}

let startTime;
let elaspsedTime = 0;
let intervalId;
let printValue;
const arr = [];
function start() {
    startTime = Date.now() - elaspsedTime;
    intervalId = setInterval(() => {
        elaspsedTime = Date.now() - startTime;
        printValue = timeToString(elaspsedTime);
        print(printValue);
    }, 10);
}
function pause() {
    clearInterval(intervalId);
    // printLap(timeToString(elaspsedTime));
    arr.push(elaspsedTime);
    printLap(arr);
}

function reser() {
    clearInterval(intervalId);
    print('00 : 00 : 00');
    elaspsedTime = 0;
    lap.style.display = 'none';
    laps.style.display = 'none';
}

startbut.addEventListener('click', () => {
    start();
});

pausebut.addEventListener('click', () => {
    pause();
});

resetbut.addEventListener('click', () => {
    reser();
});
