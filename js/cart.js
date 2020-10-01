//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e) {
    getJSONData(CART_INFO_URL).then(function(resultObj) {
        if (resultObj.status === "ok") {
            cartList = resultObj.data;
            showCart(cartList);
        }
    });
});

// Funcion que muestra productos

function showCart(cartList) {

    let htmlContentToAppend = "";
    for (let i = 0; i < cartList.articles.length; i++) {
        let cartProduct = cartList.articles[i];

        htmlContentToAppend += `        
        <div class="list-group-item list-group-item-action">
            <div class="row">
                <div class="col-12 col-md-3">
                    <img src="` + cartProduct.src + `" alt="` + cartProduct.name + `" class="img-thumbnail">
                </div>
                <div class="col-12 col-md-5">
                    <div class="d-flex w-100 justify-content-between">
                        <h4 class="mb-1">` + cartProduct.name + `</h4>
                    </div>
                    <div class="d-flex w-100 justify-content-between">
                        <small class="text-muted"> ` + cartProduct.count + ` vendidos  </small>
                    </div>
                </div>
                <div class="col-12 col-md-4">
                    <small class="text-muted"> Precio unitario: ` + cartProduct.currency + cartProduct.unitCost + ` </small>
                    <input class="form-control" type="number" placeholder="cantidad" id="cant">
                    <small class="text-muted"> Subtotal: ` + cartProduct.currency + ` xxx </small>
                </div>
            </div>
        </div>
        `
    }

    document.getElementById("cart-list-container").innerHTML = htmlContentToAppend;
};