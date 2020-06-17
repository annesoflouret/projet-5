console.log(window.location);

get("http://localhost:3000/api/cameras", function(response){
    let section = document.getElementsByTagName('section');
    console.log(response);
    localStorage.setItem("test", "bonjour");
    const test = localStorage.getItem("test");
    console.log(test);
    for (let i = 0; i < response.length; i = i + 1)
    {
        let div = document.createElement("div");
        div.innerHTML = response[i].name;
        let img = document.createElement("img");
        img.setAttribute("src", response[i].imageUrl);
        img.setAttribute("width", 500);
        let link = document.createElement("a");
        link.setAttribute("href", "produit.html?id=" + response[i]._id);
        section[1].appendChild(div);
        div.appendChild(link);
        link.appendChild(img);
    }
});




