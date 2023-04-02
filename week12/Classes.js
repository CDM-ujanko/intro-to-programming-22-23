class Point {
    x;
    y;

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    get() {
        return [this.x , this.y]
    }

    setx(x) {
        this.x = x;
    }

    sety(y) {
        this.y = y;
    }

    move(dx, dy) {
        this.x += dx;
        this.y += dy;
    }
}

console.log(Point);

let point = new Point(10, 15);
let p2 = new Point(3, 4);
console.log(point.get());
console.log(p2.get());

p2.setx(77);
p2.sety(77);

console.log(p2.get());
p2.move(3, 4);

console.log(p2.get());

