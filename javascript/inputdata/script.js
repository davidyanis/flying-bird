
var signUp = []
var accountInfo;

function clickRegister() {

    var username = document.getElementById("username").value
    var email = document.getElementById("email").value
    var password = document.getElementById("password").value

    /* Objekt */
    accountInfo = {
        myUser: username,
        myEmail: email,
        myPass: password,
    }

    console.log(accountInfo)

    signUp.push(accountInfo)

    printUsers()
}

function printUsers() {
    console.log(accountInfo)

    /* push to specific HTML DIV */
    var printusername = document.getElementById("pushtohtml")
    var list = document.createElement("ul")

    /* get all input */
    var printName = document.createElement("li")
    printName.innerText = "username" + accountInfo.username

    var printEmail = document.createElement("li")
    printEmail.innerText = "email" + accountInfo.email

    var printPass = document.createElement("li")
    printPass.innerText = "password" + accountInfo.password

    list.appendChild(printName)
    list.appendChild(printEmail)
    list.appendChild(printPass)
    printusername.appendChild(list)
}

