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

    burger.addEventListener('click', () => {
      burger.classList.toggle('active');
      menu.classList.toggle('open');
    });

    menu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        burger.classList.remove('active');
        menu.classList.remove('open');
      });
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
    const ctx = canvas.getContext('2d');
    let w, h, parts = [];

    function resize() {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    const N = Math.min(90, Math.floor((w * h) / 22000));
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

  /* ---------- Bootstrap ---------- */
  document.addEventListener('DOMContentLoaded', () => {
    initTypedRoles();
    initNav();
    initRevealOnScroll();
    initParticles();
  });
})();
