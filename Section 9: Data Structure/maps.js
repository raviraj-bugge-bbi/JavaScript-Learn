`use strict`;

console.log("---------Maps---------");

const maps = new Map();

maps.set("Name" , "Raviraj");
maps.set("Last Name","Bugge");
maps.set("in",1);
maps.set("out",3);
maps.set(true,"available");
maps.set(false,"unavailable");

console.log(maps);

console.log(...maps);

console.log([...maps]);

console.log(maps.get("in"));
console.log(maps.get("out"));

console.log(maps.get((maps.get("in") > 0) && (maps.get("out")) > 2));

for (const iterator of maps) {
    console.log(iterator);
}



