const requestURL = 'json/data.json';


fetch(requestURL).then(function (response) {return response.json();})
  .then(function (jsonObject) {
    const cards = jsonObject['temple'];
    cards.forEach(displayCards);
  });
 
  

function displayCards(card) {
  let temple = document.createElement('section');
  let name = document.createElement('h3');
  let address = document.createElement('p');
  let phone = document.createElement('p')
  let email = document.createElement('p');
  let services = document.createElement('p');
  let history = document.createElement('p');
  let ordinance = document.createElement('p');
  let session = document.createElement('p');
  let closure = document.createElement('p')
  let webAdress = document.createElement('a')
  let image = document.createElement('img');
  const like = document.createElement('i')

  
  
  name.textContent = card.name;
  address.textContent = card.address;
  phone.textContent = card.telephone;
  email.textContent = card.email;
  services.textContent = card.services;
  history.textContent = card.history;
  ordinance.textContent = card.ordinanceSchedule;
  session.textContent = card.sessionSchedule;
  closure.textContent = card.telephoneClosure;
  webAdress.textContent = card.templeurl;
  
  image.src = card.imageurl;
  image.alt = card.name;
  like.classList= "fa fa-thumbs-up";

  
  temple.appendChild(name);
  temple.appendChild(address);
  temple.appendChild(phone);
  temple.appendChild(email);
  temple.appendChild(services);
  temple.appendChild(history);
  temple.appendChild(ordinance);
  temple.appendChild(session);
  temple.appendChild(closure);
  temple.appendChild(webAdress);
  temple.appendChild(image);
  temple.appendChild(like)
  document.querySelector('.temples').appendChild(temple).style.border = '2px solid black';
  document.querySelector('.temples').appendChild(temple). style. margin = '10px';
  document.querySelector('.temples').appendChild(temple). style. padding = '30px';

  let likeNumbers = Number(window.localStorage.getItem('clicks-ls'));
  
    
  
  document.querySelector('i').onclick = function() {myFunction()};
  
  function myFunction() {
    likeNumbers++
    document.querySelector('i').innerHTML = likeNumbers;
  }
  
  localStorage.setItem('clicks-ls', likeNumbers);

  

  

}












  
    
    
  
  
  
  

 








