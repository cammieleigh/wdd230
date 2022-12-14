const requestURL = 'data.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const businesses = jsonObject['businesses'];
    businesses.forEach(displayBusinessesGrid);
    businesses.forEach(displayList);
    let gridMenu = document.querySelector('.gridMenu');
    let listMenu = document.querySelector('.listMenu');
    let list = document.querySelector('.listCards');
    let grid = document.querySelector('.gridCards');
    gridMenu.addEventListener('click', showGrid);
    function showGrid(){
      list.classList.add('displayNone');
      grid.classList.remove('displayNone');
      gridMenu.classList.add('highlight');
      listMenu.classList.remove('highlight');
    }
    listMenu.addEventListener('click', showList);
    function showList(){
      grid.classList.add('displayNone');
      list.classList.remove('displayNone');
      listMenu.classList.add('highlight');
      gridMenu.classList.remove('highlight');
    }
  });

 function displayList(business) {
 let card = document.createElement('section');
 card.setAttribute('class', 'directoryListSection');
 let name = document.createElement('h2');
 name.setAttribute('class', 'directoryListH2');
 name.textContent = business.name;
 card.appendChild(name);
 let phone = document.createElement('h3');
 phone.textContent = business.phone;
 card.appendChild(phone);
 let address = document.createElement('h3');
 address.textContent = business.address;
 card.appendChild(address);
 let website = document.createElement('a');
 website.setAttribute('class', 'businessSite')
 website.setAttribute('href', business.website);
 website.textContent = business.website;
 card.appendChild(website);
 document.querySelector('div.listCards').appendChild(card);}

  function displayBusinessesGrid(business){
    let card = document.createElement('section');
    card.setAttribute('class', 'directorySection');
    let icon = document.createElement('img');
    icon.setAttribute('class', 'directoryIcon');
    icon.setAttribute('src', business.icon);
    icon.setAttribute('alt', `${business.name} icon`);
    card.appendChild(icon);
    let name = document.createElement('h2');
    name.textContent = business.name;
    card.appendChild(name);
    let phone = document.createElement('h3');
    phone.textContent = business.phone;
    card.appendChild(phone);
    let address = document.createElement('h3');
    address.textContent = business.address;
    card.appendChild(address);
    let website = document.createElement('a');
    website.setAttribute('class', 'businessSite')
    website.setAttribute('href', business.website);
    website.textContent = business.website;
    card.appendChild(website);
    document.querySelector('div.gridCards').appendChild(card);
  };

 
