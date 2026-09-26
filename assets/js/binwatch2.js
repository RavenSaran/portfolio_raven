/* ==========================================================================
   BinWatch case study (index.html) — 3D smart-bin live readout.
   Reads the animated trash height inside the bin window and mirrors it into
   the "Live fill level" callout, status text and LED colour, using the same
   30 / 60 / 90% thresholds as the BinWatch Flutter app.
   ========================================================================== */
(function () {
  'use strict';

  const stage = document.querySelector('.bin3d-stage');
  if (!stage) return;

  const win     = stage.querySelector('.b-window');
  const fill    = stage.querySelector('.b-fill');
  const pctEl   = stage.querySelector('.spec-pct');
  const stateEl = stage.querySelector('.spec-state');
  if (!win || !fill) return;

  function statusFor(pct) {
    if (pct >= 90) return 'Full';
    if (pct >= 60) return 'High';
    if (pct >= 30) return 'Medium';
    return 'Low';
  }

  let lastPct = -1;
  function render(pct) {
    if (pct === lastPct) return;
    lastPct = pct;
    const status = statusFor(pct);
    if (pctEl) pctEl.textContent = pct + '%';
    if (stateEl) stateEl.textContent = status;
    stage.dataset.state = status.toLowerCase();
  }

  function read() {
    const total = win.clientHeight;
    return total ? Math.round((fill.offsetHeight / total) * 100) : 0;
  }

  // Only run the loop while the bin is on screen.
  let rafId = null;
  function loop() { render(read()); rafId = requestAnimationFrame(loop); }
  function start() { if (rafId === null) rafId = requestAnimationFrame(loop); }
  function stop()  { if (rafId !== null) { cancelAnimationFrame(rafId); rafId = null; } }

  render(read());
  new IntersectionObserver(entries => {
    entries.forEach(e => (e.isIntersecting ? start() : stop()));
  }).observe(stage);
})();
