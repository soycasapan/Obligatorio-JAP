//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e) {
    document.getElementById("u-nombre").value = localStorage.getItem('nuevonombre');
    document.getElementById("u-apellido").value = localStorage.getItem('nuevoapellido');
    document.getElementById("u-email").value = localStorage.getItem('nuevoemail');
    document.getElementById("u-telefono").value = localStorage.getItem('nuevotelefono');
    document.getElementById("u-edad").value = localStorage.getItem('nuevoedad');
});


// funcion que almacena datos de usuario con modificaciones en sessionStorage
function guardarDatos() {
    //nombre
    var usuarionombre = $("#u-nombre").val();
    localStorage.setItem('nuevonombre', usuarionombre);
    document.getElementById("u-nombre").value = usuarionombre;
    //apellido
    var usuarioapellido = $("#u-apellido").val();
    localStorage.setItem('nuevoapellido', usuarioapellido);
    document.getElementById("u-apellido").value = usuarioapellido;
    //email
    var usuarioemail = $("#u-email").val();
    localStorage.setItem('nuevoemail', usuarioemail);
    document.getElementById("u-email").value = usuarioemail;
    //telefono
    var usuariotelefono = $("#u-telefono").val();
    localStorage.setItem('nuevotelefono', usuariotelefono);
    document.getElementById("u-telefono").value = usuariotelefono;
    //edad
    var usuarioedad = $("#u-edad").val();
    localStorage.setItem('nuevoedad', usuarioedad);
    document.getElementById("u-edad").value = usuarioedad;
    infoUsuario = {
        "nombre": usuarionombre,
        "apellido": usuarioapellido,
        "email": usuarioemail,
        "telefono": usuariotelefono,
        "edad": usuarioedad,
    };
};