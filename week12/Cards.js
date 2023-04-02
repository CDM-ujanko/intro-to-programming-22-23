class Card {
    value;
    suite

    constructor(value, suite) {
        this.value = value;
        this.suite = suite;
    }

    toString() {
        return `${this.value}${this.suite}`
    }

    valueOf() {
        return this.value;
    }
}

class Deck {
    deck = [];

    constructor() {
        let suits = ['C', 'D', 'H', 'S'];
        for (let i = 1; i < 15; i ++) {
            for (let j in suits) {
                let card = new Card(i, suits[j]);
                // this.deck.push([i, suits[j]]);
                this.deck.push(card);
            }
        }
    }

    toString() {
        let deck = '';
        for (let c in this.deck) {
            deck += this.deck[c].toString() + ', ';
        }

        return deck;
    }

    shuffle() {
        for (let i = this.deck.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = this.deck[i];
            this.deck[i] = this.deck[j];
            this.deck[j] = temp;
        }
    }

    giveOne() {
        return this.deck.pop();
    }
}

let results = {
    p1: 0,
    p2: 0,
    t: 0
}

for (let game = 0; game < 10000; game++) {
    let deck = new Deck();
    let p1 = [],
        p2 = [];

    deck.shuffle();
    for (let i = 0; i < 5; i++) {
        p1.push(deck.giveOne())
        p2.push(deck.giveOne())
    }


    for (let i = 0; i < 5; i++) {
        if (p1[i] > p2[i]) {
            // console.log('p1 wins');
            results.p1++
        } else if (p1[i] < p2[i]) {
            // console.log('p2 wins');
            results.p2++
        } else {
            results.t++
            // console.log('its a tie');
        }
    }
}

console.log(results);

// let c1 = new Card(12, 'H');
// let c2 = new Card(12, 'H');
// let c3 = c1;

// console.log(c1 === c2);
// console.log(c1 === c3);
//
//
//
//
// console.log(p1, p2);



// console.log(deck.toString());
// let card = deck.giveOne();
// console.log(card);
// console.log(card.value);
// console.log(card.suite);
// console.log(card.toString());
// deck.shuffle();
// console.log(deck.toString());

