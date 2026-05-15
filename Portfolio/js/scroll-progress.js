/* =============================================================
   Scroll progress bar
   - Updates --scroll-progress CSS variable on <html>
   - The bar itself is in nav.css (.scroll-progress)
   ============================================================= */

/* ----------- Scroll progress bar ----------- */
(function () {
  const root = document.documentElement;
  let ticking = false;
  function update() {
    const max = root.scrollHeight - root.clientHeight;
    const pct = max > 0 ? Math.min(1, Math.max(0, root.scrollTop / max)) : 0;
    root.style.setProperty('--scroll-progress', pct.toFixed(4));
    ticking = false;
  }
  update();
  window.addEventListener('scroll', function () {
    if (!ticking) {
      requestAnimationFrame(update);
      ticking = true;
    }
  }, { passive: true });
  window.addEventListener('resize', update, { passive: true });
})();
