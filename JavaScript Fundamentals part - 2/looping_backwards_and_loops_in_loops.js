`use strict`;

console.log("----LECTURE: Looping Backwards and Loops in Loops----");

let example = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];
let listOfNeighbours = [];

for(let i = 0;i<3;i++){
    for(let j = i;j<=i;j++){
        listOfNeighbours[j] = example[i];
    }
}

for(let i = 0;i<=listOfNeighbours.length;i++){
    console.log(listOfNeighbours[i]);
}