const fs = require('fs');

let data = fs.readFileSync('./example.txt')
let text = data.toString;


//function cword(w) {
 //   var count = 0;
  //  var words = w.split(" ");
 //   for (i = 0; i < words.length; i++) {
  //    if (words[i] != "") {
   //     count += 1;
   //   }
   // }
//}
    //return (count);

/**function wordCount(word, text) {
let count = 0
let words = words.split(" ");
  for (i = 0; i < text.length; i++) {
      if(words[i] === ""){
          count += 1;
      }
  }
 return (count);
}

console.log('The number of words is', wordCount('i',text))
*/



var punctuation = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';

function removePunctuation(string) {
  return string.split('')
    .filter(function(letter) {
      return punctuation.indexOf(letter) === -1;
    })
    .join('');
}

// let testText = 

// `Alice was beginning to get very tired of sitting by her sister
// on the bank, and of having nothing to do:  once or twice she had
// peeped into the book her sister was reading, but it had no
// pictures or conversations in it, \`and what is the use of a book,'
// thought Alice \`without pictures or conversation?'`;

// console.log(testText.split(''));