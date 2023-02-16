function home() {
  window.location.href = "index.html";
}
function about() {
  window.location.href = "about.html";
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
        input.style.maxHeight = "100px";
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