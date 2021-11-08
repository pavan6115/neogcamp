console.log('connected!')

const userInp = document.querySelector('#user-input')
const displayBtn = document.querySelector('#display-text')
const logBtn = document.querySelector('#log')
const warnBtn = document.querySelector('#warn')
const errorBtn = document.querySelector('#error')
const outputMsg = document.querySelector('#output-msg')

displayBtn.addEventListener('click', () => {
    outputMsg.innerText = userInp.value
})

logBtn.addEventListener('click', () => {
    outputMsg.style.color = "grey"
})

warnBtn.addEventListener('click', () => {
    outputMsg.style.color = "orange"
})

errorBtn.addEventListener('click', () => {
    outputMsg.style.color = "red"
})
