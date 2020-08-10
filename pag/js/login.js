//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

function MyFunction() {
    var user = $("#loginuser").val();
    var pass = $("#loginpass").val();
    if (user != "" && pass.length >= 8) {
        window.location.href = 'pag/index.html';
    };
};