const apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=38.9807&lon=-77.1003&exclude=minutely,hourly&appid=47386ae5321d4864466a8b1fd6af2a0a`;
  fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
      console.log(jsObject);
      let temp =  document.querySelector('#current-temp')
      temp.textContent = jsObject.current.temp;
      const iconsrc= `https://openweathermap.org/img/w/${jsObject.current.weather[0].icon}.png`;
      let desc = jsObject.current.weather[0].description;
      const iconImg= document.querySelector('#weathericon');
      const iconDesc = document.querySelector('#weathericon');
      const Desc = document.querySelector('figcaption');
      
      iconImg.setAttribute('src', iconsrc)
      iconDesc.setAttribute('alt', desc)
      Desc.textContent= desc

      let humidity = document.querySelector("#humidity")
      humidity.textContent =jsObject.current.humidity; 



      const prediction1 = document.querySelector("#forecast1")
      prediction1.textContent =jsObject.daily[0].temp.day;
    

      const prediction2= document.querySelector("#forecast2")
      prediction2.textContent =jsObject.daily[1].temp.day; 


      const prediction3 = document.querySelector("#forecast3")
      prediction3.textContent = jsObject.daily[2].temp.day;
  
      const prediction4= document.querySelector("#forecast4")
      prediction4.textContent = jsObject.daily[3].temp.day;

      if (jsObject.alerts == "True"){
      document.querySelector(".inform").innerHTML = jsObject.alerts[4]}
      
      else
      {
      document.querySelector('.inform').innerHTML = 'No Alerts'
      
    
    
    
    }


let close = document.getElementsByClassName("closebtn");
let i;


for (i = 0; i < close.length; i++) {
  
  close[i].onclick = function(){


    let div = this.parentElement;

  

  
    setTimeout(function(){ div.style.display = "none"; }, 600);
  }
}

      





  
    });

    var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}


  
    
    