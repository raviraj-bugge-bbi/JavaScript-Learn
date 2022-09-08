`use strict`;
console.log(`------------ES6 Classes------------`);

class Details2 {
    constructor(firstName, lastName, birthYear) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthYear = birthYear;
    }

    age() {
        console.log(2023 - this.birthYear);
    }
}

let ram = new Details2("ram", "hari", 1999);
//console.log(ram);
ram.age();