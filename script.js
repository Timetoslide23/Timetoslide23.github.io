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
  document.getElementById("domanda").innerHTML = "Ti senti più";
  document.getElementById("bottonerispsx").innerHTML = ":(";
  document.getElementById("bottonerispdx").innerHTML = ":)";
}
function vero() {
  score=score+"0";
  domande()
}
function falso() {
  score=score+"1";
  domande()
}
function domande(){
  a=score.length+1;
  if(a==2){
    document.getElementById("punto2").className="puntopieno";
    if(score=="0"){
      document.getElementById("domanda").innerHTML = "Ti senti più";
      document.getElementById("bottonerispsx").innerHTML = "Un temporale estivo";
      document.getElementById("bottonerispdx").innerHTML = "Un temporale invernale";
    }
    if(score=="1"){
      document.getElementById("domanda").innerHTML = "Senti più di";
      document.getElementById("bottonerispsx").innerHTML = "Star andando";
      document.getElementById("bottonerispdx").innerHTML = "Star tornando";
    }
  }
  if(a==3){
    document.getElementById("punto3").className="puntopieno";
    if(score=="00"){
      document.getElementById("domanda").innerHTML = "Ti senti più";
      document.getElementById("bottonerispsx").innerHTML = "Il tuono";
      document.getElementById("bottonerispdx").innerHTML = "Il fulmine";
    }
    if(score=="01"){
      document.getElementById("domanda").innerHTML = "Ti senti più";
      document.getElementById("bottonerispsx").innerHTML = "Sotto l'ombrello";
      document.getElementById("bottonerispdx").innerHTML = "Sotto l'acqua";
    }
    if(score=="10"){
      document.getElementById("domanda").innerHTML = "Ti senti più";
      document.getElementById("bottonerispsx").innerHTML = "Un gin tonic";
      document.getElementById("bottonerispdx").innerHTML = "Un negroni";
    }
    if(score=="11"){
      document.getElementById("domanda").innerHTML = "Ti senti più";
      document.getElementById("bottonerispsx").innerHTML = "Una doccia veloce";
      document.getElementById("bottonerispdx").innerHTML = "Una doccia lenta";
    }
  }
  if(a==4){
    document.getElementById("punto4").className="puntopieno";
    if(score=="000" || score=="001" || score=="100" || score=="101" || score=="110"){window.location.href = "risultati.html?score=" +score;}
    if(score=="010"){
      document.getElementById("domanda").innerHTML = "Ti senti più in una";
      document.getElementById("bottonerispsx").innerHTML = "Mattina";
      document.getElementById("bottonerispdx").innerHTML = "Sera";
    }
    if(score=="011"){
      document.getElementById("domanda").innerHTML = "Diresti che";
      document.getElementById("bottonerispsx").innerHTML = "Senti freddo";
      document.getElementById("bottonerispdx").innerHTML = "Non senti nemmeno quello";
    }
    if(score=="111"){
      document.getElementById("domanda").innerHTML = "Ti senti più in una";
      document.getElementById("bottonerispsx").innerHTML = "Domenica mattina";
      document.getElementById("bottonerispdx").innerHTML = "Domenica sera";
    }
  }
  if(a==5){window.location.href = "risultati.html?score=" +score;}
}
function indietro1() {
  a=score.length;
  if(a>0){
    score="";
    document.getElementById("punto2").className="puntovuoto";
    document.getElementById("punto3").className="puntovuoto";
    document.getElementById("punto4").className="puntovuoto";
    start()
  }
}
function indietro2() {
  a=score.length;
  if(a==2){
    score=score.slice(0,1);
    document.getElementById("punto3").className="puntovuoto";
    domande()
  }
  if(a==3){
    score=score.slice(0,1);
    document.getElementById("punto3").className="puntovuoto";
    document.getElementById("punto4").className="puntovuoto";
    domande()
  }
}
function indietro3() {
  a=score.length;
  if(a==3){
    score=score.slice(0,2);
    document.getElementById("punto4").className="puntovuoto";
    domande()
  }
}
function risultato() {
  var parametri = new URLSearchParams(window.location.search),
  score=parametri.get("score");
  //SCELTA DELLA PLAYLIST
  if(score=="000"){
    nome="Arrabbiato preso male";
    playlist="https://open.spotify.com/embed/playlist/4GdHOe3ZfHoGmmH38aNupQ?utm_source=generator&theme=1";
  }
  if(score=="001"){
    nome="Arrabbiato preso bene";
    playlist="https://open.spotify.com/embed/playlist/3Wra3SWHuWFGZegQHWJSba?utm_source=generator&theme=1";
  }
  if(score=="0100"){
    nome="Chill preso male";
    playlist="https://open.spotify.com/embed/playlist/3EytbTThT39AhTPXY5uNoW?utm_source=generator&theme=1";
  }
  if(score=="0101"){
    nome="Triste preso bene";
    playlist="https://open.spotify.com/embed/playlist/7fKkanDQL7eTxiMpDBRi0u?utm_source=generator&theme=1";
  }
  if(score=="0110"){
    nome="Piango male";
    playlist="https://open.spotify.com/embed/playlist/3EbvuPzGxcK5lFcnaRRsS8?utm_source=generator&theme=1";
  }
  if(score=="0111"){
    nome="Vuoto cosmico";
    playlist="https://open.spotify.com/embed/playlist/2HlxRjjj0R9vqwk3994hE8?utm_source=generator&theme=1";
  }
  if(score=="100"){
    nome="Te la senti calda";
    playlist="https://open.spotify.com/embed/playlist/1r03qrBq1Hq5InVqxassgo?utm_source=generator&theme=1";
  }
  if(score=="101"){
    nome="Non ti ferma nessuno";
    playlist="https://open.spotify.com/embed/playlist/4xmZlnFAeR5MvPemPhUenO?utm_source=generator&theme=1";
  }
  if(score=="110"){
    nome="Spensieratezza";
    playlist="https://open.spotify.com/embed/playlist/6VTBpUrCtOPrBQqpKSXvoR?utm_source=generator&theme=1";
  }
  if(score=="1110"){
    nome="Chill preso bene";
    playlist="https://open.spotify.com/embed/playlist/3WxIHKk3hBVsq6zFbKNpw2?utm_source=generator&theme=1";
  }
  if(score=="1111"){
    nome="Dolce amaro";
    playlist="https://open.spotify.com/embed/playlist/3a2FCG229zTlaau6uMsnxJ?utm_source=generator&theme=1";
  }
  //SALVATAGGIO DEI DATI IN GOOGLE ANALYTICS
  gtag('event', playlist);
  iframe = document.getElementById("spoti").src = playlist;
}