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

function calPower(obj){
    let n = obj.name;
    for (a = 0; a < n.length; a++){
        power = 35 * n.length;
        return power
    }
}

function morePowerWithPoints(p1, p2){
    let p1TotalPower = calPower(p1) + p1.power
    let p2TotalPower = calPower(p2) + p2.power

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