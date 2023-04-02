function rcountdown (n) {
    if (n === 0) {
        console.log('Blastoff!');
    } else {
        console.log(n);
        countdown(n-1);
    }
}

function countdown(n) {
    while (n > 0) {
        console.log(n);
        n--
    }
    console.log('Blastoff!');
}

// countdown(3);
// rcountdown(130);