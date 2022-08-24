`use strict`;

console.log("-----------Coding Challenge 1----------");

function checkDogs (dogsJulia,dogsKate){
    let dogsJuliaCorrected = dogsJulia.slice(0,-1);

    dogsJuliaCorrected.splice(0,1);
    dogsJuliaCorrected.splice(-2);

    //console.log(dogsJuliaCorrected);

    let combine = dogsJuliaCorrected.concat(dogsKate);
    console.log(combine);

    combine.forEach(function(iterator,index) {
        if(iterator > 3){
            console.log(`Dog number ${index+1} is an adult, and is ${iterator} years old`);
        }
        else{
            console.log(`Dog number ${index+1} is still a puppy 🐶`);
        }     
    });
}

checkDogs([3, 5, 2, 12, 7],[4, 1, 15, 8, 3]);
checkDogs([9, 16, 6, 8, 3],[10, 5, 6, 1, 4]);