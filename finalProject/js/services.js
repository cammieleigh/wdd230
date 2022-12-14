const requestURL = 'json/services.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const services = jsonObject['services'];
    services.forEach(displayList);
  });


  function displayList(service) {
    let card = document.createElement('section');
    card.setAttribute('class', 'servicesSection');
    let name = document.createElement('h2');
    name.setAttribute('class', 'serviceName');
    name.textContent = service.name;
    card.appendChild(name);
    let description = document.createElement('p');
    description.setAttribute('class', 'serviceDescription');
    description.textContent = service.description;
    card.appendChild(description);
    let price = document.createElement('h3');
    price.setAttribute('class', 'serviceInfo');
    price.textContent = service.price;
    card.appendChild(price);
    let length = document.createElement('h3');
    length.setAttribute('class', 'serviceInfo');
    length.textContent = service.length;
    price.appendChild(length);
    document.querySelector('div.listCards').appendChild(card);
}