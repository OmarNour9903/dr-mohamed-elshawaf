/* Dr. Mohamed El Shawaf Website Custom Script */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide Icons
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  // Sticky Navbar background change on scroll
  const navbar = document.querySelector('.custom-navbar');
  const handleScroll = () => {
    if (window.scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };
  
  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Trigger once on load to ensure state correctness

  // Scroll Reveal Animation (Intersection Observer)
  const revealElements = document.querySelectorAll('.reveal');
  
  if ('IntersectionObserver' in window && revealElements.length > 0) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target); // Animates only once
        }
      });
    }, {
      root: null,
      threshold: 0.15, // Trigger when 15% of the element is visible
      rootMargin: '0px 0px -50px 0px' // Adjust triggers before they enter fully
    });

    revealElements.forEach(element => {
      revealObserver.observe(element);
    });
  } else {
    // Fallback if IntersectionObserver is not supported
    revealElements.forEach(element => {
      element.classList.add('active');
    });
  }
});
