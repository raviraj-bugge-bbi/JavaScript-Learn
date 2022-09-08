`use strict`;
console.log(`------------constructor function & new operator------------`);

const Details = function details(firstNAme, lastName, birthYear) {
    this.firstNAme = firstNAme;
    this.lastName = lastName;
    this.birthYear = birthYear;
}

let ravi = new Details("Raviraj", "Bugge", 1999);
console.log(ravi);

let abc = new Details("abc","xyz",22);
console.log(abc);

let chi = "chi";

console.log(ravi instanceof Details); // instanceof method will return a boolean value
console.log(chi instanceof Details);