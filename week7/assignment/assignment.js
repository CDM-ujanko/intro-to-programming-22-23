function words (fileName) {
    const fs = require ('fs') ;
    let data = fs. readFileSync (fileName)
    let text = data.toString ()

    let mytext = text.replaceAll('.','');
    mytext = mytext.replaceAll('\n', ' ').replaceAll('\r', '');
    let words = mytext.split(' ')

    return words;
}

// words('./example.txt');

function stringCount(file, word) {
    let allWords = words(file);
    let count = 0;
    for(let i = 0; i < allWords.length; i++) {
        if (word === allWords[i]) {
            count++
        }
    }

    return count;
}

console.log(stringCount('./example-2.txt', 'the'));

