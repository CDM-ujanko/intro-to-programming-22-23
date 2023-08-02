import * as fs from 'fs';
import * as fsP from 'fs/promises';

// console.log('Before the file!');
// let buff = fs.readFileSync('data.txt');
// console.log('Read the file', buff.toString());

// console.log('Before the file!');
// fs.readFile('data.txt', (err, buff) => {
//     if (err) {
//         //
//     }
//     console.log('Read the file', buff.toString());
// })
// console.log('after file!');

//
// console.log('Before the file!');
// let buff = fs.readFileSync('location.txt');
// let location = buff.toString();
// console.log('The location is:', location);
// let buff2 = fs.readFileSync(location);
// console.log('the contents of the file is: ', buff2.toString());

// console.log('Before the file!');
// fs.readFile('location.txt', (err, buff) => {
//     let location = buff.toString();
//     console.log('The location is:', location);
//     fs.readFile(location, (err, buff2) => {
//         console.log('the contents of the file is: ', buff2.toString());
//
//     })
//
// })
// console.log('after file!');

// fsP.readFile('location.txt')
//     .then(buff => {
//         console.log('red the file', buff.toString());
//         return fsP.readFile('123');
//     })
//     .then(buf => {
//         console.log('the contents of the file is: ', buf.toString());
//     })
//     .catch(err => {
//         console.log('something went wrong!', err)
//     });
//
// console.log('after promise!');


console.log('before file!');
try {
    let buf = await fsP.readFile('location.txt');
    console.log('read location', buf.toString());
    let buf2 = await fsP.readFile(buf.toString());
    console.log('the contents of the file is: ', buf2.toString());
} catch (err) {
    console.log('something went wrong', err);
}
console.log('after file!');



// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject('payload!');
//     }, 1000);
// });
//
// console.log(promise);
// promise
//     .then((resp) => {
//         console.log('promise done!', resp);
//     }).catch(err => {
//         console.log('something went wrong', err);
// })
//
// console.log('after promise!');