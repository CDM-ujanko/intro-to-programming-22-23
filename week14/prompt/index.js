const prompt = require('prompt-sync')();

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
        if (this.value > 10) {
            return 10;
        }

        return this.value;
    }
}

class Deck {
    deck = [];

    constructor() {
        let suits = ['C', 'D', 'H', 'S'];
        for (let i = 1; i < 15; i++) {
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

let deck = new Deck();
deck.shuffle();


let dealer = 0;

while (dealer < 15) {
    let card = deck.giveOne();
    console.log(`Dealer got ${card}`);
    dealer += card;
}
console.log(`Dealer has ${dealer}`)

if (dealer > 21) {
    console.log(`Congratulations! You win!`);
    return;
}

let card = deck.giveOne();
console.log(`You got ${card}`);
let user = card.valueOf();
let input = prompt('Type HIT to get a card, STOP to hold! ');
while (input.toLowerCase() === 'hit') {
    let c = deck.giveOne();
    console.log(`You got ${c}`);
    user += c;
    console.log(`Total ${user}`);
    input = prompt('HIT/STOP? ');
}

if (user > 21) {
    console.log(`Better luck next time! :(`);
    return;
}

if (user > dealer) {
    console.log(`Congratulations! You win!`);
} else if (dealer > user) {
    console.log(`Better luck next time! :(`);
} else {
    console.log(`Its a draw!`);
}
