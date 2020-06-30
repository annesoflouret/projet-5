get("http://localhost:3000/api/cameras/", function(response){
    console.log(response);
    //ajouter un élément au panier
    const basketContent = JSON.parse(localStorage.getItem("basketContent"));//récuperation local storage
    console.log(basketContent)
    const container = document.getElementById("product-basket");
    if (basketContent.length == 0){ //Message panier vide
        const emptyBasket = document.createElement("div")
        emptyBasket.innerHTML = "Votre panier est vide";
        container.appendChild(emptyBasket);
    } else {
        let totalPrice = 0;
        for (let productBasket of basketContent){
            for (let productInfo of response){
                if (productBasket.id == productInfo._id){
                    const productContainer = document.createElement("div");
                    productContainer.setAttribute("class", "row justify-content-around mb-5");
                    
                    const divTitle = document.createElement("div");
                    divTitle.setAttribute("class", "col-md-3 ");
    
                    const name = document.createElement("p");
                    name.innerHTML = productInfo.name;
                    
                    const image = document.createElement("img");
                    image.innerHTML = productInfo.imageUrl;
                    image.setAttribute("src", productInfo.imageUrl);
                    image.setAttribute("width", "20%");   
                    
                    //Supprime élément
                    const btn = document.createElement("button"); 
                    btn.innerHTML = "Supprimer";
                    btn.setAttribute("class", "bg-light text-dark");
                    btn.setAttribute("data-id", productInfo._id);
    
                    const divLenses = document.createElement("div");
                    divLenses.setAttribute("class", "col-md-3");
                    divLenses.innerHTML = productBasket.lenses;
                    
                    const divQuantity = document.createElement("div");
                    divQuantity.setAttribute("class", "col-md-3");
    
                    //Modifier la quantité
                    const quantityElement = document.createElement("select");
                    quantityElement.setAttribute("class", "product-quantity")
                    quantityElement.addEventListener("change", function() {
                        let totalPrice = 0;
                        let i = 0;
                        const totalPriceBasket = document.getElementById("total-price");
                        const quantities = document.getElementsByClassName("product-quantity")
                        for (let productBasket of basketContent){
                            for (let productInfo of response){
                                if (productBasket.id == productInfo._id){
                                    totalPrice += quantities[i].value * productInfo.price; 
                                    i += 1;
                                }
                            }
                        }
                        totalPriceBasket.innerHTML = "Total: " + totalPrice + "€";
                    });

                    const quantity = 10;
                    for (let i = 1; i <= quantity; i = i + 1){
                        const option = document.createElement("option");
                        option.setAttribute("value", i);
                        option.innerHTML = i;
                        quantityElement.appendChild(option);
                    }
                    
                    const divPrice = document.createElement("div");
                    divPrice.setAttribute("class", "col-md-3");
                    divPrice.innerHTML = productInfo.price + "€";
                    totalPrice = totalPrice + productInfo.price;        

                    // supprimer un élément du panier
                    btn.addEventListener('click', function(e) { 
                        console.log(basketContent.length);
                        const id = e.target.getAttribute("data-id");
    
                        for (let x = 0; x != basketContent.length; x = x + 1) {
                            console.log(basketContent[x].id)
                            if (basketContent[x].id == id){
                                basketContent.splice(x, 1);
                                break;
                            }
                        }
                        localStorage.setItem("basketContent", JSON.stringify(basketContent)); // Sauvegarde du panier mis à jour
                        window.location.href = "panier.html"; // on revient à la page d'acceuil */ 
                    });
                    
                    productContainer.appendChild(divTitle);
                    divTitle.appendChild(name);
                    divTitle.appendChild(image);
                    divTitle.appendChild(btn); 
                    productContainer.appendChild(divLenses);
                    productContainer.appendChild(divQuantity);
                    divQuantity.appendChild(quantityElement);
                    productContainer.appendChild(divPrice);
                    container.appendChild(productContainer);
                   
                }
            }
        }

        // calcul du total
        const totalPriceBasket = document.getElementById("total-price")
        totalPriceBasket.innerHTML = "Total: " + totalPrice + "€";
    }
});

// Message d'erreur formumlaire de validation
const btn = document.getElementById("btn");

btn.addEventListener("click", function(event){
    event.preventDefault();
    
    console.log(name.value);
    const error = document.getElementById("error");
    error.innerHTML = "";
    let inputIds = ["name", "firstname", "email", "adresse", "city"];
    let inputTexts = ["nom", "prénom", "mail", "adresse", "ville"];
    for (let i = 0; i < inputIds.length; i = i + 1){
        const input = document.getElementById(inputIds[i]);
        if (input.value == ""){
            const errorMessage = document.createElement("p");
            errorMessage.setAttribute("class", "error-message-color");
            errorMessage.innerHTML = "Merci d'indiquer votre " + inputTexts[i] + ".";
            error.appendChild(errorMessage);
        }
    }

    const jsonBody = {
        "contact": {
            "name": document.getElementById("name").value,
            "firstname": document.getElementById("firstname").value,
            "mail": document.getElementById("email").value,
            "adress": document.getElementById("adresse").value,
            "city": document.getElementById("city"),

        },
        'produits': [128932, 37838734, 37833]
    }
    post(jsonBody)
    
})



