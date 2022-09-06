`use strict`;
console.log(`------------Asynchronous javascript, AJAX, API's------------`);

let request = new XMLHttpRequest();
request.open('GET','https://animechan.vercel.app/api/random');
request.send();

request.addEventListener('load',function(){
    let data = JSON.parse(request.responseText);
    document.querySelector("#qut").textContent = `${data.quote}  -${data.character}`;
    console.log(data.quote);
    console.log(data);
});