console.log('connected!')

const person1 = {
    name : "Ram",
    age : 25,
    yuga : "Treta"
}

const person2 = {
    name : "Krishna",
    age : 31,
    yuga : "Dwapar"
}

function higherAge(p1, p2) {
    console.log(p1.age > p2.age ? p1.age : p2.age)
}

higherAge(person1, person2)
