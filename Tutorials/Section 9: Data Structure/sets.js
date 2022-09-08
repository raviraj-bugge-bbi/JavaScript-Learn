`use strict`;

console.log("-------------sets------------------");
let arrSet = [1, 2, 1, 3, 5, 4, 2, 1];

let newArr = new Set(arrSet);

console.log(newArr);

console.log(...newArr);

console.log([...newArr]);

console.log(newArr.size);

console.log(newArr.has(3));

for (const numbers of newArr) {

    console.log(numbers);

}

newArr.add("hi");
console.log(newArr);

newArr.delete("hi");
console.log(newArr);



