const fs = require('fs');

try {
    let data = fs.readFileSync('./myFile.txt');
    console.log(data.toString());
} catch (e) {
    console.log('The file does not exist!', e.message)
}

let arr = [1, 2];
console.log(arr[2]);

function h(n) {
    console.log('Start h')
    if (n === 0) {
        throw 'Divide by 0 exception!';
    }
    console.log(n)
    console.log(1 / n)
}

function g(n) {
    console.log('Start g')
    h(n - 1)
    console.log(n)
}

function f(n) {
    console.log('Start f')
    g(n - 1)
    console.log(n)
}


try {
    f(2);
} catch (e) {
    console.log(e);
}

console.log('After F!');