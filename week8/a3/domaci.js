function pay(satnica, broj_sati) {
    let plata
    if (broj_sati <= 40) {
        plata = satnica * broj_sati;
    } else if ((40 < broj_sati) && (broj_sati <= 60)) {
        plata = satnica * 40 + satnica * 1.5 * (broj_sati - 40);
    } else {
        plata = satnica * 40 + satnica * 1.5 * 20 + satnica * 2 * (broj_sati - 60);
    }
    return (plata);
}

console.log(pay(10, 35));
console.log(pay(10, 45));
console.log(pay(10, 61));

function yearIsLeap(year) {
    if (year % 4 == 0) {
        if (year % 100 == 0) {
            if (year % 400 == 0) {
                return (true);
            } else {
                return (false);
            }
        }
        return (true);
    }
    return (false);
}

console.log(yearIsLeap(2008));
console.log(yearIsLeap(1900));
console.log(yearIsLeap(2000));

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

console.log(birthState('Ronald Wilson Reagan'));

let text = "all animals are equal but some animals are more equal than others";

function wordCnt (text) {
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

    return wordCount;
}

console.log(wordCnt(text));