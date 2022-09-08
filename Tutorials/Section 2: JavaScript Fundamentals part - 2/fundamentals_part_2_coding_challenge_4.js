`use strict`;
console.log("----Coding Challenge #4------");

let bills1 = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips1 = [];
let total1 = [];

for (let i = 0; i < bills1.length; i++) {
  tips1.push(calcTip(bills1[i]));
  total1.push(bills1[i] + tips1[i]);
}

console.log(bills1);
console.log(tips1);
console.log(total1);

let arr = [];

function calcAverage1(arr) {
  let sum = 0;
  for (let i = 0; i < bills1.length; i++) {
    sum = sum + arr[i];
  }
  let avg = sum / bills1.length;
  return avg;
}

console.log(calcAverage1(total1));
