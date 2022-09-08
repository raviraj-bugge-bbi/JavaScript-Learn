`use strict`;

let timer = 0;
let min = 1;
let hr = 1;
document.getElementById("rightBox").innerText = "00";
document.getElementById("middleBox").innerText = "00";
document.getElementById("leftBox").innerText = "00";

const a = setInterval(function () {

    timer++;
    if (document.getElementById("rightBox").innerText < 9) {
        document.getElementById("rightBox").innerText = `0${timer}`;
    }
    else {
        document.getElementById("rightBox").innerText = timer;
    }


    if (timer == 59) {
        if (document.getElementById("middleBox").innerText < 9) {
            document.getElementById("middleBox").innerText = `0${min}`;
        }
        else {
            document.getElementById("middleBox").innerText = min;
        }
        min++;
        timer = 0;
    }

    if (document.getElementById("middleBox").innerText == 59) {
        if (document.getElementById("leftBox").innerText < 9) {
            document.getElementById("leftBox").innerText = `0${hr}`;
        }
        else {
            document.getElementById("leftBox").innerText = hr;
        }
        hr++;
        timer = 0;
    }

}, 1000);