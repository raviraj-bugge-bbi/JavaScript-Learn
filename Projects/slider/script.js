`use strict`;
console.log(`------------Topic Name------------`);
let images = document.querySelectorAll(".img");

function change() {

    console.log(images);

    images.forEach(function show(iterator) {
        console.log(iterator);
    });


    console.log(images[0]);
}
document.getElementById("next").addEventListener("click", ch);

let x = 0;

function ch() {

    if(x == images.length-1){
        images[x].style = "display : block";
        images[images.length-1].style = "display : none";
        x = 0;
    }
    else{
        // images[x].style = "display : block";

        if (x > 0 && x < images.length-1) {
            images[x-1].style = "display : none";
            images[x].style = "display : block";
        }
        x++;
    }
    x++;

        
    }