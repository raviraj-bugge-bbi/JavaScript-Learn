`use strings`;

console.log("--------working with strings part 2----------");

console.log("=========toUpperCase() & toLowerCase()==========");
//toUpperCase will convert the string to upper case
//toLoweCase will convert the string to lower case

const badString = `  thIs iS a bAD sTRIng `;
const goodString = "this is a good string"
console.log(badString);

console.log(badString.toLowerCase() + ` - By using to Lower case`);
console.log(badString.toUpperCase() + ` - By using to upper case`);

console.log("=========trim()=======");
//trim() will remove white spaces from both side of string

console.log(badString.trim().toUpperCase());

console.log("==========replace()===========");
//replace() will replace the required string part
//have to pass two parameters

console.log(badString.toLowerCase().replace("bad", "good"));

console.log("=======booleans======");
//will return true of false values
console.log("_____includes()_____");
//includes() checks if the given string is present or not
console.log(goodString.includes("a g"));

console.log("_____startsWith() & endsWith()_____");
//startsWith() checks if the string has matching string start and endsWith() checks if the string has matching end part
console.log(goodString.startsWith("thi") && goodString.endsWith("ing"));


