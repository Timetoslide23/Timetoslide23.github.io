function home() {
  window.location.href = "index.html";
}
function documentazione() {
  window.location.href = "documentazione.html";
}
function test() {
  window.location.href = "test.html";
}
function start() {
  score="";
  document.getElementById("numerodomanda").innerHTML = "Domanda 1";
  document.getElementById("domanda").innerHTML = "Sei triste o felice?";
  document.getElementById("bottonerispsx").innerHTML = "Triste :(";
  document.getElementById("bottonerispdx").innerHTML = "Felice :)";
}
function vero() {
  score="0"+score;
  domande()
}
function falso() {
  score="1"+score;
  domande()
}
function domande(){
  a=score.length+1;
  if(a==2){
    document.getElementById("numerodomanda").innerHTML = "Domanda 2";
    document.getElementById("punto2").className="puntopieno";
    if(score=="0"){
      document.getElementById("domanda").innerHTML = "Sei molto triste?";
      document.getElementById("bottonerispsx").innerHTML = "Si";
      document.getElementById("bottonerispdx").innerHTML = "No";
    }
    if(score=="1"){
      document.getElementById("domanda").innerHTML = "Sei molto felice?";
      document.getElementById("bottonerispsx").innerHTML = "No";
      document.getElementById("bottonerispdx").innerHTML = "Si";
    }
  }
  if(a==3){
    document.getElementById("numerodomanda").innerHTML = "Domanda 3";
    document.getElementById("punto3").className="puntopieno";
    if(score=="00"){
      document.getElementById("domanda").innerHTML = "Sei molto molto triste?";
      document.getElementById("bottonerispsx").innerHTML = "Si";
      document.getElementById("bottonerispdx").innerHTML = "No";
    }
    if(score=="01" || score=="10"){
      document.getElementById("domanda").innerHTML = "Sei triste o felice?";
      document.getElementById("bottonerispsx").innerHTML = "Triste :(";
      document.getElementById("bottonerispdx").innerHTML = "Felice :)";
    }
    if(score=="11"){
      document.getElementById("domanda").innerHTML = "Sei molto molto felice?";
      document.getElementById("bottonerispsx").innerHTML = "No";
      document.getElementById("bottonerispdx").innerHTML = "Si";
    }
  }
  if(a==4){
    window.location.href = "risultati.html?score=" +score;
  }
}
function indietro1() {
  a=score.length;
  if(a>0){
    score="";
    document.getElementById("punto2").className="puntovuoto";
    document.getElementById("punto3").className="puntovuoto";
    start()
  }
}
function indietro2() {
  a=score.length;
  if(a>1){
    score=score.slice(1,2);
    document.getElementById("punto3").className="puntovuoto";
    domande()
  }
}
function risultato() {
  var parametri = new URLSearchParams(window.location.search),
  score=parametri.get("score");
  //SCELTA DELLA PLAYLIST
  if(score=="000" || score=="001" || score=="010" || score=="100"){
    random = Math.floor(Math.random()*200)+1;
    playlist="https://www.youtube.com/embed/watch?v=+&list=PLZWdplz_BLqd1QNMiF6lG09X1cJLzTm-y&autoplay=1&mute=1&index="+random.toString();
    //SALVATAGGIO DEI DATI IN GOOGLE ANALYTICS
    gtag('event', 'risultato', {'label' : "playlist triste"});
  }
  if(score=="011" || score=="101" || score=="110" || score=="111"){
    random = Math.floor(Math.random()*34)+1;
    playlist="https://www.youtube.com/embed/watch?v=+&list=PLaoDoNNpBs9FsWlMtUsh1dL4435EBPbtY&autoplay=1&mute=1&index="+random.toString();
    //SALVATAGGIO DEI DATI IN GOOGLE ANALYTICS
    gtag('event', 'risultato', {'label' : "playlist felice"});
  }
  iframe = document.getElementById("video").src = playlist;
}
