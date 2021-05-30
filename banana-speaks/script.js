let btnTranslate = document.querySelector('#btnTranslate')
let txtarea = document.querySelector('#txtarea')
let outputDiv = document.querySelector('.output')
let serverURL = 'https://api.funtranslations.com/translate/ferb-latin.json'

// let translation = text => serverURL + "?" + "text=" + txtarea
// let errorhandling = err => alert('Something wrong with the server, check back later 🥺')
 
function translation(input) {
    return serverURL + "?" + "text=" + input
}

function errorhandling(err) {
    console.log('Error occured - ', err)
    alert('Something wrong with the server, check back later 🥺')
}


btnTranslate.addEventListener('click', () => {
    let inputText = txtarea.value //taking input from textarea
    
    // calling server for processing
    fetch(translation(inputText))
        .then(response => response.json())
        .then(json => {
            let translatedtext = json.contents.translated;
            outputDiv.innerText = translatedtext //output
         })
        .catch(errorhandling)
})
