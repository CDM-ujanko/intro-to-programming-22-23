// 5.23

function pay(satnica, broj_sati) {
    let plata
    if (broj_sati <= 40) {
        plata = satnica * broj_sati;
    }
    else if ((40 < broj_sati) && (broj_sati <= 60)) {
        plata = satnica * 40 + satnica * 1.5 * (broj_sati - 40);
    }
    else {
        plata = satnica * 40 + satnica * 1.5 * 20 + satnica * 2 * (broj_sati - 60);
    }

    return(plata);
}

// console.log(pay(10, 35));
// // 350
// console.log(pay(10, 45));
// // 475.0
// console.log(pay(10, 61));
// // 720.0

// 5.35
function pixels(arr) {
    let nonDark = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let l = 0; l < arr[i].length; l++) {
            if (arr[i][l] > 0) {
                nonDark ++;
            }
        }

    }

    return nonDark;
}

function birthState(president) {
    let president_list = {
        'Barack Hussein Obama II': 'Hawaii',
        'George Walker Bush': 'Connecticut',
        'William Jefferson Clinton': 'Arkansas',
        'George Herbert Walker Bush': 'Massachussetts',
        'Ronald Wilson Reagan': 'Illinois',
        'James Earl Carter, Jr': 'Georgia'
    };
    return (president_list[president]);
}

// console.log(birthState('Ronald Wilson Reagan'));
// console.log(birthState('Barack Hussein Obama II'));
// console.log(birthState('James Earl Carter, Jr'));

// let l = [[0, 156, 0, 0], [34, 0, 0, 0], [23, 123, 0, 34]]
// console.log(pixels(l));
// l = [[123, 56, 255], [34, 0, 0], [23, 123, 0], [3, 0, 0]]
// console.log(pixels(l));

function wordCount (text) {
    let words = text.split(' ');

    let wordCount = {};
    for (let i in words) {
        let word = words[i];
        console.log(word);
        if (wordCount[word]) {
            wordCount[word] += 1;
        } else {
            wordCount[word] = 1;
        }
    }

    for (let key in wordCount) {
        console.log(`The word ${key} appears ${wordCount[key]}`);
    }
}

let text = "all animals are equal but some animals are more equal than others";
wordCount(text);