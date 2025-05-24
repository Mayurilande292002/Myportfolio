// ✅ Smooth Scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (!href || href === '#' || href.startsWith('javascript')) return;
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ✅ Typewriter Effect with loop
const typeText = "Hello, I'm Mayuri R. Lande";
let charIndex = 0;
function typeWriterLoop() {
  const target = document.querySelector('#home h1');
  if (!target) return;

  target.textContent = typeText.substring(0, charIndex);
  charIndex++;
  if (charIndex <= typeText.length) {
    setTimeout(typeWriterLoop, 120);
  } else {
    setTimeout(() => {
      charIndex = 0;
      typeWriterLoop();
    }, 2500); // pause before repeating
  }
}
document.addEventListener("DOMContentLoaded", typeWriterLoop);

// ✅ Toggle Certifications
function toggleCerts() {
  const list = document.getElementById("cert-list");
  if (!list) return;
  if (list.style.display === "block") {
    list.style.opacity = 0;
    setTimeout(() => (list.style.display = "none"), 300);
  } else {
    list.style.display = "block";
    list.style.opacity = 0;
    setTimeout(() => (list.style.opacity = 1), 10);
  }
}

// ✅ AOS Animate on Scroll Initialization
document.addEventListener("DOMContentLoaded", () => {
  if (typeof AOS !== 'undefined') {
    AOS.init({ duration: 1000, once: true });
  }
});

// ✅ Back to Top Button
const backToTopBtn = document.createElement('button');
backToTopBtn.innerHTML = '↑';
backToTopBtn.className = 'back-to-top';
document.body.appendChild(backToTopBtn);

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
  backToTopBtn.style.display = window.scrollY > 400 ? 'block' : 'none';
});

// ✅ Active Nav Link on Scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
});
