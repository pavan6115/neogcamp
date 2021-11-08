console.log('connected!')

const userName = document.querySelector('#name')
const userPassword = document.querySelector('#pass')
const checkBtn = document.querySelector('#check')
const outputMsg = document.querySelector('#output-msg')

checkBtn.addEventListener('click', () => {
    let userInp = userName.value
    let password = userPassword.value
    if(password.includes(userInp)){
        outputMsg.innerText = `Passwords can not have name`
    }
    else {
        outputMsg.innerText = `Great Success!`
    }
})