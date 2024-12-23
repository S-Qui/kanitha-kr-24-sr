// <3 Hope you're having a great day

// JavaScript to close the navbar when clicking outside of it
document.getElementById('menuToggle').addEventListener('click', function (event) {
  const navbarNav = document.getElementById('navbarNav');
  navbarNav.classList.toggle('collapse'); // Toggle navbar visibility
  event.stopPropagation(); // Prevent the document click listener from firing
});

// Close the menu if clicking outside
document.addEventListener('click', function (event) {
  const navbar = document.getElementById('navbarNav');
  const menuToggle = document.getElementById('menuToggle');
  
  // Close menu if clicking outside the navbar or the menu toggle button
  if (!navbar.contains(event.target) && !menuToggle.contains(event.target)) {
    navbar.classList.add('collapse'); // Collapse the menu
  }
});

// Sticky navbar on scroll
let lastScrollPosition = 0;
const navbar = document.getElementById('main_nav');

window.addEventListener('scroll', function () {
  const currentScrollPosition = window.pageYOffset;

  console.log('Current Scroll Position:', currentScrollPosition);
  console.log('Last Scroll Position:', lastScrollPosition);

  if (currentScrollPosition > lastScrollPosition) {
    // Scrolling down
    navbar.style.top = '-90px'; // Adjust for navbar height
    console.log('Hiding navbar (scrolling down)');
  } else if (currentScrollPosition < lastScrollPosition) {
    // Scrolling up
    navbar.style.top = '0';
    console.log('Showing navbar (scrolling up)');
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


