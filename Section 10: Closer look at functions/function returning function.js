`use strict`;

console.log("------------function returning function------------");


// function returnMain(greeting){
//     console.log(greeting);
//     return function returnInnerChild(name){
//         console.log(name);
//         console.log(`${greeting} ${name}`);
//     }
// }

// returnMain("hey!")("xyz");

///////////////////////////////////////////////

const output1 = returnMain => returnInnerChild => console.log(`${returnMain} ${returnInnerChild}`);
output1("hi!")("raviraj");