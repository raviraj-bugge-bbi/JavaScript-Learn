`use strict`;

console.log("---------The reduce method--------");

let forReduce = [200, 450, -400, 3000, -650, -130, 70, 1300];

let reducedArray = forReduce.reduce(function(acc,iterator,index,array){
    console.log(`${iterator}+${acc}`);
    return iterator+acc;
},100);
console.log(reducedArray);
'use strict` 
 console.log(------------Topic Name------------);
`