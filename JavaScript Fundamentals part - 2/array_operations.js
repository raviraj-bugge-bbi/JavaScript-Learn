`use strict`;

console.log("---LECTURE: Basic Array Operations (Methods)---");

let neighbours = ['india','italy','roam','japan'];

neighbours.push('Utopia');
console.log(neighbours);

neighbours.pop('Utopia');
console.log(neighbours);

if(neighbours.includes('Germany')){
    console.log("Probably a central European country :D");
}
else{
    console.log("Probably not a central European country :D");
}

console.log(neighbours.indexOf('roam'));
neighbours[2]='china';

console.log(neighbours);