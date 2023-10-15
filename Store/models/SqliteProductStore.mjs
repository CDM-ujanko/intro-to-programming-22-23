import {AbstractProductStore} from './AbstractProductStore.mjs';
import sqlite3 from 'sqlite3';

const db = await new sqlite3.Database('./data/database.sqlite');

db.run(`CREATE TABLE IF NOT EXISTS Products(
    id  INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT(1000) NOT NULL,
    description TEXT(5000) NOT NULL,
    price NUMERIC NOT NULL,
    preview TEXT(2000) NOT NULL
    );
`);

// db.run(`
// INSERT INTO Products(name, price, description, preview)
// VALUES ('House', 12456.65, 'Description!', '')
// `);

export class SqliteProductStore extends AbstractProductStore {
    constructor() {
        super();
    }


    async create(item) {
        return await new Promise((resolve, reject) => {
            db.run(`INSERT INTO products(name, price, description, preview) VALUES (?, ?, ?, ?) `,
                [item.name, item.price, item.description, item.preview],
                function (err, row) {
                    if (err) {
                        return reject(err);
                    }

                    return resolve(this.lastID);
                });
        })
    }

    async read(id) {
        return await new Promise((resolve, reject) => {
            db.get(`SELECT * FROM products WHERE id = ?`, id, function (err, row) {
                if (err) {
                    return reject(err);
                }

                return resolve(row);
            })
        })
    }

    async update(item) {
        return await new Promise((resolve, reject) => {
            db.run(`UPDATE products SET name = ?, price = ?, description = ?, preview = ? WHERE id = ?`,
                [item.name, item.price, item.description, item.preview, item.id],
                function (err, row) {
                if (err) {
                    return reject(err);
                }

                return resolve(row);
            })
        })
    }

    async delete(id) {
        return await new Promise((resolve, reject) => {
            db.run(`DELETE FROM products  WHERE id = ?`,
                id,
                function (err, row) {
                    if (err) {
                        return reject(err);
                    }

                    return resolve(row);
                })
        })
    }

    async list() {
        return await new Promise((resolve, reject) => {
            db.all('SELECT * FROM Products', (err, row) => {
                if (err) {
                    return reject(err);
                }

                return resolve(row);
            });
        })
    }
}