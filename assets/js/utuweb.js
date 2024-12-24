"use strict";$(document).ready(function(){});

document.addEventListener('DOMContentLoaded', function() {
  var spinnerContainer = document.getElementById('spinner-container');
  var content = document.getElementById('content');

  window.addEventListener('load', function() {
    spinnerContainer.style.display = 'none';
    content.style.display = 'block';
  });
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
