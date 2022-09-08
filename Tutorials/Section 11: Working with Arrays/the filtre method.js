`use strict`;

console.log("--------the filter method--------");

let forFilter = [200, 450, -400, 3000, -650, -130, 70, 1300];

let filteredArray = forFilter.filter(function (iterator) {
    return Math.abs(iterator) < 500;
});
console.log(filteredArray);