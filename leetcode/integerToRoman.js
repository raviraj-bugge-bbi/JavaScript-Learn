`use strict`;
console.log(`------------Integer to Roman------------`);

function romanToInt(intVal) {
    const romanToInt = new Map([["I", 1], ["IV", 4], ["V", 5], ["IX", 9], ["X", 10], ["XL", 40], ["L", 50], ["XC"]["C", 100], ["CD", 400], ["D", 500], ["CM", 900], ["M", 1000]]);
    numStr = intVal.toString();

    var newNumStr = [];
    var romanNum = [];

    for (let i = numStr.length - 1; i >= 0; i--) {
        let lastNum = parseInt(numStr.slice(i, numStr.length));
        // console.log(lastNum);

        newNumStr.push(lastNum);
        // console.log(newNumStr);

        numStr = (parseInt(numStr) - lastNum).toString();
        // console.log(numStr);
    }
    newNumStr.reverse();
    console.log(newNumStr);

    // for(let i = 0; i<newNumStr.length;i++){
    //     if()
    // }



    console.log(romanNum);
}

romanToInt(1994);