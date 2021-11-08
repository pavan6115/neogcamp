console.log('connected!')

const successMsg = document.querySelector('#success')
const messageMsg = document.querySelector('#message')
const api = `https://quick-access-api.desaihetav.repl.co/`

fetch(api)
.then(res => res.json())
.then(data => {
    console.log(data)
    successMsg.innerText = `${data.success}`

    messageMsg.innerText = `${data.message}`
})