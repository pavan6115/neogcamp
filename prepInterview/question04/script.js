console.log('connected!')

const textInp = document.querySelector('#text-inp')
const displayBtn = document.querySelector('#display')
const h1Btn = document.querySelector('#h1')
const h2Btn = document.querySelector('#h2')
const h3Btn = document.querySelector('#h3')
const outputMsg = document.querySelector('#output-msg')


function displayText(){
    outputMsg.innerText = textInp.value
}

function h1FontSize(){
    outputMsg.style.fontWeight = "bold"
    outputMsg.style.fontSize = "32px"
}

function h2FontSize(){
    outputMsg.style.fontWeight = "bold"
    outputMsg.style.fontSize = "24px"
}

function h3FontSize(){
    outputMsg.style.fontWeight = "bold"
    outputMsg.style.fontSize = "18px"
}

displayBtn.addEventListener('click', displayText)
h1Btn.addEventListener('click', h1FontSize)
h2Btn.addEventListener('click', h2FontSize)
h3Btn.addEventListener('click', h3FontSize)