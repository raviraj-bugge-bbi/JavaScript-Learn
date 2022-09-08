`use strict`;
console.log(`------------Sone and every method------------`);

let forCheck = [200, 450, -400, 3000, -650, -130, 70, 1300];

// some method
let someOf = forCheck.some(function (iterator) {
    return iterator > 0;
});

console.log(someOf);

// every method
let every = forCheck.every(function (iterator) {
    return iterator < 0;
});

console.log(every);
