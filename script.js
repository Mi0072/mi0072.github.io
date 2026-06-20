/* ════════════════════════════════════════
   MOBILE MENU
   ════════════════════════════════════════ */

const hamburger = document.getElementById('hamburger');
const sidebar   = document.getElementById('sidebar');

hamburger.addEventListener('click', () => {
  const isOpen = sidebar.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', String(isOpen));
});

// Close when a nav link is tapped
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    sidebar.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
  });
});

// Close on outside click
document.addEventListener('click', e => {
  if (
    sidebar.classList.contains('open') &&
    !sidebar.contains(e.target) &&
    !hamburger.contains(e.target)
  ) {
    sidebar.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
  }
});

/* ════════════════════════════════════════
   ACTIVE NAV LINK ON SCROLL
   ════════════════════════════════════════ */

const sections = document.querySelectorAll('.section[id]');
const navLinks = document.querySelectorAll('.nav-link');

const setActive = (id) => {
  navLinks.forEach(link => {
    const isActive = link.getAttribute('href') === `#${id}`;
    link.classList.toggle('active', isActive);
  });
};

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setActive(entry.target.id);
      }
    });
  },
  {
    rootMargin: '-30% 0px -65% 0px',
    threshold: 0,
  }
);

sections.forEach(section => observer.observe(section));

/* ════════════════════════════════════════
   SMOOTH SCROLL FOR ANCHOR LINKS
   (Fallback for browsers without CSS support)
   ════════════════════════════════════════ */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (!target) return;

    if (window.CSS && CSS.supports('scroll-behavior', 'smooth')) return; // CSS handles it

    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});
