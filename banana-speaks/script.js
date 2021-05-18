let btnTranslate = document.querySelector('#btnTranslate')
let txtarea = document.querySelector('#txtarea')
let outputDiv = document.querySelector('.output')

btnTranslate.addEventListener('click', () => {
    outputDiv.innerText = 'gibberish lang ' + txtarea.value
})

outputDiv.innerText = 'Yoo whatisup whatisup bantai!'