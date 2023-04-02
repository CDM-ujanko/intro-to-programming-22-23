let first= 'john'
let last = 'doe'
let street= 'main street'
let number = '123'
let city = 'any city'
let zipcode = '09876'
let state = 'as'

// console.log (
// first + ' ' + last + ',\n' +
// number + ' ' + street + '\n'
// )

function prtintAddress(first, last, number, street) {
console.log(
`${first} ${last},
${number} ${street},
`)
}

// prtintAddress(first, last, number, street);

function even (n) {
    let output = '';
    let arr = [];
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0 || i % 3 === 0) {
            // console.log(i);
            output = output + i + ',';
            arr.push(i);
        }
    }

    console.log(arr.join(','));
    // console.log(output);

}

even(553);