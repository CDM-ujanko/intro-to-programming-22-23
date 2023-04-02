let text = 'In 1992, Tim Berners-Lee circulated a document titled HTML Tags, which outlined just 20 tags, many of' +
    ' which are now obsolete or have taken other forms. The first surviving tag to be defined in the document, ' +
    'after the crucial anchor tag, is the paragraph tag. It wasn’t until 1993 that a discussion emerged on' +
    ' the proposed image tag.'

text = text.replaceAll(',', '');
text = text.replaceAll('.', '');
text = text.toLowerCase();
// console.log(text);

let words = text.split(' ');
// console.log(words);

let wordCount = {};
for (let i in words) {
    let word = words[i];
    // console.log(word);
    if (!wordCount[word]) {
        wordCount[word] = 1;
    } else {
        wordCount[word] += 1;
    }
}

console.log(wordCount);
console.log(words.length);
console.log(Object.keys(wordCount).length);

let count = 0;
for (let key in wordCount) {
    count += wordCount[key];
}

console.log(count);

let values = Object.values(wordCount);

console.log(values);

let cnt = 0;
for (let i = 0; i < values.length; i++) {
    cnt += values[i];
}
console.log(cnt);

