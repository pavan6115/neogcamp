console.log('connected!')

const yjhdBtn = document.querySelector('#YJHD')
const znmdBtn = document.querySelector('#ZNMD')
const outputMsg = document.querySelector('#output-msg')

const api = `https://mock-practice.prakhar10v.repl.co/bollywood?name=`

yjhdBtn.addEventListener('click', () => {
    const finalAPI = api + yjhdBtn.innerText
    fetch(finalAPI)
    .then(res => res.json())
    // .then(data => console.log(data))
    .then(data => {
        outputMsg.innerText = `${data.message}`
    })
})

znmdBtn.addEventListener('click', () => {
    const finalAPI = api + znmdBtn.innerText
    fetch(finalAPI)
    .then(res => res.json())
    // .then(data => console.log(data))
    .then(data => outputMsg.innerText = `${data.message}`)
})
