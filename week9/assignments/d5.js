function fib(n) {
    let prev = 0
    let cur = 1

    while (cur < n) {
        let sum = prev + cur;
        prev = cur;
        cur = sum
    }

    return cur + prev
}

console.log(fib(8))

//////

// function mystery(b) {
//     p = 0
//     c = 1
//     while (c < 1) {
//         let s =
//
//     }
// }

// console.log(mystery(25))