// 3.1
// Implement a program that requests the current temperature in degrees Fahrenheit from the
// user and prints the temperature in degrees Celsius using the formula
// celsius =
// 5/9 (fahrenheit − 32)

function farenheitToCelsius(f) {
    let c = 5/9 * (f - 32);
    return c;
}

console.log(farenheitToCelsius(process.argv[2]));
