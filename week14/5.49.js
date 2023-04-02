// 5.49 Note: It's not hard to do, read multiple times:
// The Heron method is a method the ancient Greeks used to compute the square root of
// a number n. The method generates a sequence of numbers that represent better and better
// approximations for √n. The first number in the sequence is an arbitrary guess; every other
// number in the sequence is obtained from the previous number prev using the formula
//
// 1/2 (prev + n /prev)
//
// Write function heron() that takes as input two numbers: n and error. The function should
// start with an initial guess of 1.0 for √n and then repeatedly generate better approximations
// until the difference (more precisely, the absolute value of the difference) between successive
// approximations is at most error.
// >>> heron(4.0, 0.5)
// 2.05
// >>> heron(4.0, 0.1)
// 2.000609756097561
// 2
// Turned in
// 2
// Assigned

function heron(n, err) {
    let prev = 1.0;
    console.log('Initial guess:', prev);
    while (Math.abs(prev * prev - n) > err) {
        console.log(`Checking ${prev * prev} against ${n}`);
        prev = 0.5 * (prev + n / prev);
        console.log('Guess:', prev);
    }

    return prev;
}

// heron(4.0, 0.5);
heron(4.0, 0.1);
