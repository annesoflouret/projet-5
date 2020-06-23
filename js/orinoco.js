console.log(window.location);

get("http://localhost:3000/api/cameras", function(response){
    let section = document.getElementsByClassName("row");
    console.log(response);
    localStorage.setItem("test", "bonjour");
    const test = localStorage.getItem("test");
    console.log(test);

    //création des cardes de présentation des appareils photos
    for (let i = 0; i < response.length; i = i + 1)
    {   
        let div = document.createElement("div");
        div.innerHTML = response[i].name;
        div.setAttribute("class", "col-md-5 product-border mt-5 mb-4");

        let img = document.createElement("img");
        img.setAttribute("src", response[i].imageUrl);
        img.setAttribute("width", "100%");

        let legend = document.createElement("div");
        legend.innerHTML = response[i].description;

        let lenses = document.createElement("p");
        lenses.innerHTML = "Choix des optiques: "+ response[i].lenses;
        
        let price = document.createElement("p");
        price.innerHTML = response[i].price + "€";

        let link = document.createElement("a");
        link.setAttribute("href", "produit.html?id=" + response[i]._id);

        section[1].appendChild(div);
        div.appendChild(link);
        link.appendChild(img);
        div.appendChild(legend);
        div.appendChild(lenses);
        div.appendChild(price);
    }
    
    // espace vide pour organiser les éléments
    if (response.length % 2 == 1) {
        let div = document.createElement("div");
        div.setAttribute("class", "col-md-5 mt-5 mb-4");
        section[1].appendChild(div);
    }
    
});




