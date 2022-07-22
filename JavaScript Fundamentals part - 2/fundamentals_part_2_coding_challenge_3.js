`use strict`;

console.log("----Coding Challenge #3-----");

//----------------------------------------------------------------------------------------------------------

const mark = {
    fullName: 'mike miller',
    height: '1.69',
    mass: '78',
    calcBMI: function () {
        this.BMI = this.mass / this.height ** 2;
        return this.BMI;
    }
};

const john = {
    fullName: 'mike miller',
    height: '1.95',
    mass: '92',
    calcBMI: function () {
        this.BMI = this.mass / this.height ** 2;
        return this.BMI;
    }
};


if(mark.calcBMI() > john.calcBMI()){
    console.log(`${mark.fullName} BMI(${mark.BMI}) is higher than (${john.BMI})!`);
}
else{
    console.log(`${john.fullName} BMI(${john.BMI}) is higher than (${mark.BMI})!`);
}