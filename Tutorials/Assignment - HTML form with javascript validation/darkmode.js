'use strict';

document.addEventListener('DOMContentLoaded', nextDark);

function nextDark() {
    let returnFlag;
    if (localStorage.getItem("flag") == 1) {
        document.getElementById("next").style.backgroundColor = "black";
        document.getElementById("next").style.color = "white";

        return (returnFlag = localStorage.setItem('flag', '1'));
    } else {
        document.getElementById("next").style.backgroundColor = "white";
        document.getElementById("next").style.color = "black";

        return (returnFlag = localStorage.setItem('flag', '0'));
    }
}


