//<3 Hope your having a great day 

// JavaScript to close the navbar when clicking outside of it
document.getElementById('menuToggle').addEventListener('click', function () {
  const navbarNav = document.getElementById('navbarNav');
  navbarNav.classList.toggle('collapse'); // Toggle navbar visibility

  
  this.classList.toggle('open');// Change button style to indicate the open state
});

// Close the menu if clicking outside
document.addEventListener('click', function (event) {
  const navbar = document.getElementById('navbarNav');
  const menuToggle = document.getElementById('menuToggle');
  
  // Close menu if clicking outside the navbar or the menu toggle button
  if (!navbar.contains(event.target) && !menuToggle.contains(event.target)) {
    navbar.classList.add('collapse'); // Collapse the menu
    menuToggle.classList.remove('open'); // Reset the button icon
  }
});

// Sticky navbar on scroll
let lastScrollPosition = 0;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', function () {
  const currentScrollPosition = window.pageYOffset;

  if (currentScrollPosition > lastScrollPosition) {
    // Scrolling down
    navbar.style.top = '-90px'; // Adjust for navbar height
  } else {
    // Scrolling up
    navbar.style.top = '0';
  }

  lastScrollPosition = currentScrollPosition;
});

document.addEventListener("DOMContentLoaded", function() {
  var buttons = document.querySelectorAll(".ayaBtn");

  buttons.forEach(function(button) {
    button.addEventListener("click", function() {
      var parentParagraph = this.closest('p'); // Find the closest parent <p> element
      var dots = parentParagraph.querySelector(".dots");
      var moreText = parentParagraph.querySelector(".more");
      
      if (dots.style.display === "none") {
        dots.style.display = "inline";
        this.innerHTML = "Read More"; 
        moreText.style.display = "none";
      } else {
        dots.style.display = "none";
        this.innerHTML = "Read Less"; 
        moreText.style.display = "inline";
      }
    });
  });
});


// Makeshift carousel function that gets invoked with the Index to start it off, then the callback increments the index to recursively invoke the same function. Works even in IE11!
var testimonialItems = document.querySelectorAll(".item label");
var timer;
function cycleTestimonials(index) {
   timer = setTimeout(function() {
    var evt;
    if (document.createEvent){
      //If browser = IE, then polyfill
      evt = document.createEvent('MouseEvent');
      evt.initMouseEvent('click', true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
    } else {
      //If Browser = modern, then create new MouseEvent
      evt = new MouseEvent("click", {
            view: window,
            bubbles: true,
            cancelable: true,
            clientX: 20
          });
    }
    var ele = "." + testimonialItems[index].className;
    var ele2 = document.querySelector(ele)
    ele2.dispatchEvent(evt);
    index++; // Increment the index
    if (index >= testimonialItems.length) {
      index = 0; // Set it back to `0` when it reaches `3`
    }
    cycleTestimonials(index); // recursively call `cycleTestimonials()`
    document.querySelector(".testimonials").addEventListener("click", function() {
      clearTimeout(timer); //stop the carousel when someone clicks on the div
    });
  }, 2000); //adjust scroll speed in miliseconds
}
//run the function
cycleTestimonials(0);