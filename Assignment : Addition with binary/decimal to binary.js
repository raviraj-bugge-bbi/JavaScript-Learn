`use strict`;

let div = 6;
let quo;
let rem;
let str = "";
while(div > 0){
    quo = div / 2;
    rem = div % 2;
    str += rem;
    div = parseInt(quo);

    //console.log(quo,rem,str);
}

console.log(str);
let strArr = [...str];
console.log(strArr);
str = "";
for(let i = strArr.length-1;i>=0;i--){
    str += strArr[i];
    
}
console.log(str);

for(let i=strArr.length;i>=0;i--){
    var indexResult;
    var binaryResult;
    for(let j = 1; j< strArr.length;j+2){
        if(strArr[i] == 1){
            indexResult = j+j;
            console.log(indexResult);
        }
        binaryResult += indexResult;
        console.log(binaryResult);
    }

}


