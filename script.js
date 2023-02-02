function submitAnswers() {
  var score = 0;
        
  // Prendi le risposte alle domande
  var q1 = document.namedItem("question1").value;
  var q2 = document.namedItem("question2").value;
  var q3 = document.namedItem("question3").value;
  var q4 = document.namedItem("question4").value;
  var q5 = document.namedItem("question5").value;
        
  // Controlla se le risposte sono corrette
  if (q1 === "true") {
    score++;
  }
  if (q2 === "false") {
    score++;
  }
  if (q3 === "false") {
    score++;
  }
  if (q4 === "true") {
    score++;
  }
  if (q5 === "true") {
    score++;
  }
        
  // Reindirizza alla pagina result.html
  window.location.href = "result.html?score=" + score;
}
