function wordChecker(word) {
    let letter = word.charAt(0);
    if (isNaN(letter)) {
        console.log('Unknown');
        return;
    }

    if (letter === letter.toUpperCase()) {
        console.log('capitalized');
    } else if (letter === letter.toLowerCase()) {
        console.log('not capitalized');
    } else {
        console.log('Unknown');
    }
}

function casee(word) {
    let up = "A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z";
    let lo = ("a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y,z")
    let num = (0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
    if (word[0] === num)
        console.log('unknown')

    else if (word[0] === word[0].toUpperCase()) {
        console.log('capitalized')
    } else if (word[0] === word[0].toLowerCase()) {
        console.log('not capitalized')
    }
}

function rps(ply1, ply2) {
    if (ply1 === 'p' && ply2 === 'r' || ply1 === 'r' && ply2 === 's' || ply1 === 's' && ply2 === 'r') {
        console.log(1)
    } else if (ply2 === 'p' && ply1 === 'r' || ply2 === 'r' && ply1 === 's' || ply2 === 's' && ply1 === 'r') {
        console.log(-1)
    } else {
        console.log(0)
    }
}

function rps2(p1, p2) {
    let res = {
        'RS': -1,
        'SR': 1,
        'RP': 1,
        'PR': -1,
        'SP': -1,
        'PS': 1
    }

    let key = p1 + p2;

    if (res.hasOwnProperty(key)) {
        return res[key];
    } else {
        return 0;
    }
}
//
// console.log(rps2('S', 'R'));
// console.log(rps2('P', 'R'));
// console.log(rps2('P', 'P') );
// console.log(rps2('P', 'Z') );

function exclamation(string) {
    let word = '';
    for (let i = 0; i < string.length; i++) {
        word += string[i];
        let vo = "aeiou"
        if (vo.includes(string[i])) {
            word += string[i] + string[i]  + string[i] ;
        }
    }
    return word + '!';
}
console.log(exclamation('argh'));

