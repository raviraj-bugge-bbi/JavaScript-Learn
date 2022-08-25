`use strict`;
console.log(`------------Sort method------------`);


let forSorting = [200, 450, -400, 3000, -650, -130, 70, 1300];

console.log(forSorting.sort());

//ascending
let afterSortAsc = forSorting.sort(function(a,b){
    if(a<b){
        return -1;
    }
    if(a>b){
        return 1;
    }
});

//descending
let afterSortDes = forSorting.sort(function(a,b){
    if(a<b){
        return 1;
    }
    if(a>b){
        return -1;
    }
});

console.log(afterSortDes);