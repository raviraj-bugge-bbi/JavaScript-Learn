var scroll1 = 0;
var a = 100;


function myFunction(event) {
    var y = event.deltaY;
    console.log(y);

    document.getElementById("gallery").scrollIntoView();
}
