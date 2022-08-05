'use strict';
document.addEventListener('DOMContentLoaded', select);
function select() {
    let colorOne = document.getElementById("firstColor").value;
    let colorTwo = document.getElementById("secondColor").value;

    document.getElementById("body").style.backgroundImage = "linear-gradient(to right"+","+ colorOne +","+ colorTwo+")";
}
