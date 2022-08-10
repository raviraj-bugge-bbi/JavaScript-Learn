'use strict';
document.addEventListener('DOMContentLoaded', select);
function select() {

    document.getElementById("apply").addEventListener('click', applyColor);

    function applyColor() {
        document.getElementById("body").style.backgroundImage = "linear-gradient(to right," + firstColor.value + "," + secondColor.value + ")";
    }
}
