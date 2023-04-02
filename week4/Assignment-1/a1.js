// 3.1
// Implement a program that requests the current temperature in degrees Fahrenheit from the
// user and prints the temperature in degrees Celsius using the formula
// celsius =
// 5/9 (fahrenheit − 32)

function farenheitToCelsius(f) {
    let c = 5/9 * (f - 32);
    return c;
}


// 3.2
// Translate these conditional statements into Python if statements:
// (a) If age is greater 62, print 'You can get your pension benefits'.
// (b) If name is in list ['Musial', 'Aaraon', 'Williams', 'Gehrig', 'Ruth'],
// print 'One of the top 5 baseball players, ever!'.
// (c) If hits is greater than 10 and shield is 0, print 'You are dead...'.
// (d) If at least one of the Boolean variables north, south, east, and west is True, print
// 'I can escape.'.

function ageLimit(al) {
    if (al > 62) {
        return 'You can get your pension benefits!'
    }
}

console.log(ageLimit(63));

function players(p) {
    let players = ['Musial', 'Aaraon', 'Williams', 'Gehrig', 'Ruth'];
    if (players.includes(p)) {
        return 'One of the top 5 baseball players, ever!'; 
    }
}

console.log(players('Pera!'));
console.log(players('Aaraon'));


// 3.5
// Implement a program that requests from the user a list of words (i.e., strings) and then prints
// on the screen, one per line, all four-letter strings in the list.

// Enter word list: ['stop', 'desktop', 'top', 'post']
// stop
// post

function checkLenght(arr) {
    for (let i in arr) {
        if (arr[i].length === 4) {
            console.log(arr[i])
        }
    }
}

let ex = ['stop', 'desktop', 'top', 'post']
console.log(checkLenght(ex));

// 3.6
// Write the for loop that will print these sequences of numbers, one per line, in the interactive
// shell.
// (a) Integers from 0 to 9 (i.e., 0, 1, 2, 3, 4, 5, 6, 7, 8, 9)
// (b) Integers from 0 to 2 (i.e., 0, 1)

for (let i = 0; i < 15; i++) {
    console.log(i)
}

for (let i = 0; i < 2; i++) {
    console.log(i)
}

for (let p = 1.0; p > 0.2; p /= 5) {
    console.log(p);
}

// 3.8
// Define, directly in the interactive shell, function perimeter() that takes, as input, the radius of a circle (a nonnegative number) and returns the perimeter of the circle. A sample
// usage is:
// >>> perimeter(1)
// 6.283185307179586
// >>> perimeter (2)
// 12.566370614359172
// Remember that you will need the value of π (defined in module math) to compute the
// perimeter.

function perimeter(r) {
    return 2 * r * Math.PI;
}

console.log(perimeter(1));
console.log(perimeter(2));

// 3.9
// Implement function average() that takes two numbers as input and returns the average of
// the numbers. You should write your implementation in a module you will name average.py.
// A sample usage is:
// >>> average(1,3)
// 2.0
// >>> average(2, 3

function average(a, b) {
    return (a + b) / 2; 
}

console.log(average(1, 3));
console.log(average(4, 22));
