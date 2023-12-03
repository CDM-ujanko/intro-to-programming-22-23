console.log('hello from the local JS file!');

let element = document.getElementById('h2');
console.log(element);
// setTimeout(() => {
//     element.classList.add('error');
//     element.style.fontSize = '60px'
// }, 3000)

let button = document.getElementById('button');
// let increased = false;
let buttonAdd = document.getElementById('button-add');
let input = document.getElementById('input');
let container = document.querySelector('.container');

button.addEventListener('click', (e) => {
    // if (increased) {
    //     return;
    // }

    console.log('button click!', );
    let fontSize = getComputedStyle(element).fontSize;
    console.log(parseFloat(fontSize));
    element.style.fontSize = parseFloat(fontSize) + 2 + 'px';
    // increased = true;
})

buttonAdd.addEventListener('click', () => {
    let value = input.value;
    if (!value.length) {
        return;
    }

    let node = document.createElement('DIV');
    node.innerHTML = `<input type="checkbox">${input.value}`;
    node.classList.add('added');
    input.value = '';

    button.parentElement.insertBefore(node, button);
})

input.addEventListener('input', (e) => {
    console.log('The user is typing', e.target.value);
})

container.addEventListener('click', (e) => {
    console.log(e.target);
    if (e.target.classList.contains('added')) {
        e.target.remove();
    }
});

