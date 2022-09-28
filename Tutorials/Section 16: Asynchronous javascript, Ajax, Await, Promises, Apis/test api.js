`use strict`;
console.log(`------------testing personal api------------`);

// fetch('https://raviraj-bugge-bbi.github.io/JavaScript-Learn/test/test.json')
fetch('http://shrouded-falls-48764.herokuapp.com/vehicle-info/').then(function(data){
    // //console.log(data.json());
    // return data.json();
    let dataApi = data.json();
    console.log(dataApi);
    return dataApi; 
})
.then(function(data2){
    console.log(data2);
})