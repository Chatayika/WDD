let apiURL = `http://api.openweathermap.org/data/2.5/weather?lat=-18.974656&lon=32.670473&appid=b3c487a2659143a20d26786173040e5d`;
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    const temp =  document.querySelector('#current-temp')
    temp.textContent = jsObject.main.temp;
    const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    let desc = jsObject.weather[0].description;
    const iconImg= document.querySelector('#weathericon');
    const iconDesc = document.querySelector('#weathericon');
    const Desc = document.querySelector('figcaption');
    
    iconImg.setAttribute('src', iconsrc)
    iconDesc.setAttribute('alt', desc)
    Desc.textContent= desc

    const windSpeed = document.querySelector("#wind-speed")
    windSpeed.textContent =jsObject.wind.speed;
    
    
    if (temp <= 50 && windSpeed >3){
      chill = (35.74 + (0.6215 * temp) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * (temp * Math.pow(windSpeed,0.16)))).toFixed(2);
      document.querySelector("#wind-chill").innerHTML = chill;}
    else{
      document.querySelector("#wind-chill").innerHTML = "N/A";
    }
    
  
  });