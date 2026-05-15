/* =============================================================
   Nav behaviour
   - Adds .is-scrolled when page scrolls (compresses nav)
   - Watches sections and marks the current nav link .is-active
   ============================================================= */

/* ----------- Nav: scroll state ----------- */
(function () {
  const nav = document.getElementById('nav');
  const onScroll = () => {
    nav.classList.toggle('is-scrolled', window.scrollY > 8);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
})();

/* ----------- Active section nav indicator ----------- */
(function () {
  const sections = document.querySelectorAll('main section[id]');
  const links = document.querySelectorAll('.nav__links a[href^="#"]');
  if (!sections.length || !links.length || !('IntersectionObserver' in window)) return;

  const linkByHash = new Map();
  links.forEach(l => linkByHash.set(l.getAttribute('href'), l));

  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const hash = '#' + e.target.id;
        links.forEach(l => l.classList.toggle('is-active', l.getAttribute('href') === hash));
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });

  sections.forEach(s => obs.observe(s));
})();
