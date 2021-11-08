console.log('connected!')

const userInp = document.querySelector('#user-inp')
const showMsgBtn = document.querySelector('#show-msg')
const outputMsg = document.querySelector('#output-msg')

showMsgBtn.addEventListener('click', () => {
    if(userInp.value === "Tanvi") outputMsg.innerText = "She's the best CEO ever!"
    else if(userInp.value === "Tanay") outputMsg.innerText = "He is out FUNNY Mentor"
    else if(userInp.value === "Swapnil") outputMsg.innerText = "He helps us conquer JOBS"
    else outputMsg.innerText = "She is our cheerful interviewer"
})