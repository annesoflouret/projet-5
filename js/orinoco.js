//////////////////////////////////// Ajoute les informations d'un produit dans le code HTML ////////////////////////
function addProduct(responseProduct, section){
    const div = document.createElement("div");
        div.innerHTML = responseProduct.name;
        div.setAttribute("class", "col-md-5 product-border mt-5 mb-4 col-sm-6 mr-4 ml-4");

        const img = document.createElement("img");
        img.setAttribute("src", responseProduct.imageUrl);
        img.setAttribute("width", "100%");

        const legend = document.createElement("div");
        legend.innerHTML = responseProduct.description;

        const lenses = document.createElement("p");
        lenses.innerHTML = "Choix des optiques: "+ responseProduct.lenses;
        
        const price = document.createElement("p");
        price.innerHTML = responseProduct.price + "€";

        const link = document.createElement("a");
        link.setAttribute("href", "produit.html?id=" + responseProduct._id);

        section[1].appendChild(div);
        div.appendChild(link);
        link.appendChild(img);
        div.appendChild(legend);
        div.appendChild(lenses);
        div.appendChild(price);
}

//////////////////////////////////////// Ajoute une div //////////////////////////////////////////////////////////
function addDivToFixDisplay(section){
    const div = document.createElement("div");
    div.setAttribute("class", "col-md-5 mt-5 mb-4");
    section[1].appendChild(div);
}


get("http://localhost:3000/api/cameras").then( function(response){
    const section = document.getElementsByClassName("row");
    
    ///////////////////////////// Création des cardes de présentation des appareils photos ////////////////////////
    for (let i = 0; i < response.length; i = i + 1)
    {   
        addProduct(response[i], section);
    }
    ////////////////////////////////////////Ajoute une div quand le nombre d'élément est impair/////////////////
    ////////////////////modulo 2 = le reste de la division par 2, exemple 3/2 = 1, reste 1
    if (response.length % 2 === 1) {
        addDivToFixDisplay(section);
    }
    
}).catch(function(err){
    console.log(err);
    if(err === 0){ // requete ajax annulée
        alert("serveur HS");
    }
});