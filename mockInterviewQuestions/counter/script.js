console.log('connected!')

const counterNum = document.querySelector('#counter-num')
const increaseNumBtn = document.querySelector('#increase')
const decreaseNumBtn = document.querySelector('#decrease')


function increaseNum(){
    num = Number(counterNum.innerText)
    counterNum.innerText = num + 1
}

function decreaseNum(){
    num = Number(counterNum.innerText)
    counterNum.innerText = num - 1
}

increaseNumBtn.addEventListener('click', increaseNum)
decreaseNumBtn.addEventListener('click', decreaseNum)

