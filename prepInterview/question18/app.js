const readlineSync = require('readline-sync')

console.log('----- FAKE NEWS DETECTION -----')

const userInp = readlineSync.question('Enter the news : ')
const newsSource = readlineSync.question('Enter the source of the news : ')
const source = newsSource.toLowerCase()

if (source === 'whatsapp' || source === 'facebook' || source === 'telegram'){
    console.log("Don't believe the things on FB, Whatsapp and Telegram")
}
else {
    console.log('This is verified news!')
}
