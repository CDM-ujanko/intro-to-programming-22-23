function myFirstFunction() {
    console.log('Hello World!');
}

let x = 5;

// myFirstFunction();
// myFirstFunction();
// myFirstFunction();
// myFirstFunction();

function twoPlusTwo() {
    return 2 + 2;
    console.log('This will never be executed!');
}

let a = myFirstFunction();
let b = twoPlusTwo();

// console.log('The value from myFirstFunction ', a);
// console.log('The value from twoPlusTwo ', b);

function square(a) {
    return a ** 2;
}

// console.log(square(2), square(4), square(16));

function kmToMiles(km) {
    return km * 0.6;
}

// console.log('100 km is ' + kmToMiles(100) + ' miles ' + x);
// console.log(`100 km is ${kmToMiles(100)} miles ${x}`);


function airQuality(aq) {
    if (aq < 50) {
        // console.log('The air is very clean!')
        return 'The air is very clean!';
    }

    if (aq < 100) {
        // console.log('The air is ok');
        return 'The air is ok!';
    }
}

// console.log(airQuality(45));


/**
 * Get the circle curcabrance. (Boban)
 * @param {number} r The radius.
 * @returns the curcabrance.
 */
function circleCurcabrance(r) {
    return (2 * r * Math.PI).toFixed(2);
}
console.log('The circleCurcabrance of 3 is', circleCurcabrance(3));

/**
 * Get the volume of a cube. (Lazar)
 * @param {number} a The side of a cube. 
 * @returns The volume.
 */
function cubeVolume(a) {
    return (a ** 3).toFixed(2);
}
console.log('The cubeVolume of 3 is', cubeVolume(3));

/**
 * The area of rectangle. (Sanja)
 * @param {number} a The A side
 * @param {number} b The B side 
 * @returns The area. 
 */
function rectangleArea(a, b) {
    return a * b;
}
console.log('The rectangleArea of 3 x 5 is', rectangleArea(3, 5));
