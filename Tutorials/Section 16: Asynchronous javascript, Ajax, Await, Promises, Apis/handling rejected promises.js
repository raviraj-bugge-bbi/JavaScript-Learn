// `use strict`;
// console.log(`------------Handling Rejected Promises------------`);

// const getAnime = function(){
//     fetch(`https://aot-quotes-api.herokuapp.com/random`).then(
//         function(data){
//             console.log(data);
//             return data.json();

//         },err => alert(err) //<- using this we can handle a rejected promise
//     ).then(function(data2){
//         console.log(data2);
//         document.querySelector("#qut").textContent = `${data2.quote}`;
//     })//.catch(err => alert(err)) // <- using catch method we can handle an error that happend at any point while executing
//     .finally(console.log("every went fine!"))
// };

// getAnime();