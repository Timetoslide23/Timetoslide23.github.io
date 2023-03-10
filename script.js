onresize = (event) => {};
function home() {
  window.location.href = "index.html";
}
function about() {
  window.location.href = "about.html";
}
function contacts() {
  window.location.href = "contacts.html";
}
function determinant() {
  window.location.href = "determinant.html";
}
function rowscolumns() {
  var a=document.getElementById("rowscolumns").value;
  if(a>=1 && a<=10){
    document.getElementById("contenitore").textContent = "";
    document.getElementById("error1").innerHTML="";
    document.getElementById("error2").innerHTML="";
    creatematrix(a);
  }
  else{
    document.getElementById("error1").innerHTML="Please, insert a valid number from 1 to 10.";
  }
}
function creatematrix(a) {
  rc=a;
  if(rc>=1 && rc<=10){
    for(var i=1;i<=rc;i++){
      colonna = document.createElement("div");
      colonna.id = "colonna"+i.toString()
      colonna.className = "colonna";
      contenitore.appendChild(colonna);
      for(var j=1;j<=rc;j++){
        input = document.createElement("input");
        input.type = "number";
        input.className = "element";
        input.id = "input"+i.toString()+j.toString();
        colonna.appendChild(input);
        var prop=65/rc;
        input.style.width='calc('+prop.toString()+'vw)';
        input.style.height='calc(3vw + 3vh)';
        input.style.maxWidth = "calc(7vw + 7vh)";
      }
    }
  }
}
function determinantget() {
  error=0;
  a=[];
  for(var i=1;i<=rc;i++){
    b=[];
    for(var j=1;j<=rc;j++){
      c=document.getElementById("input"+i.toString()+j.toString()).value;
      if(isNaN(c) || c==""){error=1;}
      b.push(c);
    }
    a.push(b)
  }
  if(error==1){document.getElementById("error2").innerHTML="Please, insert valid numbers.";}
  else{
    det=determinantcalc(a);
    document.getElementById("error2").innerHTML="";
    document.getElementById("risultato").innerHTML="Determinant: "+det.toString();
  }
}
function determinantcalc(a){
  if(a.length==1){return a[0][0];}
  if(a.length==2){return a[0][0]*a[1][1]-a[0][1]*a[1][0];}
  if(a.length>2){
    det=0;
    for(var i=0;i<a.length;i++){
      b=[];
      for(var j=0;j<a.length;j++){
        b[j]=a[j].slice();
      }
      b.splice(i,1);
      for(k=0;k<b.length;k++){
        b[k].splice(0,1);
      }
      if(i%2==0){det+=a[i][0]*determinantcalc(b);}
      else{det-=a[i][0]*determinantcalc(b);}
    }
    return det;
  }
}
function setslideshow(){
  slideIndex = 0;
  ok=1;
}
function slideavanti() {
  carosello=document.getElementById("carosello");
  if(ok==1){
    ok=0;
    immagini=["mandelbrot","collatz","galton","feigenbaum","primemap"]
    contenitore=document.getElementById("contenitore");
    prima=document.getElementById("immagineprima"); titoloprima=document.getElementById("titoloprima");
    ora=document.getElementById("immagineora"); titoloora=document.getElementById("titoloora");
    dopo=document.getElementById("immaginedopo"); titolodopo=document.getElementById("titolodopo");
    slideIndex++;
    slideIndex=slideIndex%5;
    dopo.src = "Immagini/"+immagini[slideIndex]+".png"; titolodopo.innerHTML=immagini[slideIndex].toUpperCase();
    contenitore.style.transition = "cubic-bezier(0.8,0,0.2,1) 2s";
    contenitore.style.left = "-200%";
    timeout=setTimeout(() => {
      ok=1;
      ora.src = "Immagini/"+immagini[slideIndex]+".png"; titoloora.innerHTML=immagini[slideIndex].toUpperCase();
      contenitore.style.transition = "0s";
      contenitore.style.left = "-100%";},2000)
    setbutton();
  }
}
function slideindietro() {
  carosello=document.getElementById("carosello");
  if(ok==1){
    ok=0;
    immagini=["mandelbrot","collatz","galton","feigenbaum","primemap"]
    contenitore=document.getElementById("contenitore");
    prima=document.getElementById("immagineprima"); titoloprima=document.getElementById("titoloprima");
    ora=document.getElementById("immagineora"); titoloora=document.getElementById("titoloora");
    dopo=document.getElementById("immaginedopo"); titolodopo=document.getElementById("titolodopo");
    slideIndex--;
    if(slideIndex<0){slideIndex=4;}
    slideIndex=slideIndex%5;
    prima.src = "Immagini/"+immagini[slideIndex]+".png"; titoloprima.innerHTML=immagini[slideIndex].toUpperCase();
    contenitore.style.transition = "cubic-bezier(0.8,0,0.2,1) 2s";
    contenitore.style.left = "0";
    timeout=setTimeout(() => {
      ok=1;
      ora.src = "Immagini/"+immagini[slideIndex]+".png"; titoloora.innerHTML=immagini[slideIndex].toUpperCase();
      contenitore.style.transition = "0s";
      contenitore.style.left = "-100%";},2000)
    setbutton();
  }
}
function slide1(){
  if(ok==1 && slideIndex!=0){
    ok=0;
    contenitore=document.getElementById("contenitore");
    prima=document.getElementById("immagineprima"); titoloprima=document.getElementById("titoloprima");
    ora=document.getElementById("immagineora"); titoloora=document.getElementById("titoloora");
    dopo=document.getElementById("immaginedopo"); titolodopo=document.getElementById("titolodopo");
    if(slideIndex>0){
      prima.src = "Immagini/mandelbrot.png"; titoloprima.innerHTML="MANDELBROT";
      contenitore.style.transition = "cubic-bezier(0.8,0,0.2,1) 2s";
      contenitore.style.left = "0%";
    }
    timeout=setTimeout(() => {
      ora.src = "Immagini/mandelbrot.png"; titoloora.innerHTML="MANDELBROT";
      contenitore.style.transition = "0s";
      contenitore.style.left = "-100%";
      ok=1;},2000)
    slideIndex=0;
    setbutton();
  }
}
function slide2(){
  if(ok==1 && slideIndex!=1){
    ok=0;
    contenitore=document.getElementById("contenitore");
    prima=document.getElementById("immagineprima"); titoloprima=document.getElementById("titoloprima");
    ora=document.getElementById("immagineora"); titoloora=document.getElementById("titoloora");
    dopo=document.getElementById("immaginedopo"); titolodopo=document.getElementById("titolodopo");
    if(slideIndex>1){
      prima.src = "Immagini/collatz.png"; titoloprima.innerHTML="COLLATZ";
      contenitore.style.transition = "cubic-bezier(0.8,0,0.2,1) 2s";
      contenitore.style.left = "0%";
    }
    else if(slideIndex<1){
      dopo.src = "Immagini/collatz.png"; titolodopo.innerHTML="COLLATZ";
      contenitore.style.transition = "cubic-bezier(0.8,0,0.2,1) 2s";
      contenitore.style.left = "-200%";
    }
    timeout=setTimeout(() => {
      ora.src = "Immagini/collatz.png"; titoloora.innerHTML="COLLATZ";
      contenitore.style.transition = "0s";
      contenitore.style.left = "-100%";
      ok=1;},2000)
    slideIndex=1;
    setbutton();
  }
}
function slide3(){
  if(ok==1 && slideIndex!=2){
    ok=0;
    contenitore=document.getElementById("contenitore");
    prima=document.getElementById("immagineprima"); titoloprima=document.getElementById("titoloprima");
    ora=document.getElementById("immagineora"); titoloora=document.getElementById("titoloora");
    dopo=document.getElementById("immaginedopo"); titolodopo=document.getElementById("titolodopo");
    if(slideIndex>2){
      prima.src = "Immagini/galton.png"; titoloprima.innerHTML="GALTON";
      contenitore.style.transition = "cubic-bezier(0.8,0,0.2,1) 2s";
      contenitore.style.left = "0%";
    }
    else if(slideIndex<2){
      dopo.src = "Immagini/galton.png"; titolodopo.innerHTML="GALTON";
      contenitore.style.transition = "cubic-bezier(0.8,0,0.2,1) 2s";
      contenitore.style.left = "-200%";
    }
    timeout=setTimeout(() => {
      ora.src = "Immagini/galton.png"; titoloora.innerHTML="GALTON";
      contenitore.style.transition = "0s";
      contenitore.style.left = "-100%";
      ok=1;},2000)
    slideIndex=2;
    setbutton();
  }
}
function slide4(){
  if(ok==1 && slideIndex!=3){
    ok=0;
    contenitore=document.getElementById("contenitore");
    prima=document.getElementById("immagineprima"); titoloprima=document.getElementById("titoloprima");
    ora=document.getElementById("immagineora"); titoloora=document.getElementById("titoloora");
    dopo=document.getElementById("immaginedopo"); titolodopo=document.getElementById("titolodopo");
    if(slideIndex>3){
      prima.src = "Immagini/feigenbaum.png"; titoloprima.innerHTML="FEIGENBAUM";
      contenitore.style.transition = "cubic-bezier(0.8,0,0.2,1) 2s";
      contenitore.style.left = "0%";
    }
    else if(slideIndex<3){
      dopo.src = "Immagini/feigenbaum.png"; titolodopo.innerHTML="FEIGENBAUM";
      contenitore.style.transition = "cubic-bezier(0.8,0,0.2,1) 2s";
      contenitore.style.left = "-200%";
    }
    timeout=setTimeout(() => {
      ora.src = "Immagini/feigenbaum.png"; titoloora.innerHTML="FEIGENBAUM";
      contenitore.style.transition = "0s";
      contenitore.style.left = "-100%";
      ok=1;},2000)
    slideIndex=3;
    setbutton();
  }
}
function slide5(){
  if(ok==1 && slideIndex!=4){
    ok=0;
    contenitore=document.getElementById("contenitore");
    prima=document.getElementById("immagineprima"); titoloprima=document.getElementById("titoloprima");
    ora=document.getElementById("immagineora"); titoloora=document.getElementById("titoloora");
    dopo=document.getElementById("immaginedopo"); titolodopo=document.getElementById("titolodopo");
    if(slideIndex<4){
      dopo.src = "Immagini/primemap.png"; titolodopo.innerHTML="PRIMEMAP";
      contenitore.style.transition = "cubic-bezier(0.8,0,0.2,1) 2s";
      contenitore.style.left = "-200%";
    }
    timeout=setTimeout(() => {
      ora.src = "Immagini/primemap.png"; titoloora.innerHTML="PRIMEMAP";
      contenitore.style.transition = "0s";
      contenitore.style.left = "-100%";
      ok=1;},2000)
    slideIndex=4;
    setbutton();
  }
}
function setbutton(){
  document.getElementById("bslide1").className = "bslideempty";
  document.getElementById("bslide2").className = "bslideempty";
  document.getElementById("bslide3").className = "bslideempty";
  document.getElementById("bslide4").className = "bslideempty";
  document.getElementById("bslide5").className = "bslideempty";
  document.getElementById("bslide"+(slideIndex+1).toString()).className = "bslidefull";
}
function detectSwipe(id, func, deltaMin = 90) {
  const swipe_det = {
    sX: 0,
    sY: 0,
    eX: 0,
    eY: 0
  }
  // Directions enumeration
  const directions = Object.freeze({
    UP: 'up',
    DOWN: 'down',
    RIGHT: 'right',
    LEFT: 'left'
  })
  let direction = null
  const el = document.getElementById(id)
  el.addEventListener('touchstart', function(e) {
    const t = e.touches[0]
    swipe_det.sX = t.screenX
    swipe_det.sY = t.screenY
  }, false)
  el.addEventListener('touchmove', function(e) {
    // Prevent default will stop user from scrolling, use with care
    // e.preventDefault();
    const t = e.touches[0]
    swipe_det.eX = t.screenX
    swipe_det.eY = t.screenY
  }, false)
  el.addEventListener('touchend', function(e) {
    const deltaX = swipe_det.eX - swipe_det.sX
    const deltaY = swipe_det.eY - swipe_det.sY
    // Min swipe distance, you could use absolute value rather
    // than square. It just felt better for personnal use
    if (deltaX ** 2 + deltaY ** 2 < deltaMin ** 2) return
    // horizontal
    if (deltaY === 0 || Math.abs(deltaX / deltaY) > 1)
      direction = deltaX > 0 ? directions.RIGHT : directions.LEFT
    else // vertical
      direction = deltaY > 0 ? directions.UP : directions.DOWN

    if (direction && typeof func === 'function') func(el, direction)

    direction = null
  }, false)
}
function myfunction(el,d) {
  alert("you swiped on element with id '"+el+"' to "+d+" direction");
}
setTimeout(()=>{detectSwipe('contenitore', (el, dir) => {if(dir=="left"){slideavanti()};if(dir=="right"){slideindietro()};})},10)