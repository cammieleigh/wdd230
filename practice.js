let date = new Date();

console.log(date);

let year = date.getFullYear();

console.log(year);

document.querySelector('foot').textContent = year;

let currentdate = document.lastModified;

console.log(currentdate);

document.querySelector('div').textContent = currentdate;