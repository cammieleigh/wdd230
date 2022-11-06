// let businessTitle = document.querySelector('.title').textContent;
// document.querySelector("#submit").addEventListener('input', alphaInput);
// function alphaInput(businessTitle){
//     console.log('hello');
// var letters = /^[A-Za-z]+$/;
//     if(!letters.test(businessTitle)){
//         let message = 'Please only enter letters or hyphens (\'-\').';
//         document.querySelector('#errorMessage').textContent = message;
//     }

// }

const input = document.querySelector('.title');
input.addEventListener('change', (e) => {
  const isValid = e.target.checkValidity();
  if(isValid === false){
    console.log('false');
    let message = 'Please only enter letters or hyphens (\'-\').';
    document.querySelector('#errorMessage').textContent = message;
  }
  else{
    console.log('true');
  }
});