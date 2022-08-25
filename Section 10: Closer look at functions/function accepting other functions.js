`use strict`;

console.log("---------Higher order function-----------");

function toLowerCase1(str) {
    let string1 = str.toLowerCase();
    return string1;
}

function toUpperCase1(str) {
    let string1 = str.toUpperCase();
    return string1;
}

function transformStr(newStr, fun) {
    let transStr = fun(newStr);
    console.log(transStr);
}

transformStr("hI HOw Are YOu!", toLowerCase1);
transformStr("hI HOw Are YOu!", toUpperCase1);

