// let bla = 1;
// let myString = bla;

// bla = 2;
// console.log(myString, bla);

let myString = "I'm feeling very 'good'!";

// for (let i in myString) {
// // for (let i = 0; i < myString.length; i++) {
//     console.log(`${i} => ${myString[i]}`);
// }

// console.log(
//     "I feel very 'good'\n",
//     'I feel very "good"\n',
//     `I have a single ('), double (")\n`,
//     'I feel very \'good\'\n',
// )

// Getting feel 
// console.log(myString.substring(2, 6));

// Getting ee and oo
// let ee = myString.substring(3, 5);
// let oo = myString.substring(14, 16);
// console.log(ee + oo);

// let replace = "good";
// let goodIndex = myString.indexOf(replace);
// let firstPart = myString.substring(0, goodIndex);
// let secondPart = myString.substring(goodIndex + replace.length);

// console.log(goodIndex);
// console.log(firstPart + ' FANCY! ' + secondPart);

// console.log(myString.replace(replace, 'WHATEVER!'));

// console.log(myString.toUpperCase());
// console.log(myString.toLowerCase());

// let name = 'sANJA';
// console.log(name.substring(0, 1).toUpperCase() + name.substring(1).toLowerCase());
// console.log(name);

let words = myString.split(' ');

console.log(words);
for(let i in words) {
    console.log(i, words[i]);
    if (words[i] === "'good'!") {
        console.log('We have a match!');
        words[i] = "'bad'!";
    }
}

console.log(words.join(' '));