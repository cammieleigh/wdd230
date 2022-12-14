let burger = document.querySelector('.btn');
let menu = document.querySelector('#menu');

function show() {
    menu.classList.toggle('showMenu');
    burger.classList.toggle('moveButton');
}
burger.addEventListener('click', show);

let date = new Date();
let year = date.getFullYear();
document.querySelector('.year').textContent = year;
let currentdate = document.lastModified;


