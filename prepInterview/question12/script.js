console.log('connected!')

const passwordInp = document.querySelector('#password')
const passwordCheckBtn = document.querySelector('#checkPass-btn')
const outputMsg = document.querySelector('#output-msg')


function checkPassword(){
    let checkChar = passwordInp.value.length;
    if (checkChar < 10){
        passwordInp.style.border = "2px solid red"
        outputMsg.innerText = "Error ❌, password less than 10 charaters"
    }
    else {
        passwordInp.style.border = "2px solid green"
        outputMsg.innerText = "Success ✅, your password needs the required criteria"
    }
    passwordCheckBtn.disabled = "true"
}

passwordCheckBtn.addEventListener('click', checkPassword)