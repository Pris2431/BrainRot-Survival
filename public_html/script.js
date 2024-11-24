// Elements for heart and aura bars
const heartBar = document.getElementById("heart-bar").querySelector(".progress");
const auraBar = document.getElementById("aura-bar").querySelector(".progress");

// Variables for heart and aura levels
let heartLevel = 100; // Starts at 100%
let auraLevel = 100; // Starts at 100%

// Function to play audio
function playAudio(audioUrl) {
  const audio = new Audio(audioUrl);
  audio.play();
}

// Function to display an image
function displayImage(imageUrl) {
  const img = document.createElement("img");
  img.src = imageUrl;
  img.style.maxWidth = "100%";
  img.style.marginTop = "20px";
  img.id = "feedback-image";
  
  // Remove any existing feedback image
  const existingImg = document.getElementById("feedback-image");
  if (existingImg) {
    existingImg.remove();
  }

  document.querySelector(".left-section").appendChild(img);
}

// Function to update progress bars
function updateBars() {
  heartBar.style.width = `${heartLevel}%`;
  auraBar.style.width = `${auraLevel}%`;
}

// Function to load the next question
function loadNextQuestion() {
  // Simulate loading a new question (this should come from a question bank)
  setTimeout(() => {
    document.querySelector("#question-text").textContent = "New question: Choose wisely!";
    
    // Reset options for the new question
    options.forEach((option) => {
      option.style.backgroundColor = "#ffccff";
      option.disabled = false;
    });

    // Remove feedback image
    const feedbackImage = document.getElementById("feedback-image");
    if (feedbackImage) feedbackImage.remove();
  }, 3000); // Delay for 3 seconds to show feedback
}

// Event listener for options
options.forEach((option, index) => {
  option.addEventListener("click", () => {
    const isCorrect = index === 0; // Assume the first option is correct for demonstration
    
    if (isCorrect) {
      // Correct answer logic
      option.style.backgroundColor = "green";
      playAudio("easy.mp3"); // Path to happy music
      displayImage("correct.png"); // Path to happy image
    } else {
      // Incorrect answer logic
      heartLevel = Math.max(0, heartLevel - 20); // Decrease heart level by 20%
      auraLevel = Math.max(0, auraLevel - 20); // Decrease aura level by 20%
      option.style.backgroundColor = "red";
      playAudio("sad-music.mp3"); // Path to sad music
      displayImage("sad-image.png"); // Path to sad image
    }
    
    // Update progress bars
    updateBars();
    
    // Disable all options after a choice
    options.forEach((btn) => btn.disabled = true);

    // Load the next question after feedback
    loadNextQuestion();
  });
});
