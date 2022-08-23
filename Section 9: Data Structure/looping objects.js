`use strict`;

console.log("----------Looping Objects--------");

console.log("--Keys--");

for(const x of Object.keys(testObject)){
    console.log(x);
}

console.log("--Values--");
for(const x of Object.values(testObject)){
    console.log(x);
}

console.log("--Entries--");
for(const x of Object.entries(testObject)){
    console.log(x);
}