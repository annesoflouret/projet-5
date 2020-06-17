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
        let main = document.getElementsByTagName('main');
        let div = document.createElement("div");
        let img = document.createElement("img");
        img.setAttribute("src", response.imageUrl);
        img.setAttribute("width", 1000);
        let title = document.createElement("div");
        title.innerHTML = response.name;
        let price = document.createElement("p");
        price.innerHTML = response.price + "€";
        let lenses = document.createElement("select");
        let optionDefault = document.createElement("option");
        optionDefault.innerHTML = "Please choose an option";
        lenses.appendChild(optionDefault);
        for (let i = 0; i < response.lenses.length; i = i + 1){
            let option = document.createElement("option");
            option.setAttribute("value", response.lenses[i]);
            option.innerHTML = response.lenses[i];
            lenses.appendChild(option);
        }
        


        // arboresence
        main[0].appendChild(div);
        div.appendChild(img);
        div.appendChild(title);
        div.appendChild(lenses);
        div.appendChild(price);

});


