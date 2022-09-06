`use strict`;
console.log(`------------Coding Challenge 2------------`);

class CarCl {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    accelerate() {
        this.speed = this.speed + 10;
        console.log(`${this.make} going at ${this.speed} Km/h`);
    }

    brake() {
        this.speed = this.speed - 5;
        console.log(`${this.make} going at ${this.speed - 5} Km/h`);
        return this;
    }

    get speedUS(){
        return this.speed/1.6;
    }

    set speedUS(speed){
        this.speed = speed*1.6;
    }
}

let BMW = new CarCl("BMW", 120);
let Mercedes = new CarCl("Mercedes", 95);
let FORD = new CarCl("FORD",120);
FORD.speedUS = 80;
console.log(FORD.speedUS);

BMW.accelerate();
BMW.accelerate();
BMW.accelerate();
BMW.brake();
BMW.brake();
BMW.brake();
FORD.accelerate();
FORD.accelerate();
FORD.accelerate();
FORD.accelerate();
FORD.accelerate();
FORD.accelerate();
FORD.accelerate();
FORD.accelerate();