//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e) {
    getJSONData(CART_INFO_URL).then(function(resultObj) {
        if (resultObj.status === "ok") {
            cartList = resultObj.data;
            showCart(cartList);
            subtotalArticulos();
        }
    });
});

// Funcion que muestra productos

function showCart(cartList) {

    let htmlContentToAppend = "";
    for (let i = 0; i < cartList.articles.length; i++) {
        let cartProduct = cartList.articles[i];

        htmlContentToAppend += `        
       <div class="list-group-item list-group-item-action" id="articulo` + i + `">
           <div class="row">
               <div class="col-12 col-md-3">
                   <img src="` + cartProduct.src + `" alt="` + cartProduct.name + `" class="img-thumbnail">
               </div>
               <div class="col-12 col-md-5">
                   <div class="d-flex w-100 justify-content-between">
                       <h4 class="mb-1">` + cartProduct.name + `</h4>
                   </div>
               </div>
               <div class="col-12 col-md-4">
                   <small class="text-muted"> Precio unitario: ` + cartProduct.currency + cartProduct.unitCost + ` </small>
                   <div class="row">
                    <div class="col-8">
                   <input class="form-control" type="number" min="1" max="100" placeholder="` + cartProduct.count + `" onchange="calcularSubtotal('` + cartProduct.currency + `', this.value, ` + cartProduct.unitCost + `, 'numero` + i + `');subtotalArticulos(); costoEnvio(); calcularCostoFinal()">
                   </div>
                   <div class="col-2">
                       <button type="button" class="btn btn-outline-secondary" onclick="eliminarProducto('articulo` + i + `'); subtotalArticulos(); costoEnvio(); calcularCostoFinal()" > <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                       <path fill-rule="evenodd" d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"/> </svg></button>
                   </div>
                   </div>
                   <span class="text-muted bold"> Total: UYU </span>
                   <span class="text-muted bold total" id="numero` + i + `" >
                   ` + subtotal(cartProduct.currency, cartProduct.count, cartProduct.unitCost) + `
                   </span>                    
               </div>
           </div>
       </div>
       `
    }

    document.getElementById("cart-list-container").innerHTML = htmlContentToAppend;
};


// FUNCIONES PARA CALCULAR COSTOS

// Funcion que calcula subtotales iniciales de cada articulo en pesos

function subtotal(currency, cant, precio) {
    if (currency == "UYU") {
        total = cant * precio;
        return total;
    } else {
        total = cant * precio;
        return total * 40;
    }
};


// Funcion que calcula subtotal de cada producto cuando el usuario cambia cantidad

function calcularSubtotal(currency, cant, precio, id) {
    if (currency == "UYU") {
        total = cant * precio;
        texto = total;
        document.getElementById(id).innerHTML = texto;
    } else {
        total = cant * precio;
        texto = total * 40;
        document.getElementById(id).innerHTML = texto;
    }
};


// Funcion que calcula subtotal de todos los productos seleccionados

var costoArticulo = document.getElementsByClassName("total");

function subtotalArticulos() {
    var costoTotalDeArticulos = 0
    for (let j = 0; j < costoArticulo.length; j++) {
        costoTotalDeArticulos += parseInt(costoArticulo[j].innerHTML);
    };
    document.getElementById("subtotal-art").innerHTML = costoTotalDeArticulos;
};


// Funcion para calcular costo de envio

function costoEnvio() {
    var subtotal = parseInt(document.getElementById("subtotal-art").innerHTML);
    var porcentaje = 0;

    if (document.getElementById('premium').checked) {
        porcentaje = parseFloat(document.getElementById('premium').value);
    } else if (document.getElementById('express').checked) {
        porcentaje = parseFloat(document.getElementById('express').value);
    } else if (document.getElementById('standard').checked) {
        porcentaje = parseFloat(document.getElementById('standard').value);
    };

    var envio = parseInt(subtotal * porcentaje);
    document.getElementById("costo-envio").innerHTML = envio;
    calcularCostoFinal();
};


//Funcion para calcular costo total (envio incluido)

function calcularCostoFinal() {
    var subtotal = parseInt(document.getElementById("subtotal-art").innerHTML);
    var envio = parseInt(document.getElementById("costo-envio").innerHTML);
    total = subtotal + envio;
    document.getElementById("total").innerHTML = total;
};


//VALIDACIONES

//Validacion costo de envio
function validarCostoEnvio() {
    var tipoEnvio = document.getElementsByName("envio");
    var formValid = false;

    var i = 0;
    while (!formValid && i < tipoEnvio.length) {
        if (tipoEnvio[i].checked) formValid = true;
        i++;
    }

    if (!formValid) {
        document.getElementById("error-costo-envio").innerHTML = "Debe seleccionar un tipo de envío";
        return formValid;
    } else {
        document.getElementById("error-costo-envio").innerHTML = "";
        return true;
    }
};

//Validacion datos de envio
function validarDatosEnvio() {
    var addrElem = document.getElementsByClassName("req");
    var formValid = true;

    for (var i = 0; i < addrElem.length; i++) {
        formValid = formValid && addrElem[i].value != "";
    }
    if (formValid == false) {
        document.getElementById("error-datos-envio").innerHTML = "Debe completar todos los campos";
        return false;
    } else {
        document.getElementById("error-datos-envio").innerHTML = ""
        return true;
    };
}

//Validacion datos tarjeta de cedito
function validarTarjeta() {
    var datosTarj = document.getElementsByClassName("reqTarj");
    var formValid = true;

    for (var i = 0; i < datosTarj.length; i++) {
        formValid = formValid && datosTarj[i].value != "";
    }
    if (formValid == false) {
        return false;
    } else {
        return true;
    };
}

//Validacion datos transferencia
function validarTransferencia() {
    var datosTrans = document.getElementById("numeroTransferencia").value;

    if (datosTrans == "") {
        return false;
    } else {
        return true;
    };
}


//Validacion Forma de Pago
function validarFormaPago() {
    document.getElementById("error-pago").innerHTML = "";
    if (validarTarjeta() == true && validarTransferencia() == false) {
        $('#pagoModal').modal('hide');
        return true;
    } else if (validarTarjeta() == false && validarTransferencia() == true) {
        $('#pagoModal').modal('hide');
        return true;
    } else {
        document.getElementById("error-pago").innerHTML = "Debe elegir un unico medio de pago y completar los campos del mismo para continuar";
        return false;
    };
}


//Efectuar compra
function validarCompra() {
    if (validarFormaPago() == true && validarDatosEnvio() == true && validarCostoEnvio() == true) {
        getJSONData(CART_BUY_URL).then(function(resultObj) {
            if (resultObj.status === "ok") {
                mensaje = resultObj.data;
                document.getElementById("exito-compra").innerHTML = mensaje.msg;
            }
        });
        document.getElementById("carrito").remove();
    } else {
        document.getElementById("error-compra").innerHTML = "No se ha podido efectuar la compra, revisa los datos de envio y forma de pago";
    };
}


//Eliminar un producto (papelera)
function eliminarProducto(eliminado) {
    document.getElementById(eliminado).remove();
};