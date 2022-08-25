`use strict`;

console.log("----------default parameters-------------");

let arr = [];

//arguments are passed in same sequence as parameters
//if you don't want to pass a argument then you should set that parameters default value to undefined 

function funArray(name, middleName, lastName) {
    console.log(name, middleName, lastName);

    const arrObject = {
        name,
        middleName,
        lastName
    };

    arr.push(arrObject);
}

funArray("a", "c");
console.log(arr);

console.log("--------------------------------------------");
//////////////////////////////////////////////////////////////////////////////////

const arrObject2 = {
    name1: "RAVIRAJ",
    rollNum: 11
}

const lastName = "BUGGE";

function funArray2(name, lastName) {

    console.log("Mr. " + name);
    console.log(lastName);

    if (name.rollNum === 11) {
        console.log("present");
    } else {
        console.log("absent ❌");
    }
}

funArray2(arrObject2, lastName);