`use strict`;

console.log("----Coding Challenge #3-----");

//----------------------------------------------------------------------------------------------------------

const mark = {
    fullName: 'mike miller',
    height: '1.96',
    mass: 78,
    calcBMI: function () {
        console.log(this);
        this.BMI = this.mass / this.height ** 2;
        return this.BMI;
    }
};

console.log(mark.BMI);