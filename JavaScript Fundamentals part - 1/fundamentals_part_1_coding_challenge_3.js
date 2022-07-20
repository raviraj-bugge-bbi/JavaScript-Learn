const dolphineScore = (96 + 108 + 89) / 3;
const koalaScore = (88 + 91 + 110) / 3;

console.log("Average score of team dolphines : " + dolphineScore);
console.log("Average score of team koalas : " + koalaScore);

if((dolphineScore > 100) && (koalaScore > 100)){

    if(dolphineScore > koalaScore){
        console.log("Team dolphine wins the trophy");
    }
    else if(dolphineScore === koalaScore){
        console.log("Draw between both teams");
    }
    else{
        console.log("Team koala wins the trophy!");
    }
}
else{
    console.log("Both teams are lost because their score is below 100");
}