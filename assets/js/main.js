/* ==========================================================================
   Raven Kumar — Portfolio scripts
   ========================================================================== */

(function () {
  'use strict';

  /* ---------- Footer year ---------- */
  const yr = document.getElementById('yr');
  if (yr) yr.textContent = new Date().getFullYear();

  /* ---------- Typed roles ---------- */
  function initTypedRoles() {
    const el = document.getElementById('typed');
    if (!el) return;
    const roles = [
      'Software Developer Student',
      'Computer Science @ UniSZA',
      'Full-Stack Developer',
      'Mobile & Web Developer',
      'Backend Developer (Django)'
    ];
    let i = 0, j = 0, deleting = false;
    function tick() {
      const role = roles[i];
      el.textContent = role.slice(0, j);
      if (!deleting && j < role.length) {
        j++; setTimeout(tick, 75);
      } else if (deleting && j > 0) {
        j--; setTimeout(tick, 40);
      } else {
        deleting = !deleting;
        if (!deleting) i = (i + 1) % roles.length;
        setTimeout(tick, deleting ? 1400 : 300);
      }
    }
    tick();
  }

  /* ---------- Navigation ---------- */
  function initNav() {
    const nav = document.getElementById('navbar');
    const menu = document.getElementById('navMenu');
    const burger = document.getElementById('hamburger');
    if (!nav || !menu || !burger) return;

    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 20);
    });

    function closeMenu() {
      burger.classList.remove('active');
      menu.classList.remove('open');
      document.body.style.overflow = '';
    }
    function toggleMenu() {
      const open = menu.classList.toggle('open');
      burger.classList.toggle('active', open);
      document.body.style.overflow = open ? 'hidden' : '';
    }

    burger.addEventListener('click', toggleMenu);

    menu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', closeMenu);
    });

    // Close menu when clicking outside the navbar
    document.addEventListener('click', (e) => {
      if (!menu.classList.contains('open')) return;
      if (!nav.contains(e.target)) closeMenu();
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeMenu();
    });

    // Re-open desktop nav on resize past breakpoint
    window.addEventListener('resize', () => {
      if (window.innerWidth > 860) closeMenu();
    });
  }

  /* ---------- Reveal-on-scroll ---------- */
  function initRevealOnScroll() {
    const targets = document.querySelectorAll('[data-animate]');
    if (!('IntersectionObserver' in window)) {
      targets.forEach(el => el.classList.add('in'));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    targets.forEach(el => io.observe(el));
  }

  /* ---------- Particle background ---------- */
  function initParticles() {
    const canvas = document.getElementById('particles');
    if (!canvas) return;

    // Skip the animation entirely if the user prefers reduced motion.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      canvas.style.display = 'none';
      return;
    }

    const ctx = canvas.getContext('2d');
    let w, h, parts = [];

    function resize() {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    // Lower particle count on small / mobile screens for smoother performance.
    const isMobile = window.innerWidth < 700;
    const cap = isMobile ? 35 : 90;
    const density = isMobile ? 38000 : 22000;
    const N = Math.min(cap, Math.floor((w * h) / density));
    for (let i = 0; i < N; i++) {
      parts.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - .5) * .3,
        vy: (Math.random() - .5) * .3,
        r: Math.random() * 1.6 + .4
      });
    }

    function draw() {
      ctx.clearRect(0, 0, w, h);
      for (const p of parts) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(124, 92, 255, .55)';
        ctx.fill();
      }
      for (let i = 0; i < parts.length; i++) {
        for (let j = i + 1; j < parts.length; j++) {
          const a = parts[i], b = parts[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const d = Math.hypot(dx, dy);
          if (d < 120) {
            ctx.strokeStyle = 'rgba(34, 211, 238, ' + (1 - d / 120) * .18 + ')';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
      requestAnimationFrame(draw);
    }
    draw();
  }

  /* ---------- BinWatch live-demo text sync (16s loop) ---------- */
  function initBinWatchDemo() {
    const stage = document.querySelector('#fyp .scene');
    if (!stage) return;

    const pctEls   = stage.querySelectorAll('.pct, .phone-bar-pct');
    const titleEl  = stage.querySelector('.task-title');
    const subEl    = stage.querySelector('.task-sub');
    const stageEl  = stage.querySelector('.stage-text');
    const taskCard = stage.querySelector('.phone-card--task');

    // Timeline mirrors CSS @keyframes (16s loop).
    // [from%, to%, fill%, taskTitle, taskSub, stageText, taskBg]
    const frames = [
      [0,   18,  5,  'Awaiting data',     'Sensor reading bin',     'Sensor reading…',      ''],
      [18,  20,  25, 'Status: Low',       'Routine monitoring',     'Streaming to Firebase…', ''],
      [20,  28,  50, 'Status: Medium',    'Fill increasing',        'Streaming to Firebase…', ''],
      [28,  36,  75, 'Status: High',      'Approaching threshold',  'Threshold approaching', ''],
      [36,  44,  92, 'BIN FULL',          'Alert dispatched',       'BIN FULL — alert sent', 'urgent'],
      [44,  56,  92, 'Task Assigned',     'Cleaner: Raven · Urgent', 'Cleaner dispatched',   'urgent'],
      [56,  64,  92, 'Cleaner On Site',   'Emptying BIN-A1',         'Cleaning in progress', 'urgent'],
      [64,  72,  5,  'Task Completed ✓',  'Logged to Firestore',     'Bin emptied — logged', 'done'],
      [72,  100, 5,  'Idle',              'All clear',               'System monitoring',    'done']
    ];

    const DURATION = 16000;
    const start = performance.now();

    function tick(now) {
      const t = ((now - start) % DURATION) / DURATION * 100;
      const f = frames.find(fr => t >= fr[0] && t < fr[1]) || frames[0];
      const pct = Math.round(f[2]) + '%';
      pctEls.forEach(el => { el.textContent = pct; });
      if (titleEl && titleEl.textContent !== f[3]) titleEl.textContent = f[3];
      if (subEl   && subEl.textContent   !== f[4]) subEl.textContent   = f[4];
      if (stageEl && stageEl.textContent !== f[5]) stageEl.textContent = f[5];
      if (taskCard) {
        taskCard.classList.toggle('is-urgent', f[6] === 'urgent');
        taskCard.classList.toggle('is-done',   f[6] === 'done');
      }
      requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  /* ---------- Bootstrap ---------- */
  document.addEventListener('DOMContentLoaded', () => {
    initTypedRoles();
    initNav();
    initRevealOnScroll();
    initParticles();
    initBinWatchDemo();
  });
})();
