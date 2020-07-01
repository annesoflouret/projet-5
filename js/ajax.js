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

function post(url, jsonBody, callback){
    let request = new XMLHttpRequest();
    request.open("POST", url);
    request.setRequestHeader("Content-Type", "application/json");
    
    request.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 201) {
            callback(JSON.parse(this.responseText));
        }
    }
    request.send(JSON.stringify(jsonBody));
}