//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e) {
    //convierte JSON en objeto JS para leer datos almacenados en localStorage;
    var infoUsuario = JSON.parse(localStorage.getItem("infoUsuario"));
    document.getElementById("u-nombre").value = infoUsuario.nombre;
    document.getElementById("u-apellido").value = infoUsuario.apellido;
    document.getElementById("u-email").value = infoUsuario.email;
    document.getElementById("u-telefono").value = infoUsuario.telefono;
    document.getElementById("u-edad").value = infoUsuario.edad;
    document.getElementById('base64').src = "data:image/jpeg;base64," + localStorage.getItem('nuevafoto');
});


//Funcion que almacena datos de usuario con modificaciones en localStorage y crea JSON
function guardarDatos() {
    var usuarionombre = $("#u-nombre").val();
    var usuarioapellido = $("#u-apellido").val();
    var usuarioemail = $("#u-email").val();
    var usuariotelefono = $("#u-telefono").val();
    var usuarioedad = $("#u-edad").val();
    if (usuarionombre == "" || usuarioemail == "") {
        document.getElementById("error-datos").innerHTML = "Debes completar los campos obligatorios indicados con un *";
        document.getElementById("success-datos").innerHTML = "";
    } else {
        document.getElementById("error-datos").innerHTML = "";
        document.getElementById("success-datos").innerHTML = "Tus datos han sido guardados exitosamente!";
        var infoUsuario = {
            "nombre": usuarionombre,
            "apellido": usuarioapellido,
            "email": usuarioemail,
            "telefono": usuariotelefono,
            "edad": usuarioedad,
        };
        //convierte objeto JS en JSON para que los datos sean almacenados en localStorage;
        localStorage.setItem("infoUsuario", JSON.stringify(infoUsuario));
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