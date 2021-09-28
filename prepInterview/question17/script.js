console.log('connected!')

const person1 = {
    name : "Ram",
    power : 2500,
    yuga : "Treta"
}

const person2 = {
    name : "Krishna",
    power : 2325,
    yuga : "Dwapar"
}

function calTotalPower(p){
    let power = 0
    for(let i = 0; i < p.name.length; i++){
        power = p.name.length * 35
    }
    // console.log(power)
    return power
}

function higherPower(p1, p2) {
    let p1TotalPower = calTotalPower(p1) + p1.power
    let p2TotalPower = calTotalPower(p2) + p2.power
    console.log(p1TotalPower > p2TotalPower ? p1TotalPower : p2TotalPower )
}

higherPower(person1, person2)