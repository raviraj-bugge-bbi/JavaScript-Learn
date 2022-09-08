`use strict`;

console.log("--------------coding challenge 1-----------------");
console.log("click Answer poll to start");

const poll = {
    question: "What is your favorite programming language?",
    options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
    answers: [0, 0, 0, 0],
    registerNewAnswer: function ans() {
        let num = Number(prompt(`${this.question}\n ${this.options.join("\n")} \n (Write option number)`));
        if (typeof (num) == 'number' && num < this.answers.length) {
            this.answers[num]++;
        }
        else {
            alert("please select a valid option");
        }
        this.displayResults();
        this.displayResults('string');
    },
    displayResults: function displayResults(type = 'array') {
        if (type == 'array') {
            console.log(this.answers);
        }
        if (type == 'string') {
            console.log(`Poll results are ${this.answers.join(", ")}`);
        }
    }
};

//****bonus******

// poll.displayResults.call({answers : [5, 2, 3]}, 'string');
// poll.displayResults.call({answers : [5, 2, 3]},'array');
// poll.displayResults.call({answers : [1, 5, 3, 9, 6, 1]}, 'string');
// poll.displayResults.call({answers : [1, 5, 3, 9, 6, 1]},'array');
