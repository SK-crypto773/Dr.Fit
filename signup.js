import firebase from './firebase.js';
var link = document.getElementById('signUp');
link.addEventListener('click', signUp);

function signUp(){
    var email = document.getElementById("email").value
    var password = document.getElementById("password").value
    var name = document.getElementById("name").value
    localStorage.setItem("drMedName", name)
    console.log(email)
    console.log(password)
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log("Success")
        alert("You registered Succesfully!")
        window.location.href = "login.html"
        // ...
    });
}