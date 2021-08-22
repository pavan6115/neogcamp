console.log('connected!')

const h1Btn = document.querySelector('#h1')
const h2Btn = document.querySelector('#h2')
const h3Btn = document.querySelector('#h3')
const outputMsg = document.querySelector('.outputMsg')


let userInput = prompt('Enter your text : ')
outputMsg.innerText = userInput
outputMsg.style.fontSize = `20px`

function h1FontSize() {
    let size = 32
    outputMsg.style.fontSize = `${size}px`
}

function h2FontSize() {
    let size = 24
    outputMsg.style.fontSize = `${size}px`
}

function h3FontSize() {
    let size = 16
    outputMsg.style.fontSize = `${size}px`
}


h1Btn.addEventListener('click', h1FontSize)
h2Btn.addEventListener('click', h2FontSize)
h3Btn.addEventListener('click', h3FontSize)