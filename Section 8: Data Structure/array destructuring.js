`use strict`;

console.log("-----------destructuring arrays-----------");
//destructuring arrays
const arr = [0, 1, 2, 3, 4, [5, 6, 7]]
const [a, b, c] = arr;
console.log(a, b, c);
const [x, , y] = arr;
console.log(x, y);
const [p, , , , , [q, r, s]] = arr;
console.log(p, q, r, s);

console.log("----------destructuring objects-----------");
const object = { key1: "value1", key2: "value2", innerObject: { innerKey1: "innerKey2" } };
let { key1, key2, innerObject } = object;
console.log(key1, key2, innerObject);

//renaming methods
let { key1: firstValue, key2: secondValue, innerObject: nestedObject } = object;
console.log(firstValue, secondValue, innerObject);

//best practice to initialize with empty array
let { key1: firstValue1 = [], key2: secondValue2 = [], innerObject: nestedObject3 = [] } = object;
console.log(firstValue, secondValue, innerObject);

//mutating variables
let i = 14;
let j = 15;

const obj = { i: 11, j: 12 };
({ i, j } = obj); //we can wrap the whole assignment into a ()

//nested object destructuring
const { innerObject: { innerKey1: innerKeyValue = [] } } = object;
console.log(innerKeyValue);

//spread operator(used on right side of =)
const range = [1, 2, 3];
console.log(range);
const extendRange = [0, ...range, 4, 5, 6];
console.log(extendRange);
console.log(...extendRange);

//rest operator(used on lest side of =)
const range2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const [k, l, ...others] = range2;
console.log(k, l, others);

console.log("----------short circuiting in logical operators(&&,||)------------");
//-----------short circuiting in logical operators(&&,||)----------------------

//logical OR operator (||) always returns first truthly value boolean expression
console.log(0 || "string");
console.log(0 || null || "" || 23);

//logical AND operator (&&) always returns first falsy value from boolean expression
console.log(0 && "string");
console.log(10 && null && "" && 23);

//nullish coalescing operating (??) null or undefined
console.log(null ?? 10);

console.log("-------------Logical assignment operators (&&,||,??)--------------");
//-------------Logical assignment operators (&&,||,??)--------------
let o = 25;
console.log(o);
o &&= 1;
console.log(o);
