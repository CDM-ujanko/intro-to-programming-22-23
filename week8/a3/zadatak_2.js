function yearIsLeap (year) {
 if (year % 4 === 0) {
    if (year % 100 === 0) {
        if (year % 400 === 0) {
            return (true);
        } else {
            return (false);
        }
    } 
    return (true);
 }
 return (false);
}

console.log(yearIsLeap(2008));
console.log(yearIsLeap(1900));
console.log(yearIsLeap(2000));
console.log(yearIsLeap(2001));