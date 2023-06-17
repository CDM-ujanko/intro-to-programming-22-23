import {default as cube, addTwo as pera} from './math.js';
import {readFileSync} from 'fs';

console.log(readFileSync('../index.html').toString());
console.log(cube(4));

console.log(pera(1, 4));
// console.log(square(1, 4));


// console.log(math.addTwo(1, 4));
// console.log(math.square(4));