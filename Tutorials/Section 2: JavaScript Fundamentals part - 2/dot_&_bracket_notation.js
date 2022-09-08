`use strict`;

console.log("---LECTURE: Dot vs. Bracket Notation---");

console.log(
  `${myCountry.country} has ${myCountry.population} million hindi-speaking people, ${myCountry.neighbours.length} neighbours and capital called ${myCountry.capital}.`
);

myCountry.population = "130";
console.log(
  `${myCountry.country} has ${myCountry.population} million hindi-speaking people, ${myCountry.neighbours.length} neighbours and capital called ${myCountry.capital}.`
);

myCountry["population"] = "128";
console.log(
  `${myCountry.country} has ${myCountry.population} million hindi-speaking people, ${myCountry.neighbours.length} neighbours and capital called ${myCountry.capital}.`
);
