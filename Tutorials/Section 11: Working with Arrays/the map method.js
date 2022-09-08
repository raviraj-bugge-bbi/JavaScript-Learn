`use strict`;

console.log("---------the map method---------");
let transaction1 = [200, 450, -400, 3000, -650, -130, 70, 1300];
let newTransaction = [];
transaction1.map(element => {
    newTransaction.push(element * 2);
});
console.log(newTransaction);

//

transaction1.map(function (iterator) {
    newTransaction.push(iterator * 2);
});
console.log(newTransaction);