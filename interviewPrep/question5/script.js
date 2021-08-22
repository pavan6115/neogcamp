console.log('connected!')

const redBtn = document.querySelector('.red-btn')
const greenBtn = document.querySelector('.green-btn')
const blueBtn = document.querySelector('.blue-btn')
const outputMsg = document.querySelector('.outputMsg')

let userInput = prompt('Enter your text :')
outputMsg.innerText = userInput
outputMsg.style.fontSize = `20px`


function changeToRedColor() {
    outputMsg.style.color = "red"
}

function changeToGreenColor() {
    outputMsg.style.color = "green"
}

function changeToBlueColor() {
    outputMsg.style.color = "blue"
}

redBtn.addEventListener('click', changeToRedColor)
greenBtn.addEventListener('click', changeToGreenColor)
blueBtn.addEventListener('click', changeToBlueColor)