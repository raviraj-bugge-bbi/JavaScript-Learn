`use strict`

console.log("-----immediately invoked function expressions------");

//////////////////////////////////////////////////
//normal function

(function(){
    console.log("hi!");
})();

///////////////////////////////////////////////////
//arrow function

(() => console.log("hi!"))();