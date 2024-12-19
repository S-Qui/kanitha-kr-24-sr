'use strict';
$(document).ready(function() {


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
  if (endX < startX && currentPosition < 5) currentPosition++;
  if (endX > startX && currentPosition > 1) currentPosition--;
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
