// Write function different() that takes a two-dimensional table as input and returns
// the number of distinct entries in the table.

function different(table) {
    let arr = [];
    for (let i = 0; i < table.length; i++) {
        for (let j = 0; j < table[i].length; j++) {
            let item = table[i][j];
            if (!arr.includes(item)) {
                arr.push(table[i][j]);
            }
            console.log('Item', item);
            console.log('Arr', arr);
        }
    }
    console.log(arr);
    console.log(arr.length);
}

function differentObj(table) {
    let obj = {};
    for (let i = 0; i < table.length; i++) {
        for (let j = 0; j < table[i].length; j++) {
            let item = table[i][j];
            // if (obj[item]) {
            //     obj[item] += 1;
            // } else {
            //     obj[item] = 1;
            // }
            obj[item] = '';
            console.log('Item', item);
            console.log('OBJ', obj);
        }
    }
    console.log(obj);
    console.log(Object.keys(obj).length);
}

let t = [[1, 0, 1], [0, 1, 0]]
differentObj(t)
// 2
t = [[32, 12, 52, 63], [32, 64, 67, 52], [64, 64, 17, 34], [34, 17, 76, 98]]
// different(t)
// 10