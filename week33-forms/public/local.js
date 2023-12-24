console.log('hello from the local JS file!');

let form = document.getElementById('form');

let textArea = document.getElementById('exampleFormControlTextarea1');

form.addEventListener('submit', (e) => {
    console.log(textArea.value);

    if (textArea.value.includes('pera')) {
        console.log('includes!');
        let node = document.createElement('DIV');
        node.innerHTML = `Text area cannot contain the word 'pera'`;
        node.classList.add('text-danger', 'my-2');
        textArea.parentElement.insertBefore(node, textArea);
        e.preventDefault();
    }

    console.log('I stopped the submit!');
})