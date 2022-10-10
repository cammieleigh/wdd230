//Hamburger Menu
let burger = document.querySelector('.btn');
let menu = document.querySelector('#menu');

function show() {
    menu.classList.toggle('showMenu');
}
burger.addEventListener('click', show);

//Footer
let date = new Date();
let year = date.getFullYear();
document.querySelector('.year').textContent = year;
let currentdate = document.lastModified;
document.querySelector('.updated').textContent = currentdate;

//Formatted date
const date_now = new Date();

const full_date = new Intl.DateTimeFormat ('en-US', {dateStyle: 'full'}).format(date_now);

document.querySelector('#date').textContent = full_date;