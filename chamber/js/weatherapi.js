const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5777224&appid=090f6f60dd5f31d0718108ba5071e523&units=imperial"

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);


  const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
const desc = jsObject.weather[0].description;
document.querySelector('#current-temp').textContent = jsObject.main.temp;
document.querySelector('#w').textContent = jsObject.wind.speed;
document.querySelector('#weathericon').setAttribute('src', iconsrc);
document.querySelector('#weathericon').setAttribute('alt', desc);
document.querySelector('figcaption').textContent = desc;

});