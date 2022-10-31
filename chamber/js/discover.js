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

//Lazy loading
const pimages = document.querySelectorAll('[data-src]');
const options = {
    threshold: 1,
    rootMargin: '0px 0px 100px 0px'
}

function preloadImage(img){
    const source = img.getAttribute('data-src');
    if (!source) {
        return;
    }

    img.src = source;
}

const io = new IntersectionObserver(
    (entries, io) => {
        entries.forEach(entry => {
            if(!entry.isIntersecting){
                return;
            }
            else{
                preloadImage(entry.target);
                io.unobserve(entry.target);
            }
        });
        
    }, 
    
        options
    
);

pimages.forEach(image =>{
    io.observe(image);
})

//Local Storage

if (!localStorage.getItem('visit')){
    localStorage.setItem('visit', date_now);
    document.querySelector('#visitParagraph').textContent = 'This is your first visit!';
}

else{

let lastKey = localStorage.getItem('visit');
console.log(lastKey);

let dateDifference = date_now - lastKey;

console.log(dateDifference);

let differenceDay = dateDifference / 86400000;

let dayRounded = Math.floor(differenceDay);


document.querySelector('.visits').textContent = dayRounded;

}