`use strict`;

console.log("------Coding Challenge 3-------");

document.addEventListener('DOMContentLoaded', main);
function main() {
    let textArea = document.body.appendChild(document.createElement('textarea'));
    let button = document.body.appendChild(document.createElement('button'));

    textArea.setAttribute('id', 'textArea');
    button.setAttribute('id', 'button');

    document.getElementById("button").addEventListener('click', click);

    function click() {
        let inputText = document.getElementById("textArea").value;
        console.log(inputText);

        let desiredInputText = inputText.split('\n');
        console.log(desiredInputText);

        for (const [index, iterator] of desiredInputText.entries()) {
            let out = iterator.toLowerCase().trim().replace('_', ' ');
            console.log(`${out.padEnd(20)} ${'✅'.repeat(index)}`);


        }
    }
}


