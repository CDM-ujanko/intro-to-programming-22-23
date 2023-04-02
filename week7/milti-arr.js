let arr = [
    [1, 2 , 4, 0],
    [4, 44, 5, 8],
    [7, 12, 3, 9]
];

function printMultiArr(a) {
    for (let r = 0; r < a.length; r++) {
        console.log(`Row ${r} => [${a[r]}]`);
    }
}



function sumMultiArr(arr) {
    let sum = 0;

    for (let r = 0; r < arr.length; r++) { 
        console.log(arr[r]);
        for(let c = 0; c < arr[r].length; c++) {
            sum += arr[r][c];
        }
    }

    return sum;
}


function addToMultiArr(arr, num) {
    for (let r = 0; r < arr.length; r++) { 
        for (let c = 0; c < arr[r].length; c++ ) {
            arr[r][c] += num;
        }
    }

    return arr;
}

printMultiArr(arr)
console.log('----- ')
// printMultiArr(addToMultiArr(arr, 2));
console.log(sumMultiArr(addToMultiArr(arr, 10)));