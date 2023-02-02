function submitAnswers() {
  var score = 0;
        
  // Prendi le risposte alle domande
  var q1 = document.getElementById("quizForm").elements.question1.value;
  var q2 = document.getElementById("quizForm").elements.question2.value;
  var q3 = document.getElementById("quizForm").elements.question3.value;
  var q4 = document.getElementById("quizForm").elements.question4.value;
  var q5 = document.getElementById("quizForm").elements.question5.value;
        
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
