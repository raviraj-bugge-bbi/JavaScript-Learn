`use strict`;

console.log("--------working with string part 1-----------");

let string = "hi how are u";

console.log("======length()======");
//length returns the length of string
console.log(string.length);

console.log("======indexOf()======");
//indexOf() returns the index of the required character in the string

console.log(string.indexOf("h"));

console.log("======lastIndexOf()======");
//lastIndexOf() returns the index of the last required character in the string
console.log(string.lastIndexOf("h"));

console.log("======slice()======");
//slice() starts the the string from given index (can determine starting & ending index)
//passing a -index will start the string from last elements
console.log(string.slice(string.indexOf("a")));
console.log(string.slice(string.lastIndexOf("h"),string.indexOf("e")));


