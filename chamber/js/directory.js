const requestURL = 'https://octagonal-colossal-drip.glitch.me/directory.json';


fetch(requestURL).then(function (response) {return response.json();})
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const cards = jsonObject['businesscards'];
    cards.forEach(displayCards);
  });

function displayCards(card) {
  let business = document.createElement('section');
  let name = document.createElement('h3');
  let address = document.createElement('p');
  let image = document.createElement('img');


  name.textContent = `Name: ${card.name}`;
  address.textContent = `Address: ${card.address}`;
  image.src = card.imageurl;
  image.alt = card.name;

  
  business.appendChild(name);
  business.appendChild(address);
  business.appendChild(image);
  document.querySelector('.business').appendChild(business);
}
