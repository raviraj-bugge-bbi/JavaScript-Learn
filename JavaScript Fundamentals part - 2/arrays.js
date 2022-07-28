`use strict`;

console.log("---LECTURE: Introduction to Arrays---");

let populations = [33, 55, 14, 17];

if (populations.length == 4) {
  console.log("True");
} else {
  console.log("False");
}

let percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[3]),
];
console.log(percentages);
