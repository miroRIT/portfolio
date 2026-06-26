const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');
const navLinks = document.querySelectorAll('.site-nav a');
const sections = document.querySelectorAll('main section[id]');

function closeNav() {
  if (siteNav && navToggle) {
    siteNav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  }
}

navToggle?.addEventListener('click', () => {
  const expanded = navToggle.getAttribute('aria-expanded') === 'true';
  navToggle.setAttribute('aria-expanded', String(!expanded));
  siteNav?.classList.toggle('open');
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    closeNav();
  });
});

const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.35,
};

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const id = entry.target.getAttribute('id');
    const matchingLink = document.querySelector(`.site-nav a[href="#${id}"]`);

    if (matchingLink) {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => link.classList.remove('active'));
        matchingLink.classList.add('active');
      }
    }
  });
}, observerOptions);

sections.forEach((section) => sectionObserver.observe(section));

const revealElements = document.querySelectorAll('[data-animate]');
const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

revealElements.forEach((element) => revealObserver.observe(element));
