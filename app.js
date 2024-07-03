const ENTER = 'e';
const CLICK = 'c';



let enterBtn = document.getElementById("userInput");
let addBtn = document.getElementById('addBtn');

let submitHandler = (event) => {
    if (event.keyCode === 13) {
        const userInput = document.getElementById('userInput').value;
        alert(userInput);
    }
}

let submitHandlerClick = () => {
    const userInput = document.getElementById('userInput').value;
    alert(userInput);
}


enterBtn.addEventListener("keypress", submitHandler);
addBtn.addEventListener('click', submitHandlerClick);

