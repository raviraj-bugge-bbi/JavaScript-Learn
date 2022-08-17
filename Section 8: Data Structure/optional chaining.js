`use strict`;

console.log("--------------optional chaining-----------");

console.log(testObject?.key4 ?? "this property does not exist in this object");

console.log(testObjectOne.innerTestArray?.[1] ?? "Not available"); 