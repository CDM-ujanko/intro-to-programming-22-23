let arr = [1, 3, 7];

console.log(arr[1]);

let phonebook = [
    ['Sanja', '041200200'],
    ['Lazar', '555555555']
]

// for (let i = 0; i < phonebook.length; i++) {
//     if (phonebook[i][0] === 'Lazar') {
//         console.log(phonebook[i][1])
//     }
// }

let objectPhonebook = {
    lazar: ['0611543312', '0112151584'],
    sanja: {mob: '0601549956', home: '0112151584'},
    boban: '0653924800',
    uros: '0637098656',
    keys: function () {
        console.log('I am the keys function!');
    }
    // key: 'OVO!'
    // 16261652: 'duhauhdad'
};

console.log(objectPhonebook.boban);
// console.log(objectPhonebook['16261652']);

if (objectPhonebook.milica) {
    console.log(objectPhonebook.milica.mob);
} else {
    console.log('Nema milice!');
}

console.log(objectPhonebook?.milica?.mob);

for (let key in objectPhonebook) {
    console.log(key, objectPhonebook[key], objectPhonebook.key);
}


objectPhonebook.milica = '0648877665';

console.log(objectPhonebook);
console.log(Object.keys(objectPhonebook));
console.log(Object.values(objectPhonebook));

console.log(objectPhonebook.keys())