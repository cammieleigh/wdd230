const loadedDate = new Date();
const loadDate = document.querySelector('#loadDate');
loadDate.value = loadedDate;
console.log(loadDate);
const input = document.querySelector('.title');
console.log('in js');
input.addEventListener('change', (e) => {
    console.log('in the function');
  const isValid = e.target.checkValidity();
  if(isValid === false){
    const userInput = document.querySelector('#errorMessage');
    let message = 'Please only enter letters or hyphens (\'-\').';
    let newText = document.createElement('p');
    newText.setAttribute('id', 'error');
    newText.innerHTML = message;
    userInput.appendChild(newText);
  }
  else{
    console.log('true');
  }
});

