function submitAnswers() {
  var score = 0;
  var finito = 1;
        
  // Prendi le risposte alle domande
  var q1 = document.getElementById("quizForm").elements.question1.value;
  var q2 = document.getElementById("quizForm").elements.question2.value;
  var q3 = document.getElementById("quizForm").elements.question3.value;
  var q4 = document.getElementById("quizForm").elements.question4.value;
  var q5 = document.getElementById("quizForm").elements.question5.value;
        
  // Controllo delle risposte
  if (q1 === "true") {score++;}
  else if(q1 === "false"){}
  else{finito=0;}
  if (q2 === "true") {score=score+10;}
  else if(q2 === "false"){}
  else{finito=0;}
  if (q3 === "true") {score=score+100;}
  else if(q3 === "false"){}
  else{finito=0;}
  if (q4 === "true") {score=score+1000;}
  else if(q4 === "false"){}
  else{finito=0;}
  if (q5 === "true") {score=score+10000;}
  else if(q5 === "false"){}
  else{finito=0;}
  
  score=parseInt(score, 2);
  
  // Reindirizza alla pagina result.html
  if(finito==1){window.location.href = "result.html?score=" + score;}
}
