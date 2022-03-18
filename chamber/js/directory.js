const requestURL = 'https://octagonal-colossal-drip.glitch.me/directory.json';


fetch(requestURL).then(function (response) {return response.json();})
  .then(function (jsonObject) {
    const cards = jsonObject['businesscards'];
    cards.forEach(displayCards);
  });

function displayCards(card) {
  let business = document.createElement('section');
  let name = document.createElement('h3');
  let address = document.createElement('p');
  let phone = document.createElement('p')
  let webAddress = document.createElement('a')
  let image = document.createElement('img');


  name.textContent = card.name;
  address.textContent = card.address;
  phone.textContent = card.phone;
  webAddress.textContent = card.website;
  image.src = card.imageurl;
  image.alt = card.name;

  
  business.appendChild(name);
  business.appendChild(address);
  business.appendChild(phone);
  business.appendChild(webAddress);
  business.appendChild(image);
  document.querySelector('.business').appendChild(business).style.border = " 2px solid rgb(2, 2, 78)  ";
  document.querySelector('.business').appendChild(business). style. margin = "10px";
  document.querySelector('.business').appendChild(business). style. padding = "30px";

  
}





