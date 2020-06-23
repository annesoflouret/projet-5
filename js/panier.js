get("http://localhost:3000/api/cameras/", function(response){
    console.log(response);
    //ajouter un élément au panier
    let basketContent = JSON.parse(localStorage.getItem("basketContent"));//récuperation local storage
    console.log(basketContent)
    let container = document.getElementById("product-basket");
    for (let productBasket of basketContent){
        for (let productInfo of response){
            if (productBasket.id == productInfo._id){
                let productContainer= document.createElement("div");
                productContainer.setAttribute("class", "row justify-content-around mb-5");
                
                let divTitle = document.createElement("div");
                divTitle.setAttribute("class", "col-md-3 ");

                let name = document.createElement("p");
                name.innerHTML = productInfo.name;
                divTitle.appendChild(name);

                let image = document.createElement("img");
                image.innerHTML = productInfo.imageUrl;
                image.setAttribute("src", productInfo.imageUrl);
                image.setAttribute("width", "20%");
                divTitle.appendChild(image);

                let btn = document.createElement("button"); 
                btn.innerHTML = "Supprimer";
                btn.setAttribute("class", "bg-light text-dark");
                btn.setAttribute("data-id", productInfo._id);


                let divLenses = document.createElement("div");
                divLenses.setAttribute("class", "col-md-3");
                divLenses.innerHTML = productBasket.lenses;
                
                let divQuantity = document.createElement("div");
                divQuantity.setAttribute("class", "col-md-3");

                let quantity = document.createElement("select");
                for (let i = 1; i < 11; i = i + 1){
                    let option = document.createElement("option");
                    option.setAttribute("value", i);
                    option.innerHTML = i;
                    quantity.appendChild(option);
                }
                divQuantity.appendChild(quantity);
                

                let divPrice = document.createElement("div");
                divPrice.setAttribute("class", "col-md-3");
                divPrice.innerHTML = productInfo.price + "€";


                btn.addEventListener('click', function(e) { 
                    console.log(basketContent.length);
                    let id = e.target.getAttribute("data-id");

                    for (let x = 0; x != basketContent.length; x = x + 1) {
                        console.log(basketContent[x].id)
                        if (basketContent[x].id == id){
                            basketContent.splice(x, 1);
                            break;
                        }
                    }
                    localStorage.setItem('basketContent', JSON.stringify(basketContent)); // Sauvegarde du panier mis à jour
                    window.location.href = "panier.html"; // on revient à la page d'acceuil */ 
                });
                
                productContainer.appendChild(divTitle);
                divTitle.appendChild(btn); 
                productContainer.appendChild(divLenses);
                productContainer.appendChild(divQuantity);
                productContainer.appendChild(divPrice);
                container.appendChild(productContainer);
            }
        }
    }
});






