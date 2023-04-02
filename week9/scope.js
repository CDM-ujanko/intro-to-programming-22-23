// let x = 12;
//
// function f() {
//     let a = 3;
//     x = 7;
//     console.log('X in the function f is ', x);
//     console.log('A in the function f is ', a);
// }
//
// function f2() {
//     let a = 4;
//     console.log('X in the function f2 is ', x);
//     console.log('A in the function f2 is ', a);
// }
//
//
// console.log('X outside the function is', x);
// // console.log('2. A outside the function is', a);
// f2();
// console.log('X outside the function is', x);
// f();
// f2();

// let x = 0;
//
// function f(y) {
//     let x = 7;
//     console.log(`x in f ${x}`);
//     return y * x;
// }
//
// function g(x, y) {
//     console.log(`x in g ${x}`);
//     return x * y;
// }
//
// console.log(`global x ${x}`);
//
// console.log(x * 3);
//
// console.log(f(3));
//
// console.log(g(6, 3));

// function h(n) {
//     console.log('Start h')
//     console.log(1 / n)
//     console.log(n)
// }
//
// function g(n) {
//     console.log('Start g')
//     h(n - 1)
//     console.log(n)
// }
//
// function f(n) {
//     console.log('Start f')
//     g(n - 1)
//     console.log(n)
// }
//
// f(4);

let m = 3;

if (true) {
    var n = 2;
    console.log(`n is ${n}`);
}

function f() {
    var x = 4;
    if (true) {
        var y = 2;
    }
    console.log(`x in f ${x}`);
    console.log(`y in f ${y}`);
}

// f();
// console.log(m, n);

// for (var i = 0; i < 10; i++) {
//     //
// }
// console.log(i);
//
// for (var i = 0; i < 10; i++) {
//     //
// }