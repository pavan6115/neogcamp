console.log('connected!')

const textInput = document.querySelector('#text-inp')
const displayBtn = document.querySelector('#display')
const fontIncreaseBtn = document.querySelector('#font-increase')
const fontDecreaseBtn = document.querySelector('#font-decrease')
const outputMsg = document.querySelector('#output-msg')

let textSize = 24;

function displayText(){
    let text = textInput.value;
    outputMsg.innerText = text;
}

function increaseFontSize(){
    textSize += 2;
    outputMsg.style.fontSize = `${textSize}px`
}

function decreaseFontSize(){
    textSize -= 2;
    outputMsg.style.fontSize = `${textSize}px`
}

displayBtn.addEventListener('click', displayText)
fontIncreaseBtn.addEventListener('click', increaseFontSize)
fontDecreaseBtn.addEventListener('click', decreaseFontSize)