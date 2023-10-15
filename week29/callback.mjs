import fs from "fs";
import fsP from "fs/promises";

console.log('Function before callback');
fs.readFile('text.txt', (err, buff) => {
    if (err) {
        console.error(err);
        return;
    }

    console.log('Read the file', buff.toString());
});
console.log('Function after callback');

console.log('---------');
console.log('Function before promise');
fsP.readFile('text.txt').then(buff => {
    console.log('Read the file', buff.toString());
}).catch(err => {
    console.error(err);
})
console.log('Function after promise');


let promise = new Promise((resolve, reject) => {
    if (err) {
        return reject();
    }

    return resolve();
})