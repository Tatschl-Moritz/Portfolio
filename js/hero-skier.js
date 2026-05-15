/* =============================================================
   Hero skier animation
   - Measures the live position of each MORITZ letter
   - Draws an integrated ramp on top of the Z
   - Runs the skier through: emerge -> ride -> ramp -> backflip exit
   - Loops every 9.5 seconds, redraws on resize / font load
   ============================================================= */

/* ----------- Hero skier: MORITZ run + ramp + backflip exit ----------- */
(function () {
  const wrap = document.querySelector('.hero__name-wrap');
  if (!wrap) return;
  const svg = wrap.querySelector('.hero__skier-overlay');
  if (!svg) return;

  // Build skier markup
  svg.innerHTML = [
    '<g class="hero-ramp-group" id="heroRamp"></g>',
    '<g class="skier-fig" id="heroSkier" style="opacity:0">',
    '  <g class="skier-trails" id="heroSkierTrails" style="opacity:0">',
    '    <line x1="-12" y1="-6" x2="-22" y2="-6"/>',
    '    <line x1="-18" y1="-2" x2="-28" y2="-2"/>',
    '    <line x1="-10" y1="-12" x2="-18" y2="-12"/>',
    '  </g>',
    '  <line class="skier-fig__ski" x1="-14" y1="0" x2="14" y2="0"/>',
    '  <polyline points="3,0 5,-7 2,-13 5,-19"/>',
    '  <circle class="skier-fig__head" cx="6" cy="-23" r="3"/>',
    '  <line x1="4" y1="-19" x2="-9" y2="-3"/>',
    '  <line x1="5" y1="-19" x2="-3" y2="-1"/>',
    '</g>'
  ].join('');

  const skier   = svg.querySelector('#heroSkier');
  const trails  = svg.querySelector('#heroSkierTrails');
  const rampGrp = svg.querySelector('#heroRamp');

  let M, Z, line1Top, scaleFinal, svgW, svgH;
  let rampStart, rampPeak, rampAngleDeg;

  function measure() {
    const wrapRect = wrap.getBoundingClientRect();
    svgW = wrapRect.width;
    svgH = wrapRect.height;
    if (svgW < 10 || svgH < 10) return false;
    svg.setAttribute('viewBox', '0 0 ' + svgW + ' ' + svgH);
    svg.setAttribute('width',  svgW);
    svg.setAttribute('height', svgH);

    const getRect = function (el) {
      const r = el.getBoundingClientRect();
      return {
        l: r.left  - wrapRect.left,
        r: r.right - wrapRect.left,
        t: r.top   - wrapRect.top,
        b: r.bottom - wrapRect.top,
        cx: (r.left + r.right) / 2 - wrapRect.left,
        cy: (r.top + r.bottom) / 2 - wrapRect.top,
        w: r.right - r.left,
        h: r.bottom - r.top
      };
    };
    const l1 = Array.prototype.map.call(wrap.querySelectorAll('.line-1 .ltr'), getRect);
    if (!l1.length) return false;
    M = l1[0];
    Z = l1[l1.length - 1];

    // Milker line-box is tight to the glyph; small inset puts skis on the cap-top
    const capInset = M.h * 0.04;
    line1Top = M.t + capInset;

    // Skier scale: ~18% of letter height (skier figure ~26px tall in local coords)
    scaleFinal = Math.max(1.0, Math.min(2.6, (M.h * 0.18) / 26));

    // Integrated ramp: solid filled wedge in the Z's color, painted on top of the Z
    // so it visually reads as a peak of the letter itself.
    const rampStartX = Z.l + Z.w * 0.30;
    const rampStartY = line1Top;
    const rampRightX = Z.r + Z.w * 0.04;
    const rampRightY = line1Top;
    const rampPeakX  = Z.r - Z.w * 0.03;
    const rampPeakY  = line1Top - M.h * 0.45;
    rampGrp.innerHTML =
      '<polygon class="hero-ramp-fill" points="' +
      rampStartX + ',' + rampStartY + ' ' +
      rampRightX + ',' + rampRightY + ' ' +
      rampPeakX  + ',' + rampPeakY  +
      '"/>';

    rampStart = { x: rampStartX, y: rampStartY };
    rampPeak  = { x: rampPeakX,  y: rampPeakY };
    rampAngleDeg = Math.atan2(rampPeakY - rampStartY, rampPeakX - rampStartX) * 180 / Math.PI;
    return true;
  }

  function lerp(a, b, k) { return a + (b - a) * k; }
  function easeIn(k)    { return k * k; }
  function easeOut(k)   { return 1 - Math.pow(1 - k, 3); }

  // Phase boundaries
  const P_EMERGE  = 0.07;
  const P_RIDE    = 0.58;
  const P_RAMP    = 0.63;
  const P_AIR     = 0.96;

  function getState(t) {
    if (!M) return null;

    if (t < P_EMERGE) {
      const k = t / P_EMERGE;
      const x0 = M.cx,    y0 = M.cy;
      const x1 = M.l + 4, y1 = line1Top;
      const x  = lerp(x0, x1, easeOut(k));
      const yLin = lerp(y0, y1, easeOut(k));
      const y  = yLin - Math.sin(k * Math.PI) * (M.h * 0.18);
      return { x: x, y: y, rot: 0, op: Math.min(1, k * 1.4), sc: scaleFinal, trail: 0 };
    }
    if (t < P_RIDE) {
      const k = (t - P_EMERGE) / (P_RIDE - P_EMERGE);
      const eK = easeIn(k); // accelerating across the letters
      const x = lerp(M.l + 4, rampStart.x, eK);
      const trail = 0.25 + 0.6 * k;
      return { x: x, y: line1Top, rot: 0, op: 1, sc: scaleFinal, trail: trail };
    }
    if (t < P_RAMP) {
      const k = (t - P_RIDE) / (P_RAMP - P_RIDE);
      // Linear motion up the ramp — the skier keeps momentum and shoots off the peak
      const x = lerp(rampStart.x, rampPeak.x, k);
      const y = lerp(rampStart.y, rampPeak.y, k);
      const rot = lerp(0, rampAngleDeg, k);
      const trail = lerp(0.85, 0, k);
      return { x: x, y: y, rot: rot, op: 1, sc: scaleFinal, trail: trail };
    }
    if (t < P_AIR) {
      const k = (t - P_RAMP) / (P_AIR - P_RAMP);
      const xStart = rampPeak.x;
      const yStart = rampPeak.y;
      // Exit way off-screen, right + down
      const xEnd  = svgW + M.w * 1.4;
      const yEnd  = svgH + M.h * 0.6;
      const apexY = rampPeak.y - M.h * 0.4;
      const x = lerp(xStart, xEnd, k);
      const yMid = (yStart + yEnd) / 2;
      const yParab = lerp(yStart, yEnd, k) - 4 * (yMid - apexY) * k * (1 - k);
      const rot = rampAngleDeg - 380 * k;
      const op = k > 0.85 ? lerp(1, 0, (k - 0.85) / 0.15) : 1;
      return { x: x, y: yParab, rot: rot, op: op, sc: scaleFinal, trail: 0 };
    }
    return { x: M.cx, y: M.cy, rot: 0, op: 0, sc: scaleFinal, trail: 0 };
  }

  function render(s) {
    skier.setAttribute(
      'transform',
      'translate(' + s.x.toFixed(2) + ',' + s.y.toFixed(2) +
      ') rotate(' + s.rot.toFixed(2) +
      ') scale(' + s.sc.toFixed(3) + ')'
    );
    skier.style.opacity = s.op;
    if (trails) trails.style.opacity = s.trail;
  }

  const DURATION = 9500;
  let start = null;
  function frame(now) {
    if (start === null) start = now;
    const elapsed = (now - start) % DURATION;
    const t = elapsed / DURATION;
    const s = getState(t);
    if (s) render(s);
    requestAnimationFrame(frame);
  }

  const reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function start_() {
    if (!measure()) return;
    if (reduced) {
      const s = getState(0.30);
      if (s) { s.op = 0.85; s.trail = 0.5; render(s); }
    } else {
      requestAnimationFrame(frame);
    }
  }
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(start_);
  } else {
    window.addEventListener('load', start_);
  }

  let resizeTimer;
  window.addEventListener('resize', function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(measure, 120);
  });
})();
