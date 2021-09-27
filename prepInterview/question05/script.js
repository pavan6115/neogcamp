console.log('connected!')

const textInp = document.querySelector('#text-inp')
const displayBtn = document.querySelector('#display')
const redBtn = document.querySelector('#red-btn')
const greenBtn = document.querySelector('#green-btn')
const blueBtn = document.querySelector('#blue-btn')
const outputMsg = document.querySelector('#output-msg')

function displayText(){
    outputMsg.style.fontSize = "25px"
    outputMsg.innerText = textInp.value;
}

function changeToRed(){
    outputMsg.style.color = "red"
}

function changeToGreen(){
    outputMsg.style.color = "green"
}

function changeToBlue(){
    outputMsg.style.color = "blue"
}

displayBtn.addEventListener('click', displayText)
redBtn.addEventListener('click', changeToRed)
greenBtn.addEventListener('click', changeToGreen)
blueBtn.addEventListener('click', changeToBlue)