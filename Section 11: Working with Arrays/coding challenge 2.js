`use strict`;

console.log("-----coding challenge 2--------");

function calcAverageHumanAge(ages) {
    //
    let humanYears = ages.map(function (iterator) {
        if (iterator <= 2) {
            return 2 * iterator;
        }
        else {
            return 16 + iterator * 4;
        }
    });
    console.log(`Human Years - ${humanYears}`);

    //
    let greaterThan = humanYears.filter(function (iterator) {
        return iterator >= 18;
    });
    console.log(`Age greater than 18 - ${greaterThan}`);

    //
    let avgAdultAge = greaterThan.reduce(function (acc, iterator) {
        return iterator + acc;
    }, 0);
    console.log(`Average age - ${avgAdultAge / (greaterThan.length)}`);

}

calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);