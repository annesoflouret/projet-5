console.log(window.location);

get("http://localhost:3000/api/cameras").then( function(response){
    const section = document.getElementsByClassName("row");
    console.log(response);
    const test = localStorage.getItem("test");
    console.log(test);

    //création des cardes de présentation des appareils photos
    for (let i = 0; i < response.length; i = i + 1)
    {   
        const div = document.createElement("div");
        div.innerHTML = response[i].name;
        div.setAttribute("class", "col-md-5 product-border mt-5 mb-4 col-sm-6 mr-4 ml-4");

        const img = document.createElement("img");
        img.setAttribute("src", response[i].imageUrl);
        img.setAttribute("width", "100%");

        const legend = document.createElement("div");
        legend.innerHTML = response[i].description;

        const lenses = document.createElement("p");
        lenses.innerHTML = "Choix des optiques: "+ response[i].lenses;
        
        const price = document.createElement("p");
        price.innerHTML = response[i].price + "€";

        const link = document.createElement("a");
        link.setAttribute("href", "produit.html?id=" + response[i]._id);

        section[1].appendChild(div);
        div.appendChild(link);
        link.appendChild(img);
        div.appendChild(legend);
        div.appendChild(lenses);
        div.appendChild(price);
    }
    
    //ajoute une div quand le nombre d'élément est impair
    //modulo 2 = le reste de la division par 2, exemple 3/2 = 1, reste 1
    if (response.length % 2 == 1) {
        const div = document.createElement("div");
        div.setAttribute("class", "col-md-5 mt-5 mb-4");
        section[1].appendChild(div);
    }
    
});




