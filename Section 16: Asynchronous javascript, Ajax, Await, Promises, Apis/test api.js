`use strict`;
console.log(`------------testing personal api------------`);

fetch('https://raviraj-bugge-bbi.github.io/JavaScript-Learn/test/test.json').then(function(data){
    //console.log(data.json());
    return data.json();
})
.then(function(data2){
    console.log(data2);
})