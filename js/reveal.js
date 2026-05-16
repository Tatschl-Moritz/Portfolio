/* =============================================================
   Reveal-on-scroll
   - Triggers .is-in on elements with [data-reveal] or [data-stagger]
     once they enter the viewport
   ============================================================= */

/* ----------- Reveal-on-scroll (gentle) ----------- */
(function () {
  const els = document.querySelectorAll('[data-reveal], [data-stagger]');
  if (!('IntersectionObserver' in window)) {
    els.forEach(el => el.classList.add('is-in'));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('is-in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  els.forEach(el => io.observe(el));
})();
