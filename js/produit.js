////////////// Récuprérer l'id dans l'URL /////////////////////////////////////////////////
function getId(){
    const param = window.location.search;
    const id = param.replace("?id=", ""); // Retire ?ID= des parametres de l'URL, Recupère uniquement l'identitfiant
    return id;
}
///////////////// Ajoute le produit dans le panier avec la lentille sélectionnée par l'utilisateur /////
const id = getId();
function addToBasket(lenseSelected){
    let basketContent = JSON.parse(localStorage.getItem("basketContent"));
    if (basketContent === undefined) {
        basketContent = [];
    }

    let product = new Product(id, lenseSelected);

    basketContent.push(product);
    localStorage.setItem("basketContent", JSON.stringify(basketContent));
}

///////////////////////// Ajoute les informations produit dans la page HTLM ///////////////////
function addProductInfo(response){
    //création du cadre de l'appareil photo séléctionné
    const container = document.getElementById("productcontainer");

    const div = document.createElement("div");
    div.setAttribute("class", "product-border col-md-6 offset-md-3 mt-5 mb-5 p-3");

    const img = document.createElement("img");
    img.setAttribute("src", response.imageUrl);
    img.setAttribute("width", "100%");

    const title = document.createElement("div");
    title.innerHTML = response.name;
    title.setAttribute("class", "producttitle text-center mb-4");

    const legend = document.createElement("div");
    legend.innerHTML = response.description;
    
    const price = document.createElement("p");
    price.innerHTML = response.price + "€";
    
    // Choix des lentilles
    const lenses = document.createElement("select");
    
    const optionDefault = document.createElement("option");
    optionDefault.innerHTML = "Please choose an option";
    lenses.appendChild(optionDefault);

    //alerte ajout panier
    const btn = document.createElement("button"); 
    btn.innerHTML = "Ajouter au panier";

    // Ajout d'élément au local storage
    btn.addEventListener('click', function() { 
        const lenses = document.getElementsByTagName("select");         
        let lenseSelected = lenses[0].value;

        addToBasket(lenseSelected);
        alert("ajouté au panier");
    });

    for (let i = 0; i < response.lenses.length; i = i + 1){
        const option = document.createElement("option");
        option.setAttribute("value", response.lenses[i]);
        option.innerHTML = response.lenses[i];
        lenses.appendChild(option);
    }
    // arboresence
    container.appendChild(div);
    div.appendChild(title);
    div.appendChild(img);
    div.appendChild(legend);
    div.appendChild(lenses);
    div.appendChild(price);
    div.appendChild(btn);
}

get("http://localhost:3000/api/cameras/" + id).then( function(response){
    addProductInfo(response);
    
}).catch(function(err){
    console.log(err);
    if(err === 0){ // requete ajax annulée
        alert("serveur HS");
    }
});