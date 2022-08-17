`use strict`;

console.log("----------for of loop------------");

let array = [1,2,3,5,4,6,7,8,9];
for(item of array){
    console.log(item);
}
console.log(item);

//array.element will return you [index, element]
for(item of array.entries()){
    console.log(item);
}
console.log(item);

for([index, elmnt] of array.entries()){
    console.log(`${index + 1}:${elmnt}`);
}

