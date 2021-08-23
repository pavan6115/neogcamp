console.log('connected!')

const person1 = {
    name : "Ram",
    power : 2775,
    yuga : "Treta"
}

const person2 = {
    name : "Krishna",
    power : 2936,
    yuga : "Dwapar"
}

function morePowerWithPoints(p1, p2){
    let p1TotalPower = p1.power + 35
    let p2TotalPower = p2.power + 35

    console.log('p1 total power -', p1TotalPower)
    console.log('p2 total power -', p2TotalPower)

    if (p1TotalPower > p2TotalPower){
        console.log(p1TotalPower)
    }
    else {
        console.log(p2TotalPower)
    }
}

morePowerWithPoints(person1, person2)