const readlineSync = require('readline-sync')

// const userName = readlineSync.question('What is your name? ')
// console.log('Welcome ' + userName + '!')


// console.log("Let's see if you are older than 25 yrs")
// const inpAge = readlineSync.question('Enter your age - ')
// console.log('You have entered ' + inpAge + 'yrs')
// const answer = (inpAge >= 25) ? "Yes, you're right" : "No, you're wrong"
// console.log(answer)


// let score = 0
// const ansOne = 'Panvel'
// const queOne = readlineSync.question('Enter your city name - ')
// if (queOne === ansOne) {
//     console.log('We are from same city!!')
//     score += 1
//     console.log('Score is: ', score)
// }
// else {
//     console.log('We are from different city')
//     score -= 1
//     console.log('Score is: ', score)
// }

// const ansTwo = 'Iron Man'
// const queTwo = readlineSync.question('Enter your favorite Marvel character : ')
// if (queTwo === ansTwo) {
//     console.log('Yea, I like Iron Man too')
//     score += 1
//     console.log('Score is: ', score)
// }
// else {
//     console.log('No, I like Iron Man more')
//     score -= 1
//     console.log('Score is: ', score)
// }


// function add(num1, num2){
//     console.log('The sum of', num1, 'and', num2, 'is', num1+num2)
// }
// add(4,7)

// function prod(num1, num2){
//     console.log('The product of', num1, 'and', num2, 'is', num1*num2)
// }
// prod(4,8)


// let playScore = 0
// function play (playQue, playAns) {
//     const userAns = readlineSync.question(playQue)
//     if (userAns === playAns) {
//         console.log('You are right!')
//         playScore += 1
//         console.log('Score is : ',playScore)
//     }
//     else {
//         console.log('You are wrong!')
//         playScore -= 1
//         console.log('Score is : ',playScore)
//     }
// }
// play("My favorite Marvel character? ", "Iron Man")
// play("Which is my favorite Car? ", "Honda City")


// For Loops
// for(let i=0; i<5; i++) {
//     console.log(i, 'Pavan Kulkarni')
// }

// for (let j=0; j<11; j++){
//     let a = 22
//     console.log(a + j)
// }

// const groceryList = ["milk", "panner", "vadapav", "carrots", "flowers"]
// console.log(groceryList[0])
// console.log(groceryList[2])
// console.log(groceryList[4])
// console.log('The length of array is - ', groceryList.length)

// console.log('Items in grocery list are - ')
// for (let item in groceryList) {
//     console.log(groceryList[item])
// }


// Objects
// const ironMan = {
//     name : 'Iron Man',
//     power : 10000000,
//     suitColor : 'Red',
// }
// console.log(ironMan.power)

// const superHeros = [
//     {
//         name : 'Iron Man',
//         power : 10000000,
//         suitColor : 'red',
//         partofMCU : 'Yes'
//     },
//     {
//         name : 'Captain America',
//         power : 2000,
//         suitColor : 'blue',
//         partofMCU : 'Yes'
//     },
//     {
//         name : 'Flash',
//         power : 40000,
//         suitColor : 'maroon',
//         partofMCU : 'No'
//     }
// ]

// for (let superHero in superHeros) {
//     console.log('Name of Super Hero -', superHeros[superHero].name)
//     console.log('Suit Color of Super Hero -', superHeros[superHero].suitColor)
//     console.log('-----------------------------------')
// }

// Making a fun quiz game - 
let quizScore = 0
console.log('= = = = = = Welcome to Quiz = = = = = =')
const userName = readlineSync.question('What is your name? ')
console.log('Welcome, ' + userName + '.')

function quiz(question, answer) {
    const userAns = readlineSync.question(question)
    if (userAns === answer) {
        console.log('You have answered right!')
        quizScore += 2
    }
    else {
        console.log('You have answered wrong!')
        quizScore -= 1
    }
    console.log('Your score is -> ' + quizScore)
    console.log('- - - - - - - - - - -')
}

// Array of questions
const questions = [
    {
        question : 'Where does Iron Man live? ',
        answer : 'Midtown USA'
    },
    {
        question : 'What is special about Captain America? ',
        answer : 'Shield'
    },
    {
        question : 'Is Flash a part of Marvel? ',
        answer : 'No'
    },
    {
        question : 'Have you watched Loki yet? ',
        answer : 'No'
    }
]

// for loop
for (let que in questions){
    quiz(questions[que].question, questions[que].answer)
}

console.log(userName + ' you have scored -> ' + quizScore)
