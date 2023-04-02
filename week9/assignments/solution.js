function mystery(n) {
    let times = 0;
    n = n / 2;
    while (n >= 1) {
        n = n / 2;
        // console.log(n);
        times += 1;
    }
    return times;

    // return Math.floor(Math.log2(n));
}

// console.log(mystery(4));
// console.log(mystery(11));
// console.log(mystery(25));

// function fib(n) {
//     let prev = 0
//     let cur = 1
//
//     while (cur < n) {
//         let sum = prev + cur;
//         prev = cur;
//         cur = sum
//     }
//
//     return cur + prev
// }

function fib(n) {
    let num1 = 0;
    let num2 = 1;
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum = num1 + num2;
        num1 = num2;
        num2 = sum;
    }
    return num2;
}

console.log(fib(0));
console.log(fib(4));
console.log(fib(8));
