'use strict';

console.log("---LECTURE: Functions---");

function describeCountry(country, population, capitalCity){
    const string = `${country} has ${population} million people and its capital city is ${capitalCity}`;
    return string;
}

let indiaCountry = describeCountry("India", "33", "Delhi");
console.log(indiaCountry);

let italyCountry = describeCountry("Italy", "28", "Rome");
console.log(italyCountry);

let japanCountry = describeCountry("Japan", "13", "Tokyo");
console.log(japanCountry);