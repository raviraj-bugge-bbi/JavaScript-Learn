'use strict';

console.log("---LECTURE: Arrow Functions---")
let populationPrecentage = population => (population/7900)*100;

indiaPopulation = populationPrecentage(1441);
console.log(indiaPopulation);

italyPopulation = percentageOfWorld1(500);
console.log(italyPopulation);

roamPopulation = percentageOfWorld1(130);
console.log(roamPopulation);

//----------------------------------------------------------------------------------------------------

let retirementAge = birtYear => {
    let age = 2022 - birtYear;
    let retirement = 35-age;
    return age, retirement;
}

let yearsLeft = retirementAge(1999);
console.log(yearsLeft);

