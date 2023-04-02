

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