
`use strict`;
console.log(`------------Coding Challenge 1------------`);

const Car = function car(make, speed) {
    this.make = make;
    this.speed = speed;
}



Car.prototype.accelerate = function () {
    this.speed = this.speed + 10;
    console.log(`${this.make} going at ${this.speed} Km/h`);
}

Car.prototype.brake = function () {
    this.speed = this.speed - 5;
    console.log(`${this.make} going at ${this.speed - 5} Km/h`);
}

let BMW1 = new Car("BMW", 120);
let Mercedes1 = new Car("Mercedes", 95);

BMW1.accelerate();
BMW1.accelerate();
BMW1.accelerate();
BMW1.brake();
BMW1.brake();
BMW1.brake();   