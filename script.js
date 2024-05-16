document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
  
    function checkInView() {
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
  
        if (sectionTop < windowHeight * 0.8) {
          section.classList.add('show');
        }
      });
    }
  
    window.addEventListener('scroll', checkInView);
    checkInView();
  });
  