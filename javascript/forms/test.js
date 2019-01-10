
var car = []

function signUp(){

    const regnr = document.getElementById("regnr").value
    const brand = document.getElementById("brand").value
    const caryear = document.getElementById("epost").value


// Skapa ett objekt som har fyllts in i formuläret
    const carInfo = {
        whatregnumber: regnr,
        whatcarbrand: brand,
        whatyeariscar: caryear,
    }

    console.log(carInfo)

    //spara bil objektet i vår users lista
car.push(carInfo)

//kalla på funktionen som printar ut alla users
printUsers(car)
}

function printUsers(car){

    console.log(carInfo)
    
    const printregnr = document.getElementById("accountListContainer")
    var list = document.createElement("ul")

    var printcarbrand = document.createElement("li")
    printcarbrand.innerText = "Regnr: " + car.regnr

    var brandListItem = document.createElement("li")
    brandListItem.innerText = "Efternamn: " + car.brand

    var caryearListItem = document.createElement("li")
    epostListItem.innerText = "Epost: " + user.epost
    
    var usernameListItem = document.createElement("li")
    usernameListItem.innerText = "Username: " + user.username
    
    var passwordListItem = document.createElement("li")
    passwordListItem.innerText = "Password: " + user.password

    var favoriteProgrammingLanguageListItem = document.createElement("li")
    favoriteProgrammingLanguageListItem.innerHTML = "Språk: " + user.favoriteProgrammingLanguage

    list.appendChild(firstnameListItem)
    list.appendChild(lastnameListItem)
    list.appendChild(epostListItem)
    list.appendChild(usernameListItem)
    list.appendChild(passwordListItem)
    list.appendChild(favoriteProgrammingLanguageListItem)

    //Lägg på ny user utan att ersätta den som finns
    accountListContainer.innerHTML += list.outerHTML
}


