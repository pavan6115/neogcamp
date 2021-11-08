console.log('connected!')

const currentPrice = document.querySelector('#current-price')
const costPrice = document.querySelector('#cost-price')
const checkBtn = document.querySelector('#check')
const outputMsg = document.querySelector('#output-msg')

checkBtn.addEventListener('click', checkpl)

function checkpl(){
    if(currentPrice.value > costPrice.value){
        outputMsg.innerText = `You have made a profit of ${currentPrice.value - costPrice.value}/-`
    }
    else {
        outputMsg.innerText =  `You have made a loss of ${costPrice.value - currentPrice.value}/-`
    }
}