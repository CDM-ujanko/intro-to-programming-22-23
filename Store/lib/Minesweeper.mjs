const FILED_SIZE = 10;
const MINE_COUNT = 10;

class Point {
    hasBomb;
    count = 0;
    #open = false;
    #marked = false;
    #i;
    #j;
    test = 123;

    /**
     * Initialize the pont
     * @param {Boolean} hasBomb Does the point have a bomb.
     * @param {Number} i
     * @param {Number} j
     */
    constructor(hasBomb, i, j) {
        this.hasBomb = hasBomb;
        this.#i = i;
        this.#j = j;
    }

    // /**
    //  * Get the count of bombs touching the point.
    //  * @return {number}
    //  */
    // get count() {
    //     return this.#count;
    // }

    // /**
    //  * Check if the point has a bomb.
    //  * @return {Boolean}
    //  */
    // get hasBomb() {
    //     return this.#hasBomb;
    // }

    /**
     * Add one to the count of bombs touching the point.
     */
    add() {
        this.count++;
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

        // if (!this.#open) {
        //     return 'X'
        // }

        if (this.hasBomb) {
            return 'B';
        }

        return `${this.count}`;
    }
}

class Minesweeper {
    table = [];

    constructor() {
        this.table = this.generateTable();
    }

    generateMines() {
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
    generateTable() {
        let table = [];
        let mines = this.generateMines();
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
            let adjacent = this.findAdjacent(table, bomb.i, bomb.j);
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
    findAdjacent(table, i, j) {
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
        // printTable(table);
        // let pick = prompt('What field should we open i,j? ');
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
            // printTable(table);
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

export {
    Minesweeper
}