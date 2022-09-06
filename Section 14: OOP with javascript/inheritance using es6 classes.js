`use strict`;
console.log(`------------Inheritance using ES6 Classes------------`);

//we can implement inheritance using es6 classes with extends and super keyword
//reffering coding challenge 2

class truck extends CarCl{  //here trucks is child class of CarCl using extends keyword
    constructor(make,speed,tyers){
        super(make,speed); //super keyword is used to call the constructor of parent class with its properties and methods
        this.tyers = tyers;
    }

    info(){
        console.log(`the truck ${this.make} has speed of ${this.speed}Km/h and it's a ${this.tyers} tyers vehicle.`);

    }
}



let tata = new truck("Tata",100,8);
tata.info();  