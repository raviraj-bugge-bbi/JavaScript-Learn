`use strict`;
console.log(`------------Prototypes------------`);

// const Details = function details(firstNAme, lastName, birthYear) {
//     this.firstNAme = firstNAme;
//     this.lastName = lastName;
//     this.birthYear = birthYear;
// }

// let ravi = new Details("Raviraj", "Bugge", 1999);
// console.log(ravi);

Details.prototype.age = function(){
    console.log(2023 - this.birthYear);
}
console.log(Details.prototype);

ravi.age();