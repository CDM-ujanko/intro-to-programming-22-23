

function fib(n) {
    let curr = 1;
    let prev = 0;
    let sum = 0;
    let i = 0;
    if (n >= 0) {
        sum = prev + curr;
        while (i < n) {
            sum = prev + curr;   
            prev = curr;
            curr = sum;
            i++;
        }
        return sum;
    } else {
        throw "number is negative";
    }
    
}


console.log(fib(0));
console.log(fib(4));
console.log(fib(8));