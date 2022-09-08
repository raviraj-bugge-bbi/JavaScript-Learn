`use strict`;
console.log(`------------Inheritance using Constructor Function------------`);

// reffering codding challenge 1
const newVehicle = function truck(make, speed, tyers) {
    this.tyers = tyers;
    Car.call(this, make, speed);
    console.log(this);
    //here this keyword newVehicle object
}

//linking prototypes
newVehicle.prototype = Object.create(Car.prototype);
console.log(newVehicle.prototype);

let volvo = new newVehicle("volvo", 70, 6);

newVehicle.prototype.info = function () {
    console.log(`the truck ${this.make} has speed of ${this.speed}Km/h and it's a ${this.tyers} tyers vehicle.`);
}

volvo.info();