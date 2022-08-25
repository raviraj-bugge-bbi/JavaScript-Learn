`use strict`;
console.log(`------------Coding Challenge 4------------`);

const dogs = [
    { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
    { weight: 8, curFood: 200, owners: ['Matilda'] },
    { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
    { weight: 32, curFood: 340, owners: ['Michael'] },
];

//
dogs.forEach(function (iterator, index) {
    let recommendedFood = Math.trunc(iterator.weight ** 0.75 * 28);
    dogs[index].recommendedFood = recommendedFood;
});
console.log(dogs);

//
let eats;

let owner = dogs.find(function (iterator) {
    return iterator.owners.includes("Sarah");
});
console.log(owner);

if (owner.curFood < owner.recommendedFood) {
    eats = "little";
    console.log(eats);
} else {
    eats = "much"
    console.log(eats);
}

//

let ownersEatTooMuch = [];
let ownersEatTooLittle = [];

dogs.forEach(function (iterator) {
    if (iterator.recommendedFood < iterator.curFood) {
        ownersEatTooMuch.push(iterator.owners);
    }
    else {
        ownersEatTooLittle.push(iterator.owners);
    }
});
console.log(ownersEatTooMuch.flat());
console.log(ownersEatTooLittle.flat());

//

console.log(`"${ownersEatTooMuch.flat().join(` and `)}'s  dogs eat too much" and "${ownersEatTooLittle.flat().join(` and `)}"'s  dogs eat too little`);

//
console.log(dogs.includes(function (iterator) {
    if (iterator.curFood == iterator.recommendedFood) {
        return true;
    }
    else {
        return false;
    }
}));

//
console.log(dogs.some(function (iterator) {
    return iterator.curFood > (iterator.recommendedFood * 0.90) && iterator.curFood < (iterator.recommendedFood * 1.10)
}));

//

let okay = dogs.filter(function (iterator) {
    return iterator.curFood > (iterator.recommendedFood * 0.90) && iterator.curFood < (iterator.recommendedFood * 1.10);
});
console.log(okay);

//
let dogsSorted = dogs.slice().sort(function(a,b){
    if(a.recommendedFood > b.recommendedFood){
        return 1;
    }
    if(a.recommendedFood < b.recommendedFood){
        return -1
    }
});
console.log(dogsSorted);