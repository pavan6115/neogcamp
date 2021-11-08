console.log('connected!')

const api1Btn = document.querySelector('#api1-btn')
const api2Btn = document.querySelector('#api2-btn')
const api3Btn = document.querySelector('#api3-btn')
const outputMsg = document.querySelector('#output-msg')

const api1 = `https://jsonplaceholder.typicode.com/todos`
const api2 = `https://jsonplaceholder.typicode.com/users`
const api3 = `https://jsonplaceholder.typicode.com/photos`

// fetch(api)
// .then(data => data.json())
// .then(res => console.log(res))

api1Btn.addEventListener('click', () => {
    fetch(api1)
    .then(res => res.json())
    // .then(data => console.log(data))
    .then(data => {
        for(let i = 0; i < data.length; i++){
            // console.log(data[i].title)
            outputMsg.innerText += `${data[i].id} - ${data[i].title}\n`
            outputMsg.innerText += `${data[i].completed}\n`
        }
    })
})


api2Btn.addEventListener('click', () => {
    fetch(api2)
    .then(res => res.json())
    .then(data => {
        for(let j = 0; j < data.length; j++){
            outputMsg.innerText += `Name - ${data[j].name}\n`
            outputMsg.innerText += `City - ${data[j].address.city}\n`
        }
    })
})


api3Btn.addEventListener('click', () => {
    fetch(api3)
    .then(res => res.json())
    .then(data => {
        for(let k = 0; k < 500; k++){
            outputMsg.innerHTML += `<img src=${data[k].thumbnailUrl}>`
        }
    })
})