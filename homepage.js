let currentDate = new Date();
const year = currentDate.getFullYear();


document.querySelector("#year").textContent = year;
document.querySelector("#updated").textContent = `Last Updated: ${document.lastModified}`;
