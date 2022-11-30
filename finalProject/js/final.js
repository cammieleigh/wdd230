let burger = document.querySelector('.btn');
let menu = document.querySelector('#menu');

function show() {
    menu.classList.toggle('showMenu');
}
burger.addEventListener('click', show);