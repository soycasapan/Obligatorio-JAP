//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

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