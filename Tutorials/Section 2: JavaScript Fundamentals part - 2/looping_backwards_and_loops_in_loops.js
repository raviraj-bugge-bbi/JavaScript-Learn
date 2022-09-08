`use strict`;

console.log("----LECTURE: Looping Backwards and Loops in Loops----");

let listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];

for (i = 0; i < listOfNeighbours.length; i++) {
  for (j = 0; j < listOfNeighbours[i].length; j++) {
    console.log(`neighbour : ${listOfNeighbours[i][j]}`);
  }
}
