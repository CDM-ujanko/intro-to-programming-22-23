function find(num) {
    prev = 0;
    cur = 1;

    let print = [prev, cur];
    while (cur + prev < num) {
        let sum = prev + cur;
        prev = cur;
        cur = sum;
        print.push(cur)
    }

    // console.log(print.pop())
    console.log(print);
    return cur;
}

console.log(find(15));