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

  /* ---------- BinWatch 3D bin — sync fill % / status text (12s loop) ---------- */
  function initBinWatchDemo() {
    const stage = document.querySelector('.bin3d-stage');
    if (!stage) return;

    const pctEl   = stage.querySelector('.spec-pct');
    const stateEl = stage.querySelector('.spec-state');

    const DURATION = 12000;
    const start = performance.now();

    function statusFor(pct) {
      if (pct >= 90) return 'Full';
      if (pct >= 60) return 'High';
      if (pct >= 30) return 'Medium';
      return 'Low';
    }

    function tick(now) {
      const t = ((now - start) % DURATION) / DURATION; // 0..1
      // Mirrors CSS keyframe `binFill` so number matches the visible fill.
      let pct;
      if      (t < 0.50) pct =  5 + (92 -  5) * (t / 0.50);   // 0–6s: 5% → 92%
      else if (t < 0.62) pct = 92;                            // 6–7.4s: hold full
      else if (t < 0.66) pct = 92 - (92 -  5) * ((t - 0.62) / 0.04); // 7.4–7.9s: empty
      else                pct = 5;                            // rest: idle

      pct = Math.round(pct);
      if (pctEl)   pctEl.textContent   = pct + '%';
      if (stateEl) stateEl.textContent = statusFor(pct);
      stage.dataset.state = statusFor(pct).toLowerCase();
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
