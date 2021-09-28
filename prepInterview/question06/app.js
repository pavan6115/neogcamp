const readlineSync = require('readline-sync')

const userNameArray = []
const unitTestMarksArray = []
const preFinalMarksArray = []
const finalMarksArray = []

for (let i = 0; i < 5; i++){
    let userName = readlineSync.question('Enter your Name : ')
    userNameArray.push(userName)

    let unitTestMarks = readlineSync.question('Enter Unit Test marks : ')
    unitTestMarksArray.push(unitTestMarks)

    let preFinalMarks = readlineSync.question('Enter Pre-final Test marks : ')
    preFinalMarksArray.push(preFinalMarks)

    let finalMarks = readlineSync.question('Enter Final Test marks : ')
    finalMarksArray.push(finalMarks)

    console.log('--------------------------------------')
}

console.log('Username - ', userNameArray)
console.log('Unit test marks - ', unitTestMarksArray)
console.log('Prefinal test marks - ', preFinalMarksArray)

function calculateMaxMarks(arr){
    let max = 0;
    arr.map((item) => {
        if (item > max){
            max = item;
        }
    })
    console.log(`The maximum mark from ${arr} is ${max}`)
}

// helper function for calculateAvg
function calculateSum(ar){
    let sum = 0;
    for(let i = 0; i < ar.length; i++){
        sum += Number(ar[i]);
    }
    return sum
}

function calculateAvg(arr1){
    let avg = 0
    let totalSum = calculateSum(arr1)
    avg = totalSum / arr1.length
    console.log(`The average of ${arr1} is ${avg}`)
}

calculateMaxMarks(unitTestMarksArray)
calculateMaxMarks(preFinalMarksArray)
calculateMaxMarks(finalMarksArray)

calculateAvg(unitTestMarksArray)
calculateAvg(preFinalMarksArray)
calculateAvg(finalMarksArray)
