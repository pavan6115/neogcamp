const readlineSync = require('readline-sync')

console.log('Fake News Detection')

const userInput = readlineSync.question('Enter your news - ')
const source = readlineSync.question('Enter the source of the News - ')
let src = source.toLowerCase()

if (src == "whatsapp" || src == "facebook" || src == "telegram"){
    console.log("Don't belive everything you hear on whatsapp/facebook/telegram")
}
else {
    console.log('OK')
}