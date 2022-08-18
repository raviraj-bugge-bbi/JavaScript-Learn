`use strict`;

let div = 1;
let quo;
let rem;
let str = "";
while (div > 0) {
    quo = div / 2;
    rem = div % 2;
    str += rem;
    div = parseInt(quo);
}

console.log(str);

let strArr = [...str];
//console.log(strArr);
str = "";
for (let i = strArr.length - 1; i >= 0; i--) {
    str += strArr[i];
}
console.log(str);

let arrayStr = [];
for (i = 0; i < str.length; i++) {
    arrayStr[i] = str[i];
}
//console.log(arrayStr);

let indexVal = 0;
let totalVal = 0;


for (let i = strArr.length - 1; i >= 0; i--) {

    if (strArr[i] == 1) {
        let j = 2;
        indexVal = Math.pow(j, i);
        totalVal = totalVal + indexVal;
    }
    //console.log(indexVal);
}
console.log(totalVal);
