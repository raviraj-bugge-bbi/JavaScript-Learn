`use strict`;
console.log(`------------Integer to Roman------------`);

function romanToInt(intVal) {
    var romanToInt = [["M", 1000], ["D", 500], ["C", 100], ["L", 50], ["X", 10], ["V", 5], ["I", 1]];
    // console.log(romanToInt);
    var newNumStr = [];
    var romanNum = [];

    numStr = intVal.toString();
    // num = intVal;

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

    for (let i = 0; i < romanToInt.length; i++) {
        if (romanToInt[i][1] == newNumStr[i]) {
            romanNum.push(romanToInt[i][0]);
            // console.log(romanNum);
        }
        for (let j = i + 1; j < romanToInt.length; i++) {
            if ((romanToInt[i][1] - romanToInt[j][1]) == newNumStr[i]) {
                romanNum.push(romanToInt[j][0]);
                romanNum.push(romanToInt[i][0]);
            }
        }
    }

    console.log(romanNum);



}

romanToInt(1994);