console.log(window.location);
function getId(){
    let param = window.location.search;
    let id = param.replace("?id=", "");
    return id;
}

let id = getId();
console.log(id);
get("http://localhost:3000/api/cameras/" + id, function(response){
console.log(response);

        //création du cadre de l'appareil photo séléctionné
        let container = document.getElementById("productcontainer");

        let div = document.createElement("div");
        div.setAttribute("class", "product-border col-md-6 offset-md-3 mt-5 mb-5 p-3");

        let img = document.createElement("img");
        img.setAttribute("src", response.imageUrl);
        img.setAttribute("width", "100%");

        let title = document.createElement("div");
        title.innerHTML = response.name;
        title.setAttribute("class", "producttitle text-center mb-4");

        let legend = document.createElement("div");
        legend.innerHTML = response.description;
        
        let price = document.createElement("p");
        price.innerHTML = response.price + "€";
        
        // Choix des lentilles
        let lenses = document.createElement("select");
        //lenses.setAttribute("class", "d-flex justify-content-center");
    
        let optionDefault = document.createElement("option");
        optionDefault.innerHTML = "Please choose an option";
        lenses.appendChild(optionDefault);

        let btn = document.createElement("button"); 
        btn.innerHTML = "Ajouter au panier";


        // Ajout d'élément au local storage
        btn.addEventListener('click', function() { 
        let lenses = document.getElementsByTagName("select");         
        let lenseSelected = lenses[0].value;
        console.log(lenseSelected);
        console.log(id);

        let basketContent = JSON.parse(localStorage.getItem("basketContent"));
        if (basketContent == undefined) {
            basketContent = [];
        }

        let product = { lenses: lenseSelected, 
                        id: id,
        };

        basketContent.push(product);
        localStorage.setItem("basketContent", JSON.stringify(basketContent));
});

        for (let i = 0; i < response.lenses.length; i = i + 1){
            let option = document.createElement("option");
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
        

});