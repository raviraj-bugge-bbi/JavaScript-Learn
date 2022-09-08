`use strict`;
console.log(`------------Inheritance using Object.create()------------`);

//reffering coding challenge 1

let trucks = function trucks(make,speed,tyres){
    Car.call(make,speed);
    this.tyres = tyres;
}

//linking objects
trucks = Object.create(Car);

let mac = new truck("Mac",120,6);
mac.accelerate();