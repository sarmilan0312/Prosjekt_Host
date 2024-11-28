// Correct answers array
const correctAnswers = ["A", "A", "B", "A", "A", "A", "A", "A", "C", "A", "A", "A", "A", "A", "A"]; // Adjusted to match the static HTML

// HTML Elements
const result = document.getElementById("result");
const button = document.getElementById("submit")

// Event listener for the Submit button
button.addEventListener("click", function () {
  let score = 0;
  // Loop through questions using class names for each question
  for (let q = 1; q <= correctAnswers.length; q++) {
    // Find all radio buttons with the class corresponding to the current question
    const radios = document.getElementsByClassName(`question-${q}`);

    // Check each radio button for the correct answer
    for (let i = 0; i < radios.length; i++) {
      if (radios[i].checked && radios[i].value === correctAnswers[q - 1]) {
        score++;
      }
    }
  }

  // Display the result
  result.innerHTML = `You got ${score} out of ${correctAnswers.length} correct.`;
});