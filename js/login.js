//Checkeo de usuario y contrasena, alertas de errores y redireccion 
function Ingresar() {
    var user = $("#loginuser").val();
    var pass = $("#loginpass").val();

    if (user == "") {
        $("#alertuser").text("Debe ingresar nombre de usuario");
    } else if (pass.length < 8) {
        $("#alertpass").text("Debe ingresar contraseña mayor a 8 caracteres");
    } else {
        sessionStorage.setItem('user', user);
        window.location.href = 'index.html';
    };
};

//Input usuario 
$(document).ready(function() {
    $("#loginuser").focus(function() {
        $("#loginuser").css({ 'border-color': 'rgb(214, 28, 108)', 'background-color': 'lightgrey' });
    });
});

$(document).ready(function() {
    $("#loginuser").blur(function() {
        $("#loginuser").css({ 'border-color': 'ffffff', 'background-color': 'white' });
    });
});

//Input contrasena 
$(document).ready(function() {
    $("#loginpass").focus(function() {
        $("#loginpass").css({ 'border-color': 'rgb(214, 28, 108)', 'background-color': 'lightgrey' });
    });
});

$(document).ready(function() {
    $("#loginpass").blur(function() {
        $("#loginpass").css({ 'border-color': 'ffffff', 'background-color': 'white' });
    });
});

//Posibilidad de ver contrasena ingresada 
function seePass() {
    var x = document.getElementById("loginpass");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

//Funcion de autenticacion de Google 
function onSignIn(googleUser) {
        // Useful data for your client-side scripts:
        var profile = googleUser.getBasicProfile();
        console.log("ID: " + profile.getId()); // Don't send this directly to your server!
        console.log('Full Name: ' + profile.getName());
        console.log('Given Name: ' + profile.getGivenName());
        console.log('Family Name: ' + profile.getFamilyName());
        console.log("Image URL: " + profile.getImageUrl());
        console.log("Email: " + profile.getEmail());

        // The ID token you need to pass to your backend:
        var id_token = googleUser.getAuthResponse().id_token;
        console.log("ID Token: " + id_token);
      }
