// Funcion que muestra productos

function showProduct(product) {

    let htmlContentToAppend = "";

    htmlContentToAppend += `        
        
    <div class="list-group-item">
        <div class="row">
            <div class="col-12 col-sm-6">
                <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img class="d-block w-100" src="` + product.images[0] + `">
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src="` + product.images[1] + `">
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src="` + product.images[2] + `">
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src="` + product.images[3] + `">
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src="` + product.images[4] + `">
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </div>
            <div class="col-12 col-sm-6">
                <div class="d-flex w-100 justify-content-between">
                    <h4 class="mb-1">` + product.name + `</h4>
                </div>
                <div class="d-flex w-100 justify-content-between">
                    <small class="text-muted"> Precio: ` + product.currency + product.cost + ` </small>
                    <small class="text-muted"> ` + product.soldCount + ` vendidos  </small>
                </div>
                <div>
                    <p class="mb-1">` + product.description + `</p>
                </div>
            </div>
        </div>
    </div>
        `
    document.getElementById("prod-container").innerHTML = htmlContentToAppend;
}


// Funcion que muestra comentarios

var commentsArray = [];

function showComments(commentsArray) {

    let htmlContentToAppend = "";
    for (let i = 0; i < commentsArray.length; i++) {
        let comment = commentsArray[i];

        htmlContentToAppend += ` 

            <div class="col-12 col-sm-3">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title" id="stars-score"> ` + printStars(comment.score) + `</h5>
                        <p class="card-text"> ` + comment.description + ` </p>
                        <small class="text-muted">
                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-person-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                        </svg> ` + comment.user + ` 
                        </small>
                        <br>
                        <small class="text-muted">
                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-calendar4-week" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v1h14V3a1 1 0 0 0-1-1H2zm13 3H1v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V5z"/>
                        <path d="M11 7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-2 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"/>
                        </svg> ` + comment.dateTime + ` </small>
                    </div>
                </div>
            </div>
        </div>
        `
    }
    document.getElementById("comments-container").innerHTML = htmlContentToAppend;
}


//Función para mostrar estrellas
function printStars(stars) {
    s = ""
    for (let i = 0; i < 5; i++) {
        if (i < stars) {
            c = "checked"
        } else {
            c = ""
        }
        s += '<span class="fa fa-star ' + c + '"></span>';
    };
    return s;
}


//Funcion para que muestre nuevo comentario
function showNewComment(newscore, newcomment) {

    var today = new Date();

    comment = ` 
            <div class="col-12 col-sm-3" style="margin-top: 15px;">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title" id="stars-score"> ` + printStars(newscore) + `</h5>
                        <p class="card-text"> ` + newcomment + ` </p>
                        <small class="text-muted">
                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-person-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                        </svg>` + NombreDeUsuario + `
                        </small>
                        <br>
                        <small class="text-muted">
                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-calendar4-week" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v1h14V3a1 1 0 0 0-1-1H2zm13 3H1v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V5z"/>
                        <path d="M11 7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-2 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"/>
                        </svg> ` + today + ` </small>
                    </div>
                </div>
            </div>
            `

    document.getElementById("comments-container").innerHTML += comment;
};


//Funcion para ingresar comentario
function newComment() {

    var newscore = stars;
    var newcomment = document.getElementById("nc").value;

    if (newscore == "") {
        document.getElementById("as").innerHTML = "Debes ingresar una calificacion";
    } else if (newcomment == "") {
        document.getElementById("ac").innerHTML = "Debes ingresar un comentario con tu opinión sobre este producto";
    } else {
        document.getElementById("commentok").innerHTML = "Gracias por tu comentario! El mismo ha sido enviado exitosamente y ayudará a otros usuarios";
        showNewComment(newscore, newcomment);
        document.getElementById("addcomment").remove();
    };

};

//Funcion para asignar valor de categoria
var stars = 0;
$(".stars").click(function() {
    stars = this.value;
})


// Funcion que muestra productos relacionados

function showRelatedProducts(currentProductsArray) {

    related = product.relatedProducts;

    let htmlContentToAppend = "";

    for (let i = 0; i < currentProductsArray.length; i++) {
        let relProduct = currentProductsArray[i];

        if (related.indexOf(i) != -1) {

            htmlContentToAppend += `        
        <a href="product-info.html" class="list-group-item list-group-item-action col" style="margin: 15px;">
            <div class="row">
                <div class="col-6">
                    <img src="` + relProduct.imgSrc + `" alt="` + relProduct.description + `" class="img-thumbnail">
                </div>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <h4 class="mb-1">` + relProduct.name + `</h4>
                        <small class="text-muted"> Precio: ` + relProduct.currency + relProduct.cost + ` </small>
                    </div>
                        <p class="mb-1">` + relProduct.description + `</p>
                </div>
            </div>
        </a>
        `
        };
    };

    document.getElementById("relatedProducts-container").innerHTML += htmlContentToAppend;

}


//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e) {
    getJSONData(PRODUCT_INFO_URL).then(function(resultObj) {
        if (resultObj.status === "ok") {
            product = resultObj.data;
            showProduct(product);
        }
    });
    getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function(resultObj) {
        if (resultObj.status === "ok") {
            commentsArray = resultObj.data;
            showComments(commentsArray);
        }
    });
    getJSONData(PRODUCTS_URL).then(function(resultObj) {
        if (resultObj.status === "ok") {
            currentProductsArray = resultObj.data;
            showRelatedProducts(currentProductsArray);
        }
    });
});