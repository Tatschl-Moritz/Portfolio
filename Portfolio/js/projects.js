/* =============================================================
   Projects
   -------------------------------------------------------------
   To ADD a new project: just push a new object into the array.
   Order in this array = order shown on the site.
   ============================================================= */

const PROJECTS = [
  {
    num:   "01 / 2026",
    title: "Learning Lab",
    desc:  "A growing collection of small experiments — algorithms, data structures, and rebuilding familiar tools from scratch to understand what's actually happening underneath.",
    tags:  ["Fundamentals", "Experiments", "Ongoing"],
    href:  "#"
  },
  {
    num:   "02 / 2026",
    title: "AI Explorations",
    desc:  "First experiments with machine learning — following along with tutorials, breaking things, and trying to understand the math behind the models instead of treating them as a black box.",
    tags:  ["Python", "ML", "Learning"],
    href:  "#"
  },
  {
    num:   "03 / 2026",
    title: "Portfolio Website",
    desc:  "This site — self-hosted and continuously improved as I learn more web development. A small place to keep track of what I'm working on.",
    tags:  ["HTML", "CSS", "JavaScript"],
    href:  "#"
  }
];

/* ----------- renderer (don't edit unless changing layout) ----------- */
(function () {
  const list = document.querySelector('.projects__list');
  if (!list) return;

  const escape = (s) => String(s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#39;');

  const arrowSvg =
    '<svg width="20" height="20" viewBox="0 0 20 20" fill="none">' +
      '<path d="M5 15L15 5M15 5H7M15 5V13" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>' +
    '</svg>';

  list.innerHTML = PROJECTS.map(p => `
    <li data-reveal>
      <a class="project" href="${escape(p.href)}" aria-label="${escape(p.title)} — open project">
        <span class="project__num">${escape(p.num)}</span>
        <div class="project__main">
          <h3 class="project__title">${escape(p.title)}</h3>
          <p class="project__desc">${escape(p.desc)}</p>
        </div>
        <div class="project__meta">
          ${p.tags.map(t => `<span class="project__tag">${escape(t)}</span>`).join('')}
        </div>
        <span class="project__arrow" aria-hidden="true">${arrowSvg}</span>
      </a>
    </li>
  `).join('');
})();
