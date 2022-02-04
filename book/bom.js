const list = document.querySelector('.list');
const input = document.querySelector('input');
const button = document.querySelector('button');

let myInput= input.value;

button.addEventListener('click',function(){

    const chapter=document.createElement('li');
    const chapterButton=document.createElement('button');
    chapter.textContent=myInput;
    chapterButton.textContent='X';

    chapter.appendChild(chapterButton);
    list.appendChild(chapter);

    chapterButton.onclick = function(e) {
       list.removeChild(chapter);};

    input.focus();

    let myInput="";

    input.focus();
    
})

