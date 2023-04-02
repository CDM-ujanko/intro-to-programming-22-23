let arr = ['one', 'two', 'seven', 11];

for(let i = 0; i < arr.length; i++) {
    console.log('Index: ', i, 'Item: ', arr[i]);
}

console.log('----');

for (i in arr) {
    console.log('Index: ', i, 'Item: ', arr[i]);
}

console.log('----');
let word = 'myverylongword';
for (w in word) {
    console.log('Index: ', w, 'Item: ', word[w]);
}

console.log('----');
let m = 0;
while(m < arr.length) {
    console.log('Index: ', m, 'Item: ', arr[m]);
    // m++;
}


