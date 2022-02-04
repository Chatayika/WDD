const hamburger = document.getElementById("#hamburgerBtn");
const nav = document.getElementById("#primaryNav")
const closeMenu= document.querySelector("closeMenu");


hamburger.addEventListener("click", open);
closeMenu.addEventListener("click", close);

primaryNav.addEventListener("click",toggleMenu)

function open(){
nav.style.display = "flex";
nav.style.top="0";

function close(){
    nav.style.top = "-100%";
}

//document.getElementId(primaryNav).classlist.toggle(open)
//document.getElementId(primaryNav).style.backgroundColor="red"
};
