"use strict";$(document).ready(function(){});

document.addEventListener('DOMContentLoaded', function() {
  var spinnerContainer = document.getElementById('spinner-container');
  var content = document.getElementById('content');

  window.addEventListener('load', function() {
    spinnerContainer.style.display = 'none';
    content.style.display = 'block';
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const toggleButton = document.getElementById('theme-toggle'); // Button to toggle dark mode
  const spinnerContainer = document.getElementById('spinner-container'); // Loader container (if present)

  // Function to update button text based on current theme
  const updateButtonText = () => {
    const isDarkMode = document.body.classList.contains('dark-mode');
    toggleButton.textContent = isDarkMode ? 'Toggle for Light Mode' : 'Toggle for Dark Mode';
  };

  // Check user's system preference for dark mode
  const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

  // Check and apply saved theme preference or system preference
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    document.body.classList.toggle('dark-mode', savedTheme === 'dark');
  } else if (prefersDarkMode) {
    document.body.classList.add('dark-mode');
  }

  // Update button text on load
  updateButtonText();

  // Toggle dark mode on button click
  toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    // Save the current theme preference
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');

    // Update button text
    updateButtonText();
  });

  // Ensure dark mode applies to loader (if it’s visible)
  if (document.body.classList.contains('dark-mode') && spinnerContainer) {
    spinnerContainer.style.backgroundColor = 'black';
    spinnerContainer.style.color = 'white';
  }
});


// Swipe functionality for touch devices
const lazySusan = document.querySelector("#lazy-susan");
let startX = 0;
let currentPosition = 1;

lazySusan.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});

lazySusan.addEventListener("touchend", (e) => {
  const endX = e.changedTouches[0].clientX;

  // Change the logic so that swipe right goes backward and swipe left goes forward
  if (endX > startX && currentPosition > 1) {
    currentPosition--;  // Swipe right goes backward (previous)
  }
  if (endX < startX && currentPosition < 6) {
    currentPosition++;  // Swipe left goes forward (next)
  }

  document.querySelector(`#pos${currentPosition}`).checked = true;
  updatePosition();
});

// Update CSS variable when position changes
function updatePosition() {
  const lazySusan = document.querySelector("#lazy-susan");
  lazySusan.style.setProperty("--position", currentPosition);
}

// Ensure radio buttons work as expected
document.querySelectorAll(".kipande-controls input").forEach((input, index) => {
  input.addEventListener("change", () => {
    currentPosition = index + 1;
    updatePosition();
  });
});
