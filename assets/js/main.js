/* ==========================================================================
   Raven Kumar — Portfolio scripts
   ========================================================================== */

(function () {
  'use strict';

  /* ============================================================
     Translations (English + Bahasa Malaysia)
     ============================================================ */
  const I18N = {
    en: {
      'nav.about': 'About', 'nav.experience': 'Experience', 'nav.skills': 'Skills',
      'nav.projects': 'Projects', 'nav.fyp': 'FYP', 'nav.robotics': 'Robotics',
      'nav.blog': 'Blog',
      'nav.contact': 'Contact', 'nav.cta': "Let's Talk",

      'hero.badge': 'Available for opportunities',
      'hero.greet': "Hi, I'm",
      'hero.desc':  'Computer Science undergraduate at UniSZA (CGPA 3.83) specialising in mobile and web development. I build full-stack applications with Python &amp; Django, design clean databases and automate real-world workflows.',
      'hero.cta.work':   'View My Work',
      'hero.cta.resume': 'Download Resume',

      'about.title':       'About <span class="grad">Me</span>',
      'about.meta.degree': 'BSc Computer Science (Software Dev), UniSZA — CGPA 3.83',
      'about.meta.diploma':'Diploma in IT, PSIS — CGPA 3.96',
      'about.meta.loc':    'Kapar, Selangor, Malaysia',
      'about.meta.lang':   'English & Malay (Fluent), Tamil (Conversational)',
      'about.h3':          'Turning ideas into clean, scalable software.',
      'about.p1':          "I'm a passionate software developer with a strong foundation in computer science, currently studying at <strong>Universiti Sultan Zainal Abidin (UniSZA)</strong>. I love designing and building scalable applications — from backend systems to intelligent user-facing products.",
      'about.p2':          'My experience includes backend development with Python and Django, database design, workflow automation, and IoT. I enjoy turning real-world problems into maintainable software with measurable impact.',
      'about.pill.fs':  'Full-Stack Development',
      'about.pill.ai':  'AI / Machine Learning',
      'about.pill.be':  'Backend Development',

      'experience.title': 'Work <span class="grad">Experience</span>',
      'exp.role': 'Software Developer Intern',
      'exp.b1': 'Built a Django web application managing <strong>10,000+ cutting list records</strong>.',
      'exp.b2': 'Improved data retrieval performance by approximately <strong>30%</strong>.',
      'exp.b3': 'Designed a normalised <strong>MySQL</strong> database schema.',
      'exp.b4': 'Automated approval workflows with <strong>Microsoft Power Automate</strong>, saving <strong>~5 hours/week</strong>.',
      'exp.b5': 'Collaborated in an <strong>Agile</strong> team with sprint planning and code reviews.',

      'skills.title': 'Skills &amp; <span class="grad">Technologies</span>',
      'skills.lang': 'Languages',
      'skills.fw':   'Frameworks & Tools',
      'skills.db':   'Databases',
      'skills.iot':  'IoT & Web',

      'projects.title': 'Featured <span class="grad">Projects</span>',
      'proj.bw.title':  'Fresh Flower — QR Checkout for Florists',
      'proj.bw.desc':   'Fresh Flower is an Android mobile app (demo) that lets customers browse a small flower catalog, add items to a cart and place orders. Payments are handled via bank transfer (e.g. Maybank, CIMB) where customers upload a PDF payment proof. Admins can manage flower items, view sales records and generate reports. The app is distributed to customers via an install QR code; the prototype focuses on order, payment-proof workflow and admin management (no integrated payment gateway).',
      'proj.bw.cta':    'View Demo',
      'proj.bw.private':'Source: demo',
      'proj.hostel.title': 'Hostel Allocation System',
      'proj.hostel.desc':  'Web-based hostel room allocation system with student application management and an admin approval workflow for streamlined campus housing.',

      'rob.title': 'Mechabot Rush V3 — <span class="grad">Maze Senior</span>',
      'rob.sub':   'A 3-day national robotics competition where my team programmed an autonomous maze-solving Cytron <strong>Mechabot Rush V3</strong> using Arduino IDE and a full <strong>8-channel IR line sensor array</strong> — finishing in the <strong>Top 6</strong>.',
      'rob.meta.rank': 'Top 6 Finalist',
      'rob.meta.cat':  'Maze Senior Category',
      'rob.meta.date': '24 — 26 April 2026',
      'rob.meta.dur':  '3-day competition',
      'rob.meta.loc':  'Kampus Taiping, Perak',
      'rob.meta.team': 'Team of 3',
      'rob.gallery.h': 'On the Ground',
      'rob.g1.t': 'Preparation',
      'rob.g1.s': 'Programming the Mechabot in Arduino IDE at Bengkel FRIT, Gong Badak.',
      'rob.g2.s': 'Our autonomous maze-solver — chassis, IR sensor array and Arduino brain.',
      'rob.g3.t': 'Competition Day',
      'rob.g3.s': 'Running the maze with my teammate Haziq under the clock.',
      'rob.maze.h':    'Auto-Solving a Complex Maze',
      'rob.bus':       '8-Channel Sensor Bus',
      'rob.bus.active':'8 active',
      'rob.state':         'State',
      'rob.state.forward': 'FORWARD',
      'rob.speed':         'Speed',
      'rob.path':          'Path',
      'rob.path.wall':     'Wall-follow (L)',
      'rob.maze.cap': 'The Mechabot uses a <strong>left-hand wall-follow</strong> strategy — a classic maze-solving algorithm. All <strong>8 channels (IR-1 … IR-8)</strong> of the line-sensor array are wired in for fine-grained centre, edge and intersection detection. The Arduino picks the next motion in milliseconds. The animation above shows a sample run on a complex maze map.',
      'rob.note': 'Top 6 — Maze Senior · MASA 2026, ADTEC Taiping.',

      'contact.title': "Let's <span class=\"grad\">Connect</span>",
      'contact.h3':    'Have a project in mind?',
      'contact.p':     "I'm open to internships, freelance work and collaborations. Reach me via any of the channels below.",
      'contact.btn':   'Say hello on WhatsApp',

      'footer': 'Crafted with care.',

      // Typed roles
      'typed.0': 'Software Developer Student',
      'typed.1': 'Computer Science @ UniSZA',
      'typed.2': 'Full-Stack Developer',
      'typed.3': 'Mobile & Web Developer',
      'typed.4': 'Backend Developer (Django)'
    },

    bm: {
      'nav.about': 'Tentang', 'nav.experience': 'Pengalaman', 'nav.skills': 'Kemahiran',
      'nav.projects': 'Projek', 'nav.fyp': 'FYP', 'nav.robotics': 'Robotik',
      'nav.blog': 'Blog',
      'nav.contact': 'Hubungi', 'nav.cta': 'Mari Berbual',

      'hero.badge': 'Tersedia untuk peluang baru',
      'hero.greet': 'Hai, saya',
      'hero.desc':  'Pelajar Sarjana Muda Sains Komputer di UniSZA (CGPA 3.83) yang mengkhusus dalam pembangunan mudah alih dan web. Saya membina aplikasi <em>full-stack</em> dengan Python &amp; Django, mereka bentuk pangkalan data yang kemas dan mengautomasikan aliran kerja sebenar.',
      'hero.cta.work':   'Lihat Hasil Kerja',
      'hero.cta.resume': 'Muat Turun Resume',

      'about.title':       'Tentang <span class="grad">Saya</span>',
      'about.meta.degree': 'Sarjana Muda Sains Komputer (Pemb. Perisian), UniSZA — CGPA 3.83',
      'about.meta.diploma':'Diploma Teknologi Maklumat, PSIS — CGPA 3.96',
      'about.meta.loc':    'Kapar, Selangor, Malaysia',
      'about.meta.lang':   'Bahasa Inggeris & Melayu (Fasih), Tamil (Perbualan)',
      'about.h3':          'Mengubah idea menjadi perisian yang kemas dan boleh berkembang.',
      'about.p1':          'Saya seorang pembangun perisian yang bersemangat dengan asas yang kukuh dalam sains komputer, kini menuntut di <strong>Universiti Sultan Zainal Abidin (UniSZA)</strong>. Saya minat mereka bentuk dan membina aplikasi yang boleh berkembang — daripada sistem <em>backend</em> hingga produk pintar untuk pengguna akhir.',
      'about.p2':          'Pengalaman saya merangkumi pembangunan <em>backend</em> dengan Python dan Django, reka bentuk pangkalan data, automasi aliran kerja, dan IoT. Saya gemar menyelesaikan masalah dunia sebenar dengan perisian yang mudah diselenggara dan memberi kesan ketara.',
      'about.pill.fs':  'Pembangunan Full-Stack',
      'about.pill.ai':  'AI / Pembelajaran Mesin',
      'about.pill.be':  'Pembangunan Backend',

      'experience.title': '<span class="grad">Pengalaman</span> Kerja',
      'exp.role': 'Pelatih Pembangun Perisian',
      'exp.b1': 'Membina aplikasi web Django yang menguruskan <strong>10,000+ rekod senarai pemotongan</strong>.',
      'exp.b2': 'Meningkatkan prestasi pengambilan data sebanyak kira-kira <strong>30%</strong>.',
      'exp.b3': 'Mereka bentuk skema pangkalan data <strong>MySQL</strong> yang dinormalkan.',
      'exp.b4': 'Mengautomasikan aliran kerja kelulusan dengan <strong>Microsoft Power Automate</strong>, menjimatkan <strong>~5 jam/minggu</strong>.',
      'exp.b5': 'Bekerjasama dalam pasukan <strong>Agile</strong> dengan perancangan <em>sprint</em> dan ulasan kod.',

      'skills.title': 'Kemahiran &amp; <span class="grad">Teknologi</span>',
      'skills.lang': 'Bahasa Pengaturcaraan',
      'skills.fw':   'Rangka Kerja & Alat',
      'skills.db':   'Pangkalan Data',
      'skills.iot':  'IoT & Web',

      'projects.title': 'Projek <span class="grad">Pilihan</span>',
      'proj.bw.title':  'Fresh Flower — Selesaian QR Untuk Kedai Bunga',
      'proj.bw.desc':   '<strong>Fresh Flower</strong> ialah aplikasi mudah alih Android (demo) yang membolehkan pelanggan melihat katalog bunga kecil, menambah barangan ke troli dan membuat pesanan. Pembayaran dilakukan melalui pindahan bank (contoh: Maybank, CIMB) dan pelanggan perlu memuat naik bukti pembayaran dalam format PDF. Admin boleh mengurus produk bunga, melihat rekod jualan dan menghasilkan laporan. Aplikasi diedarkan kepada pelanggan melalui kod QR pemasangan; prototaip memfokuskan aliran pesanan, bukti pembayaran dan pengurusan admin (tiada gerbang pembayaran bersepadu).',
      'proj.bw.cta':    'Lihat Demo',
      'proj.bw.private':'Sumber: demo',
      'proj.hostel.title': 'Sistem Pengagihan Asrama',
      'proj.hostel.desc':  'Sistem pengagihan bilik asrama berasaskan web dengan pengurusan permohonan pelajar dan aliran kelulusan pentadbir untuk perumahan kampus yang lebih lancar.',

      'rob.title': 'Mechabot Rush V3 — <span class="grad">Maze Senior</span>',
      'rob.sub':   'Pertandingan robotik kebangsaan selama 3 hari di mana pasukan saya memprogramkan Cytron <strong>Mechabot Rush V3</strong> autonomi untuk menyelesaikan labirin menggunakan Arduino IDE dan susunan <strong>sensor garis IR 8 saluran</strong> penuh — berjaya menamatkan dalam <strong>6 Teratas</strong>.',
      'rob.meta.rank': 'Finalis 6 Teratas',
      'rob.meta.cat':  'Kategori Maze Senior',
      'rob.meta.date': '24 — 26 April 2026',
      'rob.meta.dur':  'Pertandingan 3 hari',
      'rob.meta.loc':  'Kampus Taiping, Perak',
      'rob.meta.team': 'Pasukan bertiga',
      'rob.gallery.h': 'Di Lapangan',
      'rob.g1.t': 'Persediaan',
      'rob.g1.s': 'Memprogram Mechabot dalam Arduino IDE di Bengkel FRIT, Gong Badak.',
      'rob.g2.s': 'Robot penyelesai labirin autonomi kami — casis, susunan sensor IR dan otak Arduino.',
      'rob.g3.t': 'Hari Pertandingan',
      'rob.g3.s': 'Mengharungi labirin bersama rakan sepasukan Haziq dalam tekanan masa.',
      'rob.maze.h':    'Menyelesaikan Labirin Kompleks Secara Automatik',
      'rob.bus':       'Bas Sensor 8 Saluran',
      'rob.bus.active':'8 aktif',
      'rob.state':         'Status',
      'rob.state.forward': 'KE HADAPAN',
      'rob.speed':         'Laju',
      'rob.path':          'Laluan',
      'rob.path.wall':     'Ikut dinding (Kiri)',
      'rob.maze.cap': 'Mechabot menggunakan strategi <strong>ikut dinding kiri</strong> — algoritma klasik penyelesaian labirin. Kesemua <strong>8 saluran (IR-1 … IR-8)</strong> susunan sensor disambungkan untuk pengesanan tengah, tepi dan persimpangan yang halus. Arduino memilih pergerakan seterusnya dalam milisaat. Animasi di atas menunjukkan satu larian sampel pada peta labirin yang kompleks.',
      'rob.note': '6 Teratas — Maze Senior · MASA 2026, ADTEC Taiping.',

      'contact.title': 'Mari <span class="grad">Berhubung</span>',
      'contact.h3':    'Ada projek di fikiran?',
      'contact.p':     'Saya terbuka untuk latihan industri, kerja bebas dan kerjasama. Hubungi saya melalui mana-mana saluran di bawah.',
      'contact.btn':   'Sapa saya di WhatsApp',

      'footer': 'Dihasilkan dengan teliti.',

      // Typed roles
      'typed.0': 'Pelajar Pembangun Perisian',
      'typed.1': 'Sains Komputer @ UniSZA',
      'typed.2': 'Pembangun Full-Stack',
      'typed.3': 'Pembangun Mudah Alih & Web',
      'typed.4': 'Pembangun Backend (Django)'
    }
  };

  /* ---------- Footer year ---------- */
  const yr = document.getElementById('yr');
  if (yr) yr.textContent = new Date().getFullYear();

  /* ---------- Theme toggle ---------- */
  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('rk-theme', theme);
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', theme === 'light' ? '#f6f7fb' : '#07080c');
  }
  function initTheme() {
    const saved = localStorage.getItem('rk-theme');
    const prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
    applyTheme(saved || (prefersLight ? 'light' : 'light'));
    const btn = document.getElementById('themeToggle');
    if (!btn) return;
    btn.addEventListener('click', () => {
      const next = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
      applyTheme(next);
    });
  }

  /* ---------- Language (i18n) ---------- */
  let currentLang = 'en';
  let typedTimeoutId = null;

  function applyLang(lang) {
    if (!I18N[lang]) lang = 'en';
    currentLang = lang;
    document.documentElement.setAttribute('lang', lang === 'bm' ? 'ms' : 'en');
    const dict = I18N[lang];

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) el.textContent = dict[key];
    });
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      if (dict[key] !== undefined) el.innerHTML = dict[key];
    });

    // Update language toggle label
    document.querySelectorAll('.lang-current').forEach(el => {
      el.textContent = lang === 'bm' ? 'BM' : 'EN';
    });

    // Re-init typed roles in the new language
    if (typedTimeoutId) { clearTimeout(typedTimeoutId); typedTimeoutId = null; }
    initTypedRoles();

    localStorage.setItem('rk-lang', lang);
  }
  function initLang() {
    const saved = localStorage.getItem('rk-lang') || 'en';
    applyLang(saved);
    const btn = document.getElementById('langToggle');
    if (!btn) return;
    btn.addEventListener('click', () => {
      applyLang(currentLang === 'en' ? 'bm' : 'en');
    });
  }

  /* ---------- Typed roles ---------- */
  function initTypedRoles() {
    const el = document.getElementById('typed');
    if (!el) return;
    const dict = I18N[currentLang] || I18N.en;
    const roles = [dict['typed.0'], dict['typed.1'], dict['typed.2'], dict['typed.3'], dict['typed.4']];
    let i = 0, j = 0, deleting = false;
    const myLang = currentLang;
    function tick() {
      if (currentLang !== myLang) return; // abandon stale loop after a language switch
      const role = roles[i];
      el.textContent = role.slice(0, j);
      if (!deleting && j < role.length) {
        j++; typedTimeoutId = setTimeout(tick, 75);
      } else if (deleting && j > 0) {
        j--; typedTimeoutId = setTimeout(tick, 40);
      } else {
        deleting = !deleting;
        if (!deleting) i = (i + 1) % roles.length;
        typedTimeoutId = setTimeout(tick, deleting ? 1400 : 300);
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
        const cs = getComputedStyle(document.documentElement);
        ctx.fillStyle = (cs.getPropertyValue('--particle') || 'rgba(124, 92, 255, .55)').trim();
        ctx.fill();
      }
      const cs2 = getComputedStyle(document.documentElement);
      const linkBase = (cs2.getPropertyValue('--particle-line') || 'rgba(34, 211, 238, .18)').trim();
      for (let i = 0; i < parts.length; i++) {
        for (let j = i + 1; j < parts.length; j++) {
          const a = parts[i], b = parts[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const d = Math.hypot(dx, dy);
          if (d < 120) {
            ctx.strokeStyle = linkBase.replace(/[\d.]+\)$/, ((1 - d / 120) * .18).toFixed(3) + ')');
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
    initTheme();
    initLang();      // also calls initTypedRoles internally
    initNav();
    initRevealOnScroll();
    initParticles();
    initBinWatchDemo();
  });
})();
