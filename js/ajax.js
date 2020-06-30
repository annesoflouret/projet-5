function get(url, callback){
    let request = new XMLHttpRequest();
    request.open("GET", url);
    request.onreadystatechange = function(){
        if (this.readyState == XMLHttpRequest.DONE && this.status == 200){
            callback(JSON.parse(request.responseText));
        }
    }
    request.send();  
}

function post(jsonBody){
    let request = new XMLHttpRequest();
    request.open("POST", "hhttp://localhost:3000/api/cameras/order");
    request.setRequestHeader("Content-Type", "application/json");
    request.send(JSON.stringify(jsonBody));
}

