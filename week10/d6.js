function cointoss() {
    return (Math.random() ) >0.5
}

function manhattan(r, c) {
    let grid = [];
    for (let i = 0; i < r; i++) {

        let red = []
        for (let j = 0; j < c; j++) {
            red.push(0)
        }
        grid.push(red)
    }

    let x = Math.floor(r / 2)
    let y = Math.floor(c / 2)

    while (grid[x] && grid[x][y] >= 0) {
        let dir = 1
        grid[x][y] += 1;
        if (cointoss()) {
            dir = -1
        }
        if (cointoss()) {
            x += dir
        }
        else {
            y += dir
        }
    }
    return grid
}
console.table(manhattan(11, 11))
//console.log(manhattan(11))