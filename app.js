let min = 00;
let second = 00;
let milisec = 00;

let minute = document.getElementById("minute");
let sec = document.getElementById("sec");
let mili = document.getElementById("mili");
let play = document.getElementById("play");
let pause = document.getElementById("pause");
let refresh = document.getElementById("refresh");
let interval;

play.onclick = () => {
    clearInterval(interval);
    interval = setInterval(startTimer, 10);
};

pause.onclick = () => {
    clearInterval(interval);
};

refresh.onclick = () => {
    clearInterval(interval);
    minute.innerHTML = "00";
    sec.innerHTML = "00";
    mili.innerHTML = "00";
};

const startTimer = () => {
    milisec++;

    if (milisec < 9) {
        mili.innerHTML = "0" + milisec;
    }
    if (milisec > 9) {
        mili.innerHTML = milisec;
    }
    if (milisec > 99) {
        second++;
        sec.innerHTML = "0" + second;
        milisec = 0;
        mili.innerHTML = "0" + milisec;
    }
    if (second > 9) {
        sec.innerHTML = second;
    }
    if (second >= 60) {
        min++;
        minute.innerHTML = "0" + min;
        second = 0;
        sec.innerHTML = "0" + second;
    }
}