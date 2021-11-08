console.log('connected!')

const userName = document.querySelector('#user-name')
const displayBtn = document.querySelector('#display')
const validateOTP = document.querySelector('#otp-validate')
const validateBtn = document.querySelector('#validate')
const outputMsg = document.querySelector('#output-msg')

const api = `https://otpgenerator.ishanjirety.repl.co/get-otp?name=`

displayBtn.addEventListener('click', showResult)

function showResult(){
    const finalAPI = api + userName.value
    fetch(finalAPI)
    .then(res => res.json())
    // .then(data => console.log(data))
    .then(data => {
        outputMsg.innerText = `${data.otp}`
    })
}

validateBtn.addEventListener('click', checkotp)

function checkotp(){
    if(outputMsg.innerText == validateOTP.value){
        outputMsg.innerText = `Success`
        outputMsg.style.color = "green"
    }
    else {
        outputMsg.innerText = `Failure`
        outputMsg.style.color = "red"
    }
}
