`use strict`;
console.log(`------------Setters & Getters------------`);

class Bank{
    constructor(owner,movements){
        this.owner = owner;
        this.movements = movements;
        console.log(this.movements);
    }

    get maxVal(){
        //console.log(Math.max(this.movements));
        //return Math.max(this.movements);
        //return this.movements[0];
        let max = Math.max(...this.movements);
        return max;
    }

    set updateVal(max1){
        this.movements.push(max1);
    }

    static greet(){
        console.log("hey "+ this.owner);
    }
}

let customer1 = new Bank("ravi",[125,165,235,561,321]);
console.log(customer1.maxVal);

customer1.updateVal = 256;
console.log(customer1.movements);
Bank.greet("ravi",[2]);