const hamburger = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation')

hamburger.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

// To solve the mid resizing issue with responsive class on
window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};

date= new Date();
const header = document.querySelector("header")
const para = document.createElement("p")
para.innerHTML=date
header.appendChild(para).style.marginBottom="-150px"
header.appendChild(para).style.marginLeft="2rem"



let dayOfWeek= date.getDay();


if (dayOfWeek!=1|dayOfWeek != 2){
    const ban = document.querySelector("banner")
    ban.style.display="none"
}
else{
    ban.style.display = "block"
}



