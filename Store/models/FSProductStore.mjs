import {AbstractProductStore} from './AbstractProductStore.mjs';
import fs from 'fs/promises';
const dataLocation = './data/products.txt';

async function readData() {
    let buff = await fs.readFile(dataLocation);
    // console.log('BUF!', buff);
    let json = buff.toString();
    // console.log('JSON', json);
    return JSON.parse(json);
}

let products = await readData();
// console.log('Initial data', products);

async function writeData(data) {
    let fileContent = JSON.stringify(data, null, 2);
    await fs.writeFile(dataLocation, fileContent);
}

export class FSProductStore extends AbstractProductStore {
    _products;

    constructor() {
        super();
        this._products = products
    }

    async create(item) {
        item.id = Date.now();
        this._products.push(item);
        await writeData(this._products);
        return item;
    }

     async read(id) {
        let product = this._products.find(p => p.id === parseInt(id));
        if (!product) {
            throw new Error(`No product with such id: ${id}`);
        }

        return product;
    }

    async update(item) {
        let index = this._products.findIndex(p => p.id === parseInt(item.id));
        if (index === -1) {
            throw new Error(`No product with such id: ${item.id}`);
        }

        this._products[index] = item;
        await writeData(this._products);

        return item;
    }

    async delete(id) {
        // super.delete(id);
        let index = this._products.findIndex(p => p.id === parseInt(id));
        if (index === -1) {
            throw new Error(`No product with such id: ${id}`);
        }

        let item = this._products.splice(index, 1);
        await writeData(this._products);
        return item;
    }

    async list() {
        return this._products;
    }
}