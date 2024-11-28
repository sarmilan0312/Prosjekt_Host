// Correct answers
const correctAnswers = ["A", "A", "A"]
let score = 0;


// Simple check function
document.getElementById("submit-btn").addEventListener("click", henteSvar() {



  // Loop through correct answers and check user input
  for (let question in correctAnswers) {
    const selected = document.querySelector(`input[name="${question}"]:checked`);
    if (selected && selected.value === correctAnswers[question]) {
      score++;
    }
  }

  // Display the result
  const result = document.getElementById("result");
  result.textContent = `You got ${score} out of ${total} correct.`;
});              