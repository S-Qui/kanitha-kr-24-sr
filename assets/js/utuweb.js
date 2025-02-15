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


// Copy
document.addEventListener("DOMContentLoaded", function() {
  const copyButton = document.getElementById("copyButton");
  
  // Attach the event listener to the button
  copyButton.addEventListener("click", copyokoaNambari);
});

function copyokoaNambari() {
  // Get the text content of the phone number
  const okoaNambari = document.getElementById("okoaNambari").textContent;

  // Create a temporary input element to copy the text
  const tempInput = document.createElement("input");
  tempInput.value = okoaNambari;
  document.body.appendChild(tempInput);

  // Select the input field and copy the text
  tempInput.select();
  document.execCommand("copy");

  // Remove the temporary input element from the DOM
  document.body.removeChild(tempInput);

  // Change the button text to indicate success
  const copyButton = document.getElementById("copyButton");
  copyButton.textContent = "Copied!";

  // Reset the button text after 2 seconds
  setTimeout(() => {
      copyButton.textContent = "Copy";
  }, 4000);
}