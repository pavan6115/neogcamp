console.log('connected!')

const outputMsg = document.querySelector('.outputMsg')
const increaseBtn = document.querySelector('#increaseBtn')
const decreaseBtn = document.querySelector('#decreaseBtn')

let userInput = prompt('Enter your msg :')
outputMsg.innerText = userInput


let size = 24;

function increaseFontSize(){
    size += 2
    outputMsg.style.fontSize = `${size}px`
}

function decreaseFontSize(){
    size -= 2
    outputMsg.style.fontSize = `${size}px`
}

increaseBtn.addEventListener('click', increaseFontSize)
decreaseBtn.addEventListener('click', decreaseFontSize)