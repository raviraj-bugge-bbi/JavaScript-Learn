`use strict`;

console.log("---LECTURE: Introduction to Objects---");

let myCountry = {
  country: "india",
  capital: "delhi",
  population: "128",
  neighbours: ["japan", "russia"],
};

console.log(myCountry);
console.log(myCountry.capital);

//-------------------------------------------------------------------------------------

const raviraj = {
  firstName: "raviraj",
  lastName: "bugge",
  birthYear: "1999",
  city: "latur",
  friends: ["abhi", "sandy", "ashu", "shubhu"],
  calAge: function ageCal(birthYear) {
    return 2022 - birthYear;
  },
};

const key = "Name";

console.log(raviraj["first" + key]);

//-------------------------------------------------------------------------------------

/*const info = prompt('Requirement');
console.log(raviraj[info]);*/

//-------------------------------------------------------------------------------------

raviraj.gendre = "male";
raviraj["status"] = "single";

console.log(
  `${raviraj.firstName} has ${raviraj.friends.length} friends, and his friends are ${raviraj.friends}`
);

//--------------------------------------------------------------------------------------
