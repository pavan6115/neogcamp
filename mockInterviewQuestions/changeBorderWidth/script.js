console.log('connected!')

const name1 = document.querySelector('#name1')
const fivePXBtn = document.querySelector('#five')
const tenPXBtn = document.querySelector('#ten')

fivePXBtn.addEventListener('click', () => {
    name1.style.borderWidth = "5px"
})

tenPXBtn.addEventListener('click', () => {
    name1.style.borderWidth = "10px"
})