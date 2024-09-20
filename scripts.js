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
