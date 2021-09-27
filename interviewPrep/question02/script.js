console.log('connected!')

const inp1 = document.querySelector('#inp1')
const inp2 = document.querySelector('#inp2')
const addBtn = document.querySelector('#add')
const subBtn = document.querySelector('#sub')
const mulBtn = document.querySelector("#mul")
const divBtn = document.querySelector('#div')
const outputMsg = document.querySelector('#output-msg')

function addition(){
    let num1 = Number(inp1.value)
    let num2 = Number(inp2.value)
    outputMsg.innerText = `Addition of ${num1} and ${num2} is ${num1 + num2}`
}

function subtraction(){
    let num1 = Number(inp1.value)
    let num2 = Number(inp2.value)
    if (num1 < num2) {
        outputMsg.innerText = "Number 2 should be less than number 1!"
    }
    else {
        outputMsg.innerText = `Subtraction of ${num1} and ${num2} is ${num1 - num2}`
    }
}

function multiplication(){
    let num1 = Number(inp1.value)
    let num2 = Number(inp2.value)
    outputMsg.innerText = `Multiplication of ${num1} and ${num2} is ${num1 * num2}`
}

function division(){
    let num1 = Number(inp1.value)
    let num2 = Number(inp2.value)
    if (num2 === 0){
        outputMsg.innerText = "Number 2 cannot be zero!"
    }
    else {
        outputMsg.innerText = `Division of ${num1} and ${num2} is ${num1 / num2}`
    }
}


addBtn.addEventListener('click', addition)
subBtn.addEventListener('click', subtraction)
mulBtn.addEventListener('click', multiplication)
divBtn.addEventListener('click', division)