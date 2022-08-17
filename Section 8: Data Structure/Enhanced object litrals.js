`use strict`;

console.log("-------Enhanced object literals----------");

const testObject1 = {
    key4: "val4"
};

const testObject = {
    key1: "val1", key2: "val2", key3: "val3", testObject1
};

console.log(testObject);

for (const item of Object.entries(testObject)) {
    console.log(item);
    console.log(`${item}`);
}