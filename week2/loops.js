// let list = ['Milk', 'Bread', 'Meat', 7];

// for (let i in list) {
//     console.log(list[i]);
// }

let numbers = [2, 8, 16, 32, 17];
let sum = 0;

for (let i in numbers) {
    console.log('Adding ' + numbers[i] + ' to ' + sum);
    sum = sum + numbers[i];
}

console.log('The sum is: ', sum )