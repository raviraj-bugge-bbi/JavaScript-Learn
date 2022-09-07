`use strict`;
console.log(`------------testing personal api------------`);

fetch('GET','https://raviraj-bugge-bbi.github.io/JavaScript-Learn/test/test.json').then(function(data){
    console.log(data);
})