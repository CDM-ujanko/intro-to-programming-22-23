function koch(n) {
    if (n === 0) {
        return 'F';
    } else {
        let next = koch(n-1);
        // return next + ' L ' + next + ' R ' + next + ' L ' + next;
        return `${next} L ${next} R ${next} L ${next}`;
    }
}
console.log(koch(1));
console.log(' ----- ')
console.log(koch(2));
console.log(' ----- ')
console.log(koch(3));
console.log(' ----- ')
console.log(koch(4));
console.log(' ----- ')
