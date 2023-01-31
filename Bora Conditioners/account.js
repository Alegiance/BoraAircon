let theHeading = document.getElementById("heading")
let theName = document.getElementById("nameSpace")
let signedUp = document.getElementById("signupBtn")
let logedIn = document.getElementById("loginBtn")

logedIn.onclick = () => {
    theName.style.maxHeight = '0';
    theHeading.innerHTML = "Login"
    signedUp.classList.add("disable")
    logedIn.classList.remove("disable")
}
signedUp.onclick = () => {
    theName.style.maxHeight = '60px';
    theHeading.innerHTML = "Signup"
    signedUp.classList.remove("disable")
    logedIn.classList.add("disable")
}