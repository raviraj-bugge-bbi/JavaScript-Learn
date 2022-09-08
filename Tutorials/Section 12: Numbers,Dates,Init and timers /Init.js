`use strict`;
console.log(`------------Internationalization------------`);

let dateFormat = new Intl.DateTimeFormat('en-IN').format();
console.log(dateFormat);

let timer = 0;
let hr = 1;
const a = setInterval(function () {

    timer++;
    if(document.getElementById("MM").innerText < 9){
        document.getElementById("MM").innerText = `0${timer}`;
    }
    else{
        document.getElementById("MM").innerText = timer;
    }
   

    if (timer == 59) {
        if(document.getElementById("HH").innerText < 9){
            document.getElementById("HH").innerText = `0${hr}`;
        }
        else{
            document.getElementById("HH").innerText = hr;
        }
        hr++;
        timer = 0;
    }

}, 1000);

