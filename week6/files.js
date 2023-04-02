const fs = require('fs');

let data = fs.readFileSync('./example.txt');
let text = data.toString().toLocaleLowerCase();

function letterCount(letter, text) {
    let count = 0;
    for (i = 0; i < text.length; i++) {
        if (letter === text[i]) {
            count++
        }
    }

    return count;
}

// let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
let letters = 'abcdefghijklmnopqrstuvwxyz';

let out = '';
for (let i = 0; i < letters.length; i++) {
    let count = letterCount(letters[i], text);
    // console.log(`The number of letters ${letters[i]} = ${count} \n`)
    out += `The number of letters ${letters[i]} = ${count} \n`;
}

fs.writeFileSync('./out.txt', out);
console.log('done!');