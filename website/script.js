const toggleButton = document.getElementById('theme-toggle');

// 1. Check if user has a saved preference from a previous visit
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  document.body.classList.add('dark');
}

// 2. Add click event listener to the button
toggleButton.addEventListener('click', () => {
  // Toggle the .dark class on the body element
  document.body.classList.toggle('dark');
  
  // 3. Save the user's choice to local storage
  if (document.body.classList.contains('dark')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});