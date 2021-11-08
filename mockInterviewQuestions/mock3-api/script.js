console.log('connected!')

const outputMsg = document.querySelector('#output-msg')
const checkBtn = document.querySelector('#check')

const api = `https://mystery-api.kushanksriraj.repl.co/get`

fetch(api)
// .then(res => console.log(res))
.then(data => {
    if(data.status == 404){
        outputMsg.innerText = "Page not found"
    }
    else if(data.status == 401){
        outputMsg.innerText = "User not logged in"
    }
    else {
        outputMsg.innerText = "API working ok"
    }
})