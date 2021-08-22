console.log('connected!')

const heading = document.querySelector('#heading')
const loadedBtn = document.querySelector('#loaded-btn')

function hideMessage() {
    heading.style.display = "none"
}

loadedBtn.addEventListener('click', hideMessage)