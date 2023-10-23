const FILED_SIZE = 10;
const MINE_COUNT = 10;

// https://chrisyeh96.github.io/2020/03/28/terminal-colors.html
const COLORS = {
    reset: "\x1b[0m",
    bright: "\x1b[1m",
    dim: "\x1b[2m",
    underscore: "\x1b[4m",
    blink: "\x1b[5m",
    reverse: "\x1b[7m",
    hidden: "\x1b[8m",

    fg: {
        black: "\x1b[30m",
        red: "\x1b[31m",
        green: "\x1b[32m",
        yellow: "\x1b[33m",
        blue: "\x1b[34m",
        magenta: "\x1b[35m",
        cyan: "\x1b[36m",
        white: "\x1b[37m",
        gray: "\x1b[90m",
        crimson: "\x1b[38m"
    },
    bg: {
        black: "\x1b[40m",
        red: "\x1b[41m",
        green: "\x1b[42m",
        yellow: "\x1b[43m",
        blue: "\x1b[44m",
        magenta: "\x1b[45m",
        cyan: "\x1b[46m",
        white: "\x1b[47m",
        gray: "\x1b[100m",
        crimson: "\x1b[48m"
    }
};

class Point {
    hasBomb;
    #count = 0;

    /**
     * Initialize the pont
     * @param {Boolean} hasBomb Does the point have a bomb.
     */
    constructor(hasBomb) {
        this.hasBomb = hasBomb;
    }

    /**
     * Get the count of bombs touching the point.
     * @return {number}
     */
    get count() {
        return this.#count;
    }

    /**
     * Add one to the count of bombs touching the point.
     */
    add() {
        this.#count++;
    }

    /**
     * Overwrite the to string method.
     * @return {string}
     */
    toString() {
        if (this.hasBomb) {
            return `${COLORS.fg.cyan}B${COLORS.reset}`;
        }

        let color = COLORS.reset;

        // Just adding colors for the terminal.
        if (this.#count === 1) {
            color = COLORS.fg.green;
        } else if (this.#count === 2) {
            color = COLORS.fg.blue;
        } else if (this.#count === 3) {
            color = COLORS.fg.magenta;
        } else if (this.#count === 4) {
            color = COLORS.fg.red;
        } else if (this.#count === 5) {
            color = COLORS.fg.cyan;
        } else if (this.#count === 6) {
            color = COLORS.fg.yellow;
        }

        return `${color}${this.count}${COLORS.reset}`;
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


/**
 * Generate the table based on the size of the grid.
 */
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

/**
 * Count the mines.
 * NOTE: There is a better way of doing this (we are already know where the bombs are when we generate the table)
 * @param {Array} table The initial table.
 * @return {Array} The table with updated counts.
 */
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

/**
 * Log the game in a pretty output.
 * @param {Array} table The table.
 */
function printTable(table) {
    // Generate the first row (header)
    let header = '  | '
    table[0].forEach((row, i) => {
        header += `${i} `
    })

    // Print the header with underscore
    console.log(COLORS.underscore + header + COLORS.reset);

    table.forEach((row, i) => {
        console.log(`${i} | ${row.join(' ')}`);
    })
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


let table = generateTable();
table = countMines(table);
printTable(table);