`use strict`;

console.log("---LECTURE: Functions Calling Other Functions---");

function describePopulation (country, population){
    let calPercentage = percentageOfWorld1(population);
    let string = `${country} has ${population} million people, which is about ${calPercentage}% of the world.`
    return string;
}

indiaCountry = describePopulation("India", "500");
console.log(indiaCountry);

//------------------------------------------------------------------------------------------------------------------

let indiaCountry1 = function (country, population){
    let calPercentage = percentageOfWorld1(population);
    let string = `${country} has ${population} million people, which is about ${calPercentage}% of the world.`
    return string;
}

let displayPopulation = indiaCountry1("india", "500");
console.log(displayPopulation);

//------------------------------------------------------------------------------------------------------------------

let indiaCountry2 = (country, population) => {
    let calPercentage = percentageOfWorld1(population);
    let string = `${country} has ${population} million people, which is about ${calPercentage}% of the world.`
    return string;
}

let displayPopulation1 = indiaCountry2("India", "500");
console.log(displayPopulation1);