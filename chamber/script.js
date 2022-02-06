const hamburger = document.querySelector("#hamburger")
const nav = document.querySelector("nav ul") 



hamburger.onclick=()=>{
    document.getElementsByClassName("nav")[0].classList.toggle("responsive")
    document.getElementById("#hamburger").style.display. visibility=hidden;
    document.getElementById("#hamburger").style.display. position=absolute; 
    document.getElementById("#hamburger").style.display. left=0;
    document.getElementById("#hamburger").style.display. top=0; 
    document.getElementById("#hamburger").style.display. content= "❌ " ; 
}

date= new Date()
let dayOfWeek= date.getDay()

if (dayOfWeek==1 && dayOfWeek == 2){
    document.createElement("div")=banner
    banner.textContent="🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m."
    header.appendChild(banner) 
}
else{banner=""}



