`use strict`;
console.log(`------------Coding Challenge 3------------`);

const EV = function electricCar(make, speed,charge){

    Car.call(this, make, speed);
    this.charge = charge;
}
//linking prototypes
EV.prototype = Object.create(Car.prototype);


EV.prototype.chargeBattery = function(chargeTo){
    this.charge = chargeTo;
};
EV.prototype.accelerate = function(){
    this.speed += 20;
    this.charge --;
    console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`);
}

let tesla = new EV("Tesla",120,23);
tesla.chargeBattery(90);

tesla.brake();
tesla.accelerate();

//tesla.brake();
//console.log(tesla);
