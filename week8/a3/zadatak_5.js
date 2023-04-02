let text = "all animals are equal but some animals are more equal than others";
let words = text.split(' ');


console.log(words);
let wordCount = {};
for (let i in words) {
    let word = words[i];
    if (wordCount[word]){
        wordCount[word] += 1;
    } else {
        wordCount[word] = 1;
    }

    console.log (i, word);
    console.log(i, JSON.parse(JSON.stringify(wordCount)))
}
console.log(wordCount);