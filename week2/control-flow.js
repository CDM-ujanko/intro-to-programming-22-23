if (process.argv.length < 3) {
    console.log('We need at least 1 argument!');
    return;
}

// This is just a comment node will ignore!
let outsideTemp = process.argv[2];

console.log('The tmperature outsiside is ' + outsideTemp + 'C');

if (outsideTemp > 25) {
     console.log('It is vert hot, do not go outsize!');
     if (outsideTemp > 40) {
        console.log('You should hide in a fridge!');
     }
} else if (outsideTemp < 1) {
    console.log('It is Freezing outsize, DO NOT GO OUT!');
} else if (outsideTemp < 10) {
    console.log('It is vert cold, brrrr! Stay inside!');
} else {
    console.log('It is not too hot, have fun!')
}
