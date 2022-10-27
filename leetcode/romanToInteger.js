`use strict`;
console.log(`------------Roman to Integer------------`);

function romanToInt(romanInt) {
    const romanToInt = new Map([["I", 1], ["V", 5], ["X", 10], ["L", 50], ["C", 100], ["D", 500], ["M", 1000]]);
    var intValues = [];
    var input = romanInt.toUpperCase();
    var sum = 0;


    for (let i = 0; i < romanInt.length; i++) {
        intValues.push(romanToInt.get(input[i]));
    }

    for (let i = 0; i < intValues.length; i++) {
        if (intValues[i] < intValues[i + 1]) {
            intValues[i] = intValues[i + 1] - intValues[i];
            intValues.splice(i + 1, 1);
        }
        sum = sum + intValues[i];
    }

    return sum;
}

romanToInt("MCMXCIV");
