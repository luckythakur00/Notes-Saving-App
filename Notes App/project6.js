const notescontainer = document.querySelector(".notes-container");
const createbtn = document.querySelector('.btn');
let notes = document.querySelectorAll('.input-box');

function shownotess(){
    notescontainer.innerHTML = localStorage.getItem("savenote");
}
shownotess();

function updatestorage(){
    localStorage.setItem('savenote', notescontainer.innerHTML);
}

createbtn.addEventListener('click', function(e){
    e.preventDefault();

    let inputbox = document.createElement('p');
    let img = document.createElement('img');
    inputbox.className = "input-box";
    inputbox.setAttribute('contenteditable', 'true');
    inputbox.setAttribute('spellcheck', 'false');
    img.src = "checked.png";
    img.className = "imagee"
    notescontainer.appendChild(inputbox).appendChild(img);
})

notescontainer.addEventListener('click', function(e){
    if(e.target.tagName === "IMG")
    {
        e.target.parentElement.remove();
        updatestorage();
    }
    else if(e.target.tagName === "P")
    {
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.onkeyup = function(){
                updatestorage();
            }
        })
    }
})

document.addEventListener('keydown', event =>{       // these lines are for enter button.
    if(event.key === "Enter")
    {
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})