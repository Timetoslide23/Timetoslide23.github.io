function home() {
  window.location.href = "index.html";
}
function documentazione() {
  window.location.href = "documentazione.html";
}
function start() {
  window.location.href = "domanda1.html";
}
function vero1() {
  score=0;
  window.location.href = "domanda2.html?score=" +score;
}
function falso1() {
  score=1;
  window.location.href = "domanda2.html?score=" +score;
}
function vero2() {
  var parametri = new URLSearchParams(window.location.search),
  score=parametri.get("score");
  score=0+score;
  window.location.href = "domanda3.html?score=" +score;
}
function falso2() {
  var parametri = new URLSearchParams(window.location.search),
  score=parametri.get("score");
  score=1+score;
  window.location.href = "domanda3.html?score=" +score;
}
function vero3() {
  var parametri = new URLSearchParams(window.location.search),
  score=parametri.get("score");
  score=0+score;
  window.location.href = "domanda4.html?score=" +score;
}
function falso3() {
  var parametri = new URLSearchParams(window.location.search),
  score=parametri.get("score");
  score=1+score;
  window.location.href = "domanda4.html?score=" +score;
}
function vero4() {
  var parametri = new URLSearchParams(window.location.search),
  score=parametri.get("score");
  score=0+score;
  window.location.href = "domanda5.html?score=" +score;
}
function falso4() {
  var parametri = new URLSearchParams(window.location.search),
  score=parametri.get("score");
  score=1+score;
  window.location.href = "domanda5.html?score=" +score;
}
function vero5() {
  var parametri = new URLSearchParams(window.location.search),
  score=parametri.get("score");
  score=0+score;
  window.location.href = "risultati.html?score=" +score;
}
function falso5() {
  var parametri = new URLSearchParams(window.location.search),
  score=parametri.get("score");
  score=1+score;
  window.location.href = "risultati.html?score=" +score;
}
function risultato() {
  var parametri = new URLSearchParams(window.location.search),
  score=parametri.get("score");
  score=parseInt(score,2);
  //SALVATAGGIO DEI DATI IN GOOGLE ANALYTICS
  gtag('event', 'risultato', {'value' : score});
  //SCELTA DELLA PLAYLIST
  if(score<16){
    random = Math.floor(Math.random()*200)+1;
    playlist="https://www.youtube.com/embed/watch?v=+&list=PLZWdplz_BLqd1QNMiF6lG09X1cJLzTm-y&autoplay=1&mute=1&index="+random.toString();
  }
  else if(score<33){
    random = Math.floor(Math.random()*34)+1;
    playlist="https://www.youtube.com/embed/watch?v=+&list=PLaoDoNNpBs9FsWlMtUsh1dL4435EBPbtY&autoplay=1&mute=1&index="+random.toString();
  }
  iframe = document.getElementById("video").src = playlist;
}
