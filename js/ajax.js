function get(url, callback){
    let request = new XMLHttpRequest();
    request.open("GET", url);
    request.onreadystatechange = function(){
        if (this.readyState == XMLHttpRequest.DONE && this.status == 200){
            callback(JSON.parse(request.responseText));
        }
    };
    request.send();  
}

function post(jsonBody){
    let request = new XMLHttpRequest();
    request.open("POST", "http://localhost:3000/api/cameras/order");
    request.setRequestHeader("Content-Type", "application/json");
    
    request.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 201) {
            let response = JSON.parse(this.responseText);
            console.log(response);
            localStorage.setItem("basketContent", JSON.stringify([]));
            localStorage.setItem("orderConfirmation", response.orderId);
            window.location.href = "confirmation.html"; // on va de tout facon à la page de confirmation
        }
    }
    request.send(JSON.stringify(jsonBody));
}