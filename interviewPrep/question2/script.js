console.log('connected')

const inpNum1 = document.querySelector('#num1')
const inpNum2 = document.querySelector('#num2')
const addBtn = document.querySelector('#add-btn')
const subBtn = document.querySelector('#sub-btn')
const mulBtn = document.querySelector('#mul-btn')
const divBtn = document.querySelector('#div-btn')
const outputMsg = document.querySelector('.outputMsg')

function addition(){
    let num1 = Number(inpNum1.value)
    let num2 = Number(inpNum2.value)
    sum = num1 + num2
    outputMsg.innerText = `The addition of ${num1} and ${num2} is ${sum}`  
}

function subtraction(){
    let num1 = Number(inpNum1.value)
    let num2 = Number(inpNum2.value)
    sub = num1 - num2
    outputMsg.innerText = `The subtraction of ${num1} and ${num2} is ${sub}`
}

function multiplication(){
    let num1 = Number(inpNum1.value)
    let num2 = Number(inpNum2.value)
    mul = num1 * num2
    outputMsg.innerText = `The multiplication of ${num1} and ${num2} is ${mul}`
}

function division(){
    let num1 = Number(inpNum1.value)
    let num2 = Number(inpNum2.value)
    if (num2 === 0){
        outputMsg.innerText = "Denominator cannot be zero"
    }
    else{
        div = num1 / num2
        outputMsg.innerText = `The division of ${num1} and ${num2} is ${div.toFixed(2)}`
    }
}


addBtn.addEventListener('click', addition)
subBtn.addEventListener('click', subtraction)
mulBtn.addEventListener('click', multiplication)
divBtn.addEventListener('click', division)
