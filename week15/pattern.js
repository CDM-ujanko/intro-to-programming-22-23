function pattern(n) {
    if (n === 0) {
        return 0;
    } else {
        return `${pattern(n - 1)} ${n} ${pattern(n-1)}`;
    }
}

console.log(pattern(2));