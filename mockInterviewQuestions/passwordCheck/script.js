console.log('connected!')

const passwordInp = document.querySelector('#pass')
const checkPassBtn = document.querySelector('#checkPass-btn')
const outputMsg = document.querySelector('#output-msg')


checkPassBtn.addEventListener('click', () => {
    let password = passwordInp.value
    if(password.length < 10){
        checkPassBtn.disabled = false;
        outputMsg.innerText = "Success"
    }
    else {
        outputMsg.innerText = "Error"
        checkPassBtn.disabled = true;
    }
})

