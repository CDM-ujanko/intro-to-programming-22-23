function words (fileName) {
    const fs = require ('fs') ;
    let data = fs. readFileSync (fileName)
    let text = data.toString ()

    let rep = "."
    let rep2 = '\n'
    let mytext = text.replaceAll(rep,'');
    mytext = mytext.replaceAll('\n', ' ').replaceAll('\r', '');
    let words = text.split(' ')

    console.log(words);
}

words('./example.txt')
// function words (text){
// let count = 0
// for (i=0; i < text.lenght; i++){
// if (i == rep|| i == rep2){
 

// }
// return text.replace(rep,rep2, ' ')

// }

// }


function dumb() {
    console.log('I am dumb!');
}

// dumb();

// console.log (words (text))