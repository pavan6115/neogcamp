console.log('connected!');

const passwordInp = document.querySelector('#password')
const checkBtn = document.querySelector('#check-btn')
const outputMsg = document.querySelector('.outputMsg')


function checkPassword(){
    let pass = passwordInp.value;
    for (let p = 0; p < pass.length; p++){
        if (pass.length < 10){
            checkBtn.disabled = true
            passwordInp.style.borderColor = "red"
            outputMsg.style.color = "red"
            outputMsg.innerText = "Password is less than 10 characters ❌"
        }
        else {
            checkBtn.disabled = false
            passwordInp.style.borderColor = "green"
            outputMsg.style.color = "green"
            outputMsg.innerText = "Yayayy🥳 ✅"
        }
    }
}


passwordInp.addEventListener('change', checkPassword)
