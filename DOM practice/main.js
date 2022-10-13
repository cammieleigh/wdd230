const list = document.querySelector('.list');
const button = document.querySelector('button');
const input = document.querySelector('#favchap');

button.addEventListener('click', () => {
    const newChapter = input.value;

    const textInput = document.createElement('li');
    const buttonTitle = document.createElement('button');
    const text = document.createElement('span');

    textInput.appendChild(text);
    text.textContent = newChapter;
    textInput.appendChild(buttonTitle);
    buttonTitle.textContent = '❌';
    list.appendChild(textInput);

    buttonTitle.addEventListener('click', () => {
        list.removeChild(textInput);
    });

    input.focus();

});