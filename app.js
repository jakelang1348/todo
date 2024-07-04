const ENTER = 'e';
const CLICK = 'c';
let items= [];
let count=0;



let enterBtn = document.getElementById("userInput");
let addBtn = document.getElementById('addBtn');
let list = document.getElementById('list');

let submitHandler = (event) => {
    if (event.keyCode === 13) {
        const userInput = document.getElementById('userInput').value;
        addCode(userInput);
    }
}

let submitHandlerClick = () => {
    const userInput = document.getElementById('userInput').value;
    addCode(userInput);
}

let deleteCode = (id) => {
    let codeToDelete = document.getElementById(id);
    codeToDelete.parentNode.removeChild(codeToDelete);
}

let addCode = (item) => {
    //add new code
    let codeToAdd = `<li id=newCode${count}>${item} <input type="checkbox" id="item${count}"></li>`;
    document.getElementById('list').innerHTML += codeToAdd;   
    count++; //incr count to keep ids unique
}

list.addEventListener('click', function(event) {
    if (event.target.matches('input[type="checkbox"]')) {
        const id = event.target.id.replace('item', 'newCode');
        deleteCode(id);
    }
})

enterBtn.addEventListener("keypress", submitHandler);
addBtn.addEventListener('click', submitHandlerClick);

