const hamburger = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation')

hamburger.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

// To solve the mid resizing issue with responsive class on
window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};


date= new Date()
const showdate = new Intl.DateTimeFormat("en-UK", { dateStyle: "full" }).format(date);
const header = document.querySelector("h1")
const para = document.createElement("p")
para.innerHTML=showdate
header.appendChild(para).style.fontSize="14px"


let dayOfWeek= date.getDay();
if (dayOfWeek >=1 && dayOfWeek <=2) {
    document.querySelector("#center").textContent ="🤝 Come join us for the chamber meet and greet Wednesdays at 7:00 p.m"
}






document.querySelector("#year").textContent = showdate;
document.getElementById("updated").textContent = `Last Updated: ${document.lastModified}`;