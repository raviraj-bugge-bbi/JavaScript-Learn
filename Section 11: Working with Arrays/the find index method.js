`use strict`;
console.log(`------------Find Index Method------------`);

let forIndex = [200, 450, -400, 3000, -650, -130, 70, 1300];

let indexOfElement = forIndex.findIndex(function (acc){
    return acc > 400;
});
console.log(indexOfElement);