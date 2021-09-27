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

function morePower(p1, p2) {
    if (p1.power > p2.power){
        console.log(p1.power)
    }
    else {
        console.log(p2.power)
    }
}

morePower(person1, person2)