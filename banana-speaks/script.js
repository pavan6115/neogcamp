let btnTranslate = document.querySelector('#btnTranslate')
let txtarea = document.querySelector('#txtarea')
let outputDiv = document.querySelector('.output')

btnTranslate.addEventListener('click', () => {
    outputDiv.innerHTML = 'gibberish lang ' + txtarea.value
})

// outputDiv.innerHTML = 'Yoo whatisup whatisup bantai!'