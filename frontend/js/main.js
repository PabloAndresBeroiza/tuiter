window.onload = function (){
    window.onkeypress = function (){
      verificaTecla(event);  
    };
};

var barraespaciadora = 32;
function verificaTecla(e) {
    var keynum;
    
    console.log(e.which);
    
    //32 es el numero de la barra espaciadora    
    if(e.which === barraespaciadora){
        keynum = e.which;
        console.log(keynum+"estoy pulsando barra espaciadora");
        //Aca va el codigo si aprieta barraespaciadora....
        
        e.preventDefault();        
    }

}

    
function controlFeed() {
  // Código para pausar/reanudar el streaming de Tweets
   console.log("pulso click");
  
}


document.addEventListener('newtweet', function (e) {   
	miTweet(e);
});


function miTweet(e){

    var p = document.createElement("p");
    var text = document.createTextNode(e.detail.tweet.text);
    p.appendChild(text);
    var h4 = document.createElement("h4");
    var nombre = document.createTextNode(e.detail.tweet.user.name);
    h4.appendChild(nombre);
    h4.classList.add('media-heading');
    var span = document.createElement("span");
    var nic = document.createTextNode(" @" + e.detail.tweet.user.screen_name);
    span.appendChild(nic);
    h4.appendChild(span);
    var mediaBody = document.createElement('div');
    mediaBody.classList.add('media-body');
    mediaBody.appendChild(h4);
    mediaBody.appendChild(p);
    var mediaLeft = document.createElement("div");
    mediaLeft.classList.add('media-left');
    var img = document.createElement("img");
    img.classList.add('media-object','img-rounded');    
    img.src = e.detail.tweet.user.profile_image_url;
    mediaLeft.appendChild(img);
    var media = document.createElement('div');
    media.classList.add('media');
    media.appendChild(mediaLeft);
    media.appendChild(mediaBody);
    var panelBody = document.createElement('div');
    panelBody.classList.add('panel-body');
    panelBody.appendChild(media); 

    var list = document.getElementById("tweets-list");
    list.insertBefore(panelBody, list.childNodes[0]); 

};