const readlineSync = require('readline-sync')
const chalk = require('chalk')

let quizScore = 0
console.log(chalk.magenta.bold('Welcome to Imitation Game Quiz'))
const playerName = readlineSync.question('Enter your name - ')
console.log('Welcome, ' + playerName + '!')

function quiz(question, answer) {
    const playerAns = readlineSync.question(question)
    if (playerAns.toLowerCase() === answer.toLowerCase()) {
        quizScore += 2
        console.log(chalk.green('Right Answer!'))
    }
    else {
        quizScore -= 1
        console.log(chalk.red('Wrong Answer!'))
    }
    console.log(chalk.blueBright('Current Score : ' + quizScore))
}

const questions = [
    {
        question : 'Who is the film based on? ',
        answer : 'Alan Turing'
    }, 
    {
        question : 'What was the name of the machine that was designed by Alan Turing? ',
        answer : 'Christoper'
    },
    {
        question : 'Where did Alan Turing work during his service? ',
        answer : 'Bletchley Park'
    }, 
    {
        question : 'What were the common words in every message? ',
        answer : 'Heil Hitler'
    },
    {
        question : "At what time did the German's send the weather report? ",
        answer : '6am'
    },
    {
        question : 'Who played the role of Alan Turing? ',
        answer : 'Benedict Cumberbatch'
    }
]

for (let ques in questions) {
    quiz(questions[ques].question, questions[ques].answer)
}

console.log(chalk.yellow(playerName + ' your final Score is : ', quizScore))