//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e) {
    document.getElementById("u-nombre").value = localStorage.getItem('nuevonombre');
    document.getElementById("u-apellido").value = localStorage.getItem('nuevoapellido');
    document.getElementById("u-email").value = localStorage.getItem('nuevoemail');
    document.getElementById("u-telefono").value = localStorage.getItem('nuevotelefono');
    document.getElementById("u-edad").value = localStorage.getItem('nuevoedad');
    document.getElementById('base64').src = "data:image/jpeg;base64," + localStorage.getItem('nuevafoto');
});

var infoUsuario = {
    "nombre": "",
    "apellido": "",
    "email": "",
    "telefono": "",
    "edad": "",
};

//Funcion que almacena datos de usuario con modificaciones en localStorage y crea JSON
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


//Funcion que valida datos obligatorios
function validarDatos() {
    if (usuarionombre == "" && usuariomail == "") {
        document.getElementById('error-datos').innerHTML = "Debes completar los datos obligatorios";
    };
};


//Funcion para cambiar imagen de perfil, basada en funcion existente de StackOverflow que carga la imagen, la convierte a base 64 y devuelve la informacion para guardarla en localStorage

// Check for the File API support.
if (window.File && window.FileReader && window.FileList && window.Blob) {
    document.getElementById('files').addEventListener('change', handleFileSelect, false);
} else {
    alert('The File APIs are not fully supported in this browser.');
}

function handleFileSelect(evt) {
    var f = evt.target.files[0]; // FileList object
    var reader = new FileReader();
    // Closure to capture the file information.
    reader.onload = (function(theFile) {
        return function(e) {
            var binaryData = e.target.result;
            //Converting Binary Data to base 64
            var base64String = window.btoa(binaryData);
            //showing file converted to base64
            document.getElementById('base64').src = "data:image/jpeg;base64," + base64String;
            localStorage.setItem('nuevafoto', base64String);
        };
    })(f);
    // Read in the image file as a data URL.
    reader.readAsBinaryString(f);
};