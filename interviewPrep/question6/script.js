const readlineSync = require('readline-sync')

let userNameArray = []
let unitTestArray = []
let preFinalArray = []
let finalArray = []

for (let i = 0; i < 6; i++) {

  let userName = readlineSync.question('What is your name? ')
  userNameArray.push(userName)

  let unitTestMarks = readlineSync.question('Enter your unit test marks - ')
  unitTestArray.push(unitTestMarks)

  let preFinalMarks = readlineSync.question('Enter your prefinal test marks - ')
  preFinalArray.push(preFinalMarks)

  let finalMarks = readlineSync.question('Enter your final year marks - ')
  finalArray.push(finalMarks)

  console.log('--------------------------------')
}

console.log("Unit Test -", unitTestArray)
console.log("PreFinal Test -", preFinalArray)
console.log("Final Test -", finalArray)


function calMax(aarr){
  let max = 0;
  aarr.map((m) => {
    if (m > max){
      max = m
    }
  })
  console.log(`The maximum number from ${aarr} is ${max}`)
}

function calSum(ar){
  let sum = 0;
  for (l = 0; l < ar.length; l++){
    sum += Number(ar[l])
  }
  // console.log(`Sum is - ${sum}`)
  return sum
}

function calAvg(a){
  let total = calSum(a)
  let avg = total / a.length
  console.log(`The avg of ${a} is ${avg.toFixed(2)}`) 
}

calMax(unitTestArray)
calMax(preFinalArray)
calMax(finalArray)

calAvg(unitTestArray)
calAvg(preFinalArray)
calAvg(finalArray)
