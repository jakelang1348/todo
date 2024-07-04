const ENTER = 'e';
const CLICK = 'c';
let items= [];
let count=0;



let enterBtn = document.getElementById("userInput");
let addBtn = document.getElementById('addBtn');

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
    // let codeToDelete = document.getElementById(id);
    // codeToDelete.parentNode.removeChild;
    alert(id);
}

let addCode = (item) => {
    //add new code
    let codeToAdd = `<li id=newCode${count}>${item} <input type="checkbox" id="item${count}"></li>`;
    document.getElementById('list').innerHTML += codeToAdd;   

    //housekeeping for deletion
    const checkBoxBtn = document.getElementById(`item${count}`);
    checkBoxBtn.addEventListener('click', deleteCode.bind(null, `newCode${count}`));
    count++; //incr count to keep ids unique
}


enterBtn.addEventListener("keypress", submitHandler);
addBtn.addEventListener('click', submitHandlerClick);

