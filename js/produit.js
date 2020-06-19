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
        

        let lenses = document.createElement("select");

        let optionDefault = document.createElement("option");
        optionDefault.innerHTML = "Please choose an option";
        lenses.appendChild(optionDefault);

        let btn = document.createElement("button"); 
        btn.innerHTML = "Ajouter au panier";

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




