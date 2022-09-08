`use strict`;

console.log("----LECTURE: Object Methods-----");

const jonas = {
  firstName: "jonas",
  birthYear: "1991",
  job: "teacher",
  age: function () {
    return 2022 - this.birthYear;
  },
  hadDriverLicense: function () {
    if (this.age <= 18) {
      return "has a";
    } else {
      return "dont has a";
    }
  },
};

console.log(
  `${jonas.firstName} is a ${jonas.age()} year old ${jonas.job
  } and he ${jonas.hadDriverLicense()} drivers license.`
);

//-------------------------------------------------------------------------------------------------------------------------------------

const myCountry1 = {
  country: "india",
  capital: "delhi",
  population: "128",
  neighbours: ["japan", "russia"],
  language: "marathi",
  describe: function () {
    return `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`;
  },
  checkIsland: function () {
    this.isIsland = [
      this.neighbours.length == 0 ? "is island" : "is not island",
    ];
    return this.isIsland;
  },
};

console.log(myCountry1.describe());
console.log(myCountry1.checkIsland());
console.log(myCountry1.isIsland);
