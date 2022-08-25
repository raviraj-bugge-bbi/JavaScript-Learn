`use strict`;
console.log(`------------Flat and FlatMap method------------`);

let forFlat = [200, 450, [20, 520], -400, [546, 236], 3000, -650, -130, 70, 1300];
console.log(forFlat);

let forFlatNested = [200, 450, [20, 520, [654, 326, [641, 932]]], -400, [546, 236], 3000, -650, -130, 70, 1300];


// flat method
console.log(forFlat.flat());
console.log(forFlatNested.flat());
console.log(forFlatNested.flat(2));
console.log(forFlatNested.flat(3));

//flatMap method

let flatMapArray = forFlat.flatMap(function (iterator) {
    return iterator * 2;
})
console.log(flatMapArray);
