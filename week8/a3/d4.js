function pay(w, n) {
    let a = (w * 1.5)
    let b = (n - 40)
    let c = (40 * w)
    let f = ((c) + (b * a))

    if (n <= 40) {
        return (w * n)
    } else if (n >= 40 && n <= 60) {
        return ((c) + (b * a))
    } else if (n > 60) {
        let g = (n - 60)
        let e = (w * g * 2)

        return (e + f)
    }
}

console.log(pay(10, 35))


////

function leap(l) {
    if (l % 4 === 0 || l % !100 === 0) {
        return ('true')

    } else if (l % 400 === 0) {
        return ('true')
    } else if (l % !4 === 0 || l % !400 === 0) { // else?
        return ('false')
    }

}

console.log(leap(2000))

////

let ar1 = [
    [0, 156, 0, 0],
    [34, 0, 0, 0],
    [23, 123, 0, 34]
]

function pixels(ar1) {
    for (let r = 0; r < ar1.lenght; r++) {
        console.log('GOVNO!');
        for (let c = 0; c < ar1[r]; r++) {
            if (ar1 [r] [c] = 0) {

            }
        }
    }
}

console.log(pixels(ar1))

////
//function birthState (bs){
let uspres = {
    Connecticut: 'George Walker Bush',
    Arkansas: 'William Jefferson Clinton',
    Massachussetts: 'George Herbert Walker Bush',
    Illinois: 'Ronald Wilson Reagan',
    Georgia: 'James Earl Carter Jr'

}


console.log(uspres.Illinois)
////


let text = 'all animals are equal but some animals are more equal than others'
let words = text.split(' ')


let wordscount = {}
for (let i in words) {
    let word = words[i]
    if (wordscount [word]) {
        (wordscount [word]) += 1

    } else {
        wordscount [word] = 1
    }

}
console.log(wordscount)