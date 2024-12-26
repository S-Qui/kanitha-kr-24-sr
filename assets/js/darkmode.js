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
