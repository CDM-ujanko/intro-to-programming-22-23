class Animal {
    speak() {
        return '?'
    }

    legCount() {
        return '?'
    }
}

class Dog extends Animal {
    speak() {
        return 'Bark!';
    }
}

let animal = new Animal();
let dog = new Dog();

// console.log('Animal says:', animal.speak());
// console.log('Dog says:', dog.speak());
//
// console.log('Animal legs:', animal.legCount());
// console.log('Dog legs:', dog.legCount());

class Rectangle {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }

    area() {
        return this.a * this.b;
    }

    sur() {
        return 2 * this.a + 2 * this.b;
    }
}

class Square extends Rectangle {
    constructor(a) {
        super(a, a);
    }
}

// class Square {
//     constructor(a) {
//         this.a = a;
//     }
//
//     area() {
//         return this.a * this.a;
//     }
//
//     sur() {
//         return 4 * this.a;
//     }
// }

let rect = new Rectangle(23, 43);
console.log('Area', rect.area());
console.log('Sur', rect.sur());

let square = new Square(33);
console.log('Area', square.area());
console.log('Sur', square.sur());





