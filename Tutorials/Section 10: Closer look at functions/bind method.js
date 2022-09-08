`use strict`;

console.log("----------bind method-----------");

const bookSJ = airIndia.book.bind(spiceJet);
const bookIG = airIndia.book.bind(indiGo);

bookIG("Raviraj_Bugge", "IG2");
bookSJ("ravi_bugge", "SJ35")