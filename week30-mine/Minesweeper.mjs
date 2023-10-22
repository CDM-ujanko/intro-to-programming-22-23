
const FILED_SIZE = 10;
const MINE_COUNT = 10;

class Point {
    hasBomb;
    #count = 0;

    constructor(hasBomb) {
        this.hasBomb = hasBomb;
    }

    add() {
        this.#count++;
    }

    valueOf() {
        if (this.hasBomb) {
            return 'B'
        }

        return `${this.#count}`;
    }

    toString() {
        if (this.hasBomb) {
            return 'B'
        }

        return `${this.#count}`;
    }
}

function generateMines() {
    let mines = [];
    for (let i = 0; i < MINE_COUNT; i++) {
        mines.push(true);
    }

    for (let i = 0; i < FILED_SIZE * FILED_SIZE - MINE_COUNT; i++) {
        mines.push(false);
    }

    mines.sort((a, b) => 0.5 - Math.random());
    return mines;
}


function generateTable() {
    let field = [];
    let mines = generateMines();

    for (let i = 0; i < FILED_SIZE; i++) {
        // Create fow
        field.push([]);

        for (let j = 0; j < FILED_SIZE; j++) {
            let point = new Point(mines.pop());
            field[i].push(point);
        }
    }
    return field;
}

function countMines(table) {
    const SIZE_X = table[0].length;
    const SIZE_Y = table.length;

    for (let i = 0; i < SIZE_Y; i++) {
        for (let j = 0; j < SIZE_X; j++) {
            if (table[i][j].hasBomb) {
                continue;
            }

            if (j > 0 && table[i][j - 1].hasBomb) {
                table[i][j].add();
            }

            if (j !== SIZE_Y - 1 && table[i][j + 1].hasBomb) {
                table[i][j].add();
            }

            if (i > 0 && table[i - 1][j].hasBomb) {
                table[i][j].add();
            }

            if (i !== SIZE_X - 1 && table[i + 1][j].hasBomb) {
                table[i][j].add();
            }
        }
    }
    return table;
}

// t[i][j]
// levo desno
// t[i][j-1], t[i][j+1]
// gore dole
// t[i-1][j], t[i+1][j]
// leve diagonale
// t[i-1][j-1], t[i+1][j-1]
// desne diagonale
// t[i-1][j+1], t[i+1][j+1]



// console.log(generateMines());
let table = generateTable();
// console.table(table);
console.table(countMines(table));

