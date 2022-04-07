date= new Date()
const showdate = new Intl.DateTimeFormat("en-UK", { dateStyle: "full" }).format(date);
const header = document.querySelector("h1")
const para = document.createElement("p")
para.innerHTML=showdate
header.appendChild(para).style.fontSize="14px"

document.querySelector("#year").textContent = showdate;
document.getElementById("updated").textContent = `Last Updated: ${document.lastModified}`;