console.log('connected!')

const loadingText = document.querySelector('#loading')
const loadedBtn = document.querySelector('#loaded-btn')


function hideText(){
    loadingText.style.display = "none";
}

loadedBtn.addEventListener('click', hideText)