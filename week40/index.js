console.log('! am working!');

let button1 = document.getElementById('button-1');
console.log('getElementById', button1);

button1.classList.add('pera');

let buttons = document.querySelectorAll('.red');
console.log('querySelectorAll', buttons);
buttons.forEach(el => {
  // el.addEventListener('click', (e) => {
  //       console.log('click', e);
  //   })
})

let button = document.querySelector('.red');
console.log('querySelector', button);

let form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('submit');
})

let inputs = document.querySelectorAll('form input');
inputs.forEach((input) => {
    input.addEventListener('blur', (e) => {
        console.log('blur', e);
        if (e.target.value.length < 5) {
            console.log(e.target.nextSibling);
            e.target.nextElementSibling.classList.add('show');
        }
    })

    input.addEventListener('focus', (e) => {
        console.log('focus', e);
        e.target.nextElementSibling.classList.remove('show');
    })
})

let select = document.querySelector('form select');

select.addEventListener('focus', (e) => {
    console.log('focus', e);
})



