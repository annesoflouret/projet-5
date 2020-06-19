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
