// Smooth scroll for navbar links
document.querySelectorAll('a.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  
  window.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');
    
    if (window.scrollY > 50) {  // Change '50' to adjust when the effect triggers
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

app.use(express.static('public')); // Assuming your files are in a folder named 'public'


document.addEventListener('DOMContentLoaded', function() {
  const modeToggle = document.getElementById('modeToggle');
  const body = document.body;
  const navbar = document.getElementById('navbar');

  // Check local storage for the theme preference
  const currentMode = localStorage.getItem('theme') || 'light';
  body.classList.add(`${currentMode}-mode`);
  navbar.classList.add(`${currentMode}-mode`);
  modeToggle.innerHTML = currentMode === 'light' ? '🌙' : '☀️'; // Initial button text

  modeToggle.addEventListener('click', function() {
      if (body.classList.contains('light-mode')) {
          // Switch to Dark Mode
          body.classList.replace('light-mode', 'dark-mode');
          navbar.classList.replace('light-mode', 'dark-mode');
          modeToggle.innerHTML = '☀️'; // Change button to sun icon
          localStorage.setItem('theme', 'dark'); // Save preference
      } else {
          // Switch to Light Mode
          body.classList.replace('dark-mode', 'light-mode');
          navbar.classList.replace('dark-mode', 'light-mode');
          modeToggle.innerHTML = '🌙'; // Change button to moon icon
          localStorage.setItem('theme', 'light'); // Save preference
      }
  });
});


window.addEventListener('scroll', function() {
  let aboutSection = document.querySelector('.about-section');
  let aboutText = document.querySelectorAll('.about-text h1, .about-text p');
  let aboutImage = document.querySelector('.about-image img');
  
  // Check if the About section is in the viewport
  if (aboutSection.getBoundingClientRect().top < window.innerHeight * 0.8) {
      aboutText.forEach(item => item.classList.add('animate-slide-in', 'animate-fade-in'));
      aboutImage.classList.add('animate-scale-in');
  }
});
