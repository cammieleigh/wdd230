let date_now = new Date();
if (!localStorage.getItem('visit')){
    localStorage.setItem('visit', date_now);
    document.querySelector('#visitParagraph').textContent = 'This is your first visit!';
}

else{

let lastKey = new Date(localStorage.getItem('visit'));

let dateDifference = Math.abs(date_now - lastKey);

let differenceDay = dateDifference / 86400000;

let dayRounded = Math.floor(differenceDay);


document.querySelector('.visits').textContent = dayRounded;

localStorage.setItem('visit', date_now);

}