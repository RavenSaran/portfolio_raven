/* ==========================================================================
   Raven Kumar — Portfolio v2 (index2.html) interactions
   ========================================================================== */
(function () {
  'use strict';

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Footer year ---------- */
  const yr = document.getElementById('yr');
  if (yr) yr.textContent = new Date().getFullYear();

  /* ---------- Nav: background on scroll + mobile menu ---------- */
  const nav = document.getElementById('nav');
  const burger = document.getElementById('burger');
  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 24);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  function setMenu(open) {
    nav.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  }
  burger.addEventListener('click', () => setMenu(!nav.classList.contains('open')));
  document.querySelectorAll('#navLinks a').forEach(a => a.addEventListener('click', () => setMenu(false)));

  /* ---------- Active nav link for the section in view ---------- */
  const links = new Map();
  document.querySelectorAll('#navLinks a[href^="#"]').forEach(a => links.set(a.getAttribute('href').slice(1), a));
  const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      links.forEach(a => a.classList.remove('active'));
      const link = links.get(entry.target.id);
      if (link) link.classList.add('active');
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  links.forEach((_a, id) => { const s = document.getElementById(id); if (s) sectionObserver.observe(s); });

  /* ---------- Hero terminal: type commands, then print output ---------- */
  const term = document.getElementById('term');
  if (term && !reduceMotion) {
    const lines = Array.from(term.querySelectorAll('.t-line'));
    const typed = lines.map(l => { const i = l.querySelector('.t-in'); return i ? i.textContent : null; });
    term.classList.add('typing');
    lines.forEach((l, i) => { l.classList.add('t-hide'); if (typed[i]) l.querySelector('.t-in').textContent = ''; });

    const wait = ms => new Promise(r => setTimeout(r, ms));
    (async function run() {
      await wait(700);
      for (let i = 0; i < lines.length; i++) {
        lines[i].classList.remove('t-hide');
        if (typed[i]) {
          const input = lines[i].querySelector('.t-in');
          for (const ch of typed[i]) { input.textContent += ch; await wait(55 + Math.random() * 50); }
          await wait(280);
        } else {
          await wait(160);
        }
      }
    })();
  }

  /* ---------- Count-up numbers ---------- */
  function countUp(el) {
    const target = parseFloat(el.dataset.count);
    const decimals = parseInt(el.dataset.decimals || '0', 10);
    const suffix = el.dataset.suffix || '';
    const format = v => v.toLocaleString('en-US', { minimumFractionDigits: decimals, maximumFractionDigits: decimals }) + suffix;
    if (reduceMotion) { el.textContent = format(target); return; }
    const duration = 1600;
    const start = performance.now();
    const step = now => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      el.textContent = format(target * eased);
      if (t < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }

  /* ---------- Reveal on scroll (with stagger inside groups) ---------- */
  const revealEls = document.querySelectorAll('[data-reveal]');
  revealEls.forEach(el => {
    const siblings = Array.from(el.parentElement.children).filter(c => c.hasAttribute('data-reveal'));
    const idx = siblings.indexOf(el);
    if (idx > 0) el.style.setProperty('--d', Math.min(idx * 0.08, 0.4) + 's');
  });

  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      el.classList.add('in');
      el.querySelectorAll('[data-count]').forEach(countUp);
      el.querySelectorAll('.binboard').forEach(b => b.classList.add('in'));
      revealObserver.unobserve(el);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  revealEls.forEach(el => revealObserver.observe(el));

  /* ---------- Cursor spotlight on cards ---------- */
  if (!reduceMotion && window.matchMedia('(hover: hover)').matches) {
    document.querySelectorAll('.spotlight').forEach(card => {
      card.addEventListener('pointermove', e => {
        const r = card.getBoundingClientRect();
        card.style.setProperty('--mx', (e.clientX - r.left) + 'px');
        card.style.setProperty('--my', (e.clientY - r.top) + 'px');
      });
    });
  }

  /* ---------- Command palette (Ctrl/⌘ + K) ---------- */
  const palette = document.getElementById('palette');
  const pInput = document.getElementById('paletteInput');
  const pList = document.getElementById('paletteList');
  const pBtn = document.getElementById('paletteBtn');
  const isMac = /Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent);
  const pKey = document.getElementById('paletteKey');
  if (pKey && isMac) pKey.textContent = '⌘K';

  const commands = [
    ...Array.from(links.values()).map(a => ({ label: 'Go to ' + a.textContent.replace('./', ''), icon: 'fa-hashtag', hint: 'section', href: a.getAttribute('href') })),
    { label: 'Download CV', icon: 'fa-file-arrow-down', hint: 'pdf', href: 'assets/docs/RAVEN KUMAR CV.pdf', blank: true },
    { label: 'Email Raven', icon: 'fa-envelope', hint: 'mail', href: 'mailto:ravenkumarsaravanan@gmail.com' },
    { label: 'Open GitHub', icon: 'fa-code-branch', hint: 'link', href: 'https://github.com/RavenSaran', blank: true },
    { label: 'Open LinkedIn', icon: 'fa-user-tie', hint: 'link', href: 'https://linkedin.com/in/raven-kumar-saravanan', blank: true },
    { label: 'Classic version of this site', icon: 'fa-clock-rotate-left', hint: 'page', href: 'index.html' }
  ];
  let shown = [];
  let sel = 0;
  let lastFocus = null;

  function renderPalette() {
    const q = pInput.value.trim().toLowerCase();
    shown = commands.filter(c => c.label.toLowerCase().includes(q));
    sel = Math.min(sel, Math.max(shown.length - 1, 0));
    pList.innerHTML = '';
    if (!shown.length) { pList.innerHTML = '<li class="palette-empty" role="option" aria-disabled="true">No matches</li>'; return; }
    shown.forEach((c, i) => {
      const li = document.createElement('li');
      li.setAttribute('role', 'option');
      li.setAttribute('aria-selected', String(i === sel));
      li.innerHTML = '<i class="fas ' + c.icon + '"></i><span></span><small>' + c.hint + '</small>';
      li.querySelector('span').textContent = c.label;
      li.addEventListener('mouseenter', () => { sel = i; mark(); });
      li.addEventListener('click', () => runCommand(c));
      pList.appendChild(li);
    });
  }
  function mark() {
    Array.from(pList.children).forEach((li, i) => li.setAttribute('aria-selected', String(i === sel)));
    const cur = pList.children[sel];
    if (cur) cur.scrollIntoView({ block: 'nearest' });
  }
  function openPalette() {
    lastFocus = document.activeElement;
    setMenu(false);
    palette.hidden = false;
    pInput.value = ''; sel = 0; renderPalette();
    pInput.focus();
  }
  function closePalette() {
    if (palette.hidden) return;
    palette.hidden = true;
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }
  function runCommand(c) {
    closePalette();
    if (c.blank) window.open(c.href, '_blank', 'noopener');
    else window.location.href = c.href;
  }

  if (palette && pInput && pList) {
    if (pBtn) pBtn.addEventListener('click', openPalette);
    pInput.addEventListener('input', () => { sel = 0; renderPalette(); });
    pInput.addEventListener('keydown', e => {
      if (e.key === 'ArrowDown') { e.preventDefault(); sel = (sel + 1) % Math.max(shown.length, 1); mark(); }
      else if (e.key === 'ArrowUp') { e.preventDefault(); sel = (sel - 1 + shown.length) % Math.max(shown.length, 1); mark(); }
      else if (e.key === 'Enter' && shown[sel]) { e.preventDefault(); runCommand(shown[sel]); }
      else if (e.key === 'Tab') { e.preventDefault(); }
    });
    palette.addEventListener('click', e => { if (e.target === palette) closePalette(); });
  }

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') { setMenu(false); if (palette) closePalette(); }
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k' && palette) {
      e.preventDefault();
      palette.hidden ? openPalette() : closePalette();
    }
  });
})();
