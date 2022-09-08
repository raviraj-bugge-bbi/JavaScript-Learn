`use strict`;

console.log("---------For In Loop---------");

//let testArray = [1,2,3,4,5,6,7,8,9,52];

const testObjectTwo = {
    key4: "val4"
};

const testObjectOne = {
    key1: "val1", key2: "val2", key3: "val3", testObjectTwo, innerTestArray: ['hello', 'hi']
};

for (const item in testObjectOne) {
    console.log(item, testObjectOne[item]);
}