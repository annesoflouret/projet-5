function get(url){
    const promise = new Promise(function(resolve, reject){
        let request = new XMLHttpRequest();
        request.open("GET", url);
        request.onreadystatechange = function(){
            if (this.readyState === XMLHttpRequest.DONE){
                if(this.status === 200){
                    resolve(JSON.parse(request.responseText));
                }else{
                    reject(request.status);
                }
            }
        };
        request.send(); 
    });
    return promise;
}

function post(url, jsonBody, callback){
    let request = new XMLHttpRequest();
    request.open("POST", url);
    request.setRequestHeader("Content-Type", "application/json");
    
    request.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 201) {
            callback(JSON.parse(this.responseText));
        }
    }
    request.send(JSON.stringify(jsonBody));
}
