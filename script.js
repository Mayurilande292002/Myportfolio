// Smooth scrolling for nav links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (!href || href === '#' || href.startsWith('javascript')) {
      return; // Ignore links with no valid hash target
    }
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});
