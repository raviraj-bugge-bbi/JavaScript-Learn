`use strict`;

console.log("--------------call and apply method-------------");

console.log("-----------------call method-------------------");

const airIndia = {
    airline: "Air India",
    code: "(AI)",
    bookings: [],
    price: "120$",
    book: function book(name, seat) {
        console.log(`${name} booked a flight of ${this.airline} ${this.code}, the seat number is  ${seat}, price - ${this.price}`);
        this.bookings.push({ flight: `${this.airline} ${this.code} seat no. ${seat}`, name, cost: `${this.price}` });

    },
};

airIndia.book("raviraj", "A3");
console.log(airIndia);
console.log("===========================================================");


const spiceJet = {
    airline: "Spice Jet",
    code: "(SJ)",
    price: "100$",
    bookings: [],
}

const indiGo = {
    airline: "IndiGo",
    code: "(IG)",
    price: "90$",
    bookings: [],
}

airIndia.book.call(spiceJet, "Ravi", "SJ5");
console.log(spiceJet);
console.log("===========================================================");


airIndia.book.call(indiGo, "RaviRaj", "IG6");
console.log(indiGo);
console.log("===========================================================");

console.log("-----------------apply method-------------------");

let testData = ["RaviRaj", "IG3"];
airIndia.book.apply(indiGo, testData);
console.log(indiGo);
console.log("===========================================================");

