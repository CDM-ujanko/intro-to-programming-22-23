let arr = [1, 3, 7, 44];

let double = arr.map((item) => item * 2);

console.log(arr)
console.log(double);

let square = arr.map(item => item ** 2);
console.log(square);

let strArr = ['one', 'seven', 'cow'];

let strArr2 = strArr.map(item => 'prefix-' + item);
console.log(strArr);
console.log(strArr2);
console.log('-------');

let odd = arr.filter((item) => {
    console.log('hg')
    return item % 2 !== 0;
});
console.log(odd);

let all = arr.filter(item => true);

let none = arr.filter(item => false);

console.log(all);
console.log(none);

let shortMapped = strArr
    .map(item => item + '-suffix')
    .filter(item => item.length < 12);

console.log(shortMapped);
console.log('-----------')
let sum = arr.reduce((acc, cur) => acc + cur, 0);
console.log(sum)
let product = arr.reduce((acc, cur) => acc * cur, 1);
console.log(product)


let str = strArr.reduce((acc, cur) => acc + '-' + cur, '');
console.log(str);


