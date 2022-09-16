'use strict';
document.addEventListener('DOMContentLoaded', select);
function select() {

    document.getElementById("applyBtn").addEventListener('click', applyColor);

    function applyColor() {
        var color = document.querySelectorAll(".color")

        // for(let x = 0; x < color.length;x++){

        // }

        document.getElementById("body").style.backgroundImage = "linear-gradient(to right," + color[0].value + "," + color[1].value + ")";
        document.getElementById("codeCopy").innerText = "linear-gradient(to right," + color[0].value + "," + color[1].value + ")" + ";";

        if(color[0].value == "#000000" || color[1].value == "#000000"){
            color.forEach( (x) => {
                x.style.border = "3px solid white";
                x.style.borderRadius = "50%";
            }); 
            document.getElementById("applyBtn").style.border =  "3px solid white";
        }

        if(color[0].value == "#000000" || color[1].value == "#000000"){
            color.forEach( (x) => {
                x.style.color = "white";
            });  
        }
    }
}
