function fib(n) {
    let num1 = 0; 
    let num2 = 1; 
    let sum = 0; 
    // let i = 0;
    for (var i = 0; i < n; i++)
    { 
        sum = num1 + num2; 
        num1 = num2; 
        num2 = sum; 
    } 
    return num2;


}

console.log(fib(0)); 
console.log(fib(4));
console.log(fib(8));


function mystery(n){
    let times = 0;
    if (n > 0) {
        while (n / 2 >= 1) {
            n = n / 2;
            times += 1;
        }
        return times;
    } else {
        console.log("Integer isn't positive")
    }
}

console.log(mystery(4));
console.log(mystery(11));
console.log(mystery(25));
