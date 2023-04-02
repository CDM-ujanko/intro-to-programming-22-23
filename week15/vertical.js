function vertical(n) {
    if (n < 10)  {
        console.log(n)
    } else {
        vertical(Math.floor(n / 10))
        console.log(n % 10)
    }
}


vertical(4375)
// 4
// 3
// 7
// 5

function reverse(n) {
    if (n < 10)  {
        console.log(n)
    } else {
        console.log(n % 10)
        reverse(Math.floor(n / 10))
    }
}
console.log(' ')
reverse(4375)