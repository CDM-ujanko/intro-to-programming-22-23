import Prompt from 'prompt-sync';
const prompt = Prompt();

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
    #hasBomb;
    #count = 0;
    #open = false;
    #marked = false;
    #i;
    #j;

    /**
     * Initialize the pont
     * @param {Boolean} hasBomb Does the point have a bomb.
     * @param {Number} i
     * @param {Number} j
     */
    constructor(hasBomb, i, j) {
        this.#hasBomb = hasBomb;
        this.#i = i;
        this.#j = j;
    }

    /**
     * Get the count of bombs touching the point.
     * @return {number}
     */
    get count() {
        return this.#count;
    }

    /**
     * Check if the point has a bomb.
     * @return {Boolean}
     */
    get hasBomb() {
        return this.#hasBomb;
    }

    /**
     * Add one to the count of bombs touching the point.
     */
    add() {
        this.#count++;
    }

    /**
     * Open a field
     */
    open() {
        this.#open = true;
    }

    /**
     * Mark the field as bomb field.
     */
    mark() {
        this.#marked = !this.#marked;
    }

    get isOpen() {
        return this.#open;
    }

    get i() {
        return this.#i;
    }

    get j() {
        return this.#j
    }


    /**
     * Overwrite the to string method.
     * @return {string}
     */
    toString() {
        if (this.#marked) {
            return 'M'
        }

        if (!this.#open) {
            return 'X'
        }

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

        // return color + ' ' + this.count + COLORS.reset;
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
    let table = [];
    let mines = generateMines();
    let bombs = [];

    for (let i = 0; i < FILED_SIZE; i++) {
        // Create fow
        table.push([]);

        for (let j = 0; j < FILED_SIZE; j++) {
            let hasBomb = mines.pop();
            let point = new Point(hasBomb, i, j);
            table[i].push(point);

            if (hasBomb) {
                bombs.push({i: i, j: j});
            }
        }
    }

    bombs.forEach((bomb) => {
        let adjacent = findAdjacent(table, bomb.i, bomb.j);
        adjacent.forEach((p) => p.add());
    })

    return table;
}

/**
 * Find all the adjacent points.
 * @param {Array} table The table.
 * @param {number} i The I coordinate
 * @param {Number} j The J Coordinate
 * @return {Array<Point>} The array for adjacent Points.
 */
function findAdjacent(table, i, j) {
    const COMBINATIONS = [
        {i: -1, j: -1},
        {i: -1, j: 0},
        {i: -1, j: 1},
        {i: 0, j: -1},
        {i: 0, j: 1},
        {i: 1, j: -1},
        {i: 1, j: 0},
        {i: 1, j: 1}
    ];

    let adjacent = [];
    COMBINATIONS.forEach((p) => {
        if (table[i + p.i] && table[i + p.i][j + p.j]) {
            adjacent.push(table[i + p.i][j + p.j])
        }
    })

    return adjacent;
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

function playGame() {
    const instructions = `
- Type the coordinates to open a field i,j: 3,4
- Add m as a prefix to mark a field as a bomb: mi,j: m3,4 
`
    let mineCount = MINE_COUNT;
    let table = generateTable();
    let marked = [];

    while (mineCount > 0) {
        printTable(table);
        let pick = prompt('What field should we open i,j? ');
        let mark = pick.startsWith('m');

        if (mark) {
            pick = pick.replace('m', '');
        }

        let coordinates = pick.split(',');
        if (coordinates.length !== 2) {
            console.log('Invalid coordinates');
            continue;
        }

        let i = parseInt(coordinates[0]);
        let j = parseInt(coordinates[1]);

        if (i < 0 || j < 0 || i > FILED_SIZE - 1 || j > FILED_SIZE -1) {
            console.log('Invalid coordinates');
            continue;
        }

        let point = table[i][j];
        if (point.isOpen) {
            console.log('The Field is already open');
            continue;
        }

        if (mark) {
            point.mark();
            marked.push(point);

            if (MINE_COUNT === marked.length && marked.every((p) => p.hasBomb)) {
                table.forEach(row => row.forEach(p => p.open()))
                printTable(table);
                console.log('YOU WIN!');
                return;
            }
            continue;
        }

        point.open();
        if (point.hasBomb) {
            table.forEach(row => row.forEach(p => p.open()))
            printTable(table);
            console.log('GAME OVER');
            return;
        }

        if (point.count === 0) {
            let toOpen = findAdjacent(table, i, j);
            while(toOpen.length > 0) {
                let p = toOpen.pop();
                if (!p.hasBomb && p.count === 0) {
                    let adj = findAdjacent(table, p.i, p.j);
                    adj.forEach((point) => {
                        if (!point.hasBomb && !point.isOpen && !toOpen.includes(point)) {
                            toOpen.push(point)
                        }
                    })
                }

                if (!p.hasBomb) {
                    p.open();
                }
            }
        }
    }

}

playGame();