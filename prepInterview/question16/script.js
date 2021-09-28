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

function higherPower(p1, p2){
    console.log(p1.power > p2.power ? p1.power : p2.power)
}

higherPower(person1, person2)