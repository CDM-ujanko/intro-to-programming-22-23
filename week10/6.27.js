const fs = require('fs');

function index(file, words) {
    let data = fs.readFileSync(file).toString();
    let out = {};
    data = data.toLowerCase();
    let lines = data.split('\n');
    for (let i = 0; i < lines.length; i++) {
        for (let a = 0; a < words.length; a++) {
            let word = words[a];
            if (lines[i].includes(word)) {
                // 
                if (out[word]) {
                    out[word] += ', ' + i;
                }
                else {
                    out[word] = i;
                }
            }
        }
    }
    console.log(out)
}


index('raven.txt', ['raven', 'mortal', 'dying', 'ghost', 'ghastly', 'evil', 'demon'])
// index('raven.txt', 'raven')