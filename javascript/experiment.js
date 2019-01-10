var inputName = "David"
var inputAge = 20
var inputIsTeacher = true

var person = {
    name: inputName,
    age: inputAge,
    isTeacher: inputIsTeacher
}

var animal = {
    type: "Hund",
    name: "Lasse",
    age: 7,
    isSmall: true,
    husse: person
}

function getCombinedAge(inputAnimal) {
    var combinedAge = 0
    combinedAge = inputAnimal.age
    combinedAge = combinedAge + inputAnimal.husse.age
    return combinedAge
}

var combinedAgeResult = getCombinedAge(animal)

console.log(combinedAgeResult)