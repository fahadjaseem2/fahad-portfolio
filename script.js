// ============================================================
// Terminal typing effect (hero)
// ============================================================
(function typeHero(){
  const nameEl = document.getElementById('typedName');
  const roleEl = document.getElementById('typedRole');
  if (!nameEl || !roleEl) return;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const name = 'fahad_jaseem';
  const role = 'DevOps Engineer · Cloud Infrastructure · CI/CD Automation';

  if (reduceMotion){
    nameEl.textContent = name;
    roleEl.innerHTML = '<span class="prompt">$</span> ' + role;
    return;
  }

  let i = 0;
  function typeName(){
    if (i <= name.length){
      nameEl.innerHTML = name.slice(0, i) + '<span class="caret">&nbsp;</span>';
      i++;
      setTimeout(typeName, 70);
    } else {
      nameEl.innerHTML = name;
      setTimeout(typeRole, 250);
    }
  }
  let j = 0;
  function typeRole(){
    roleEl.innerHTML = '<span class="prompt">$</span> ' + role.slice(0, j) + '<span class="caret">&nbsp;</span>';
    if (j <= role.length){
      j++;
      setTimeout(typeRole, 20);
    } else {
      roleEl.innerHTML = '<span class="prompt">$</span> ' + role;
    }
  }
  typeName();
})();

// ============================================================
// Pipeline scroll-progress rail
// ============================================================
(function scrollRail(){
  const fill = document.getElementById('railFill');
  if (!fill) return;
  function update(){
    const doc = document.documentElement;
    const scrollTop = doc.scrollTop || document.body.scrollTop;
    const height = doc.scrollHeight - doc.clientHeight;
    const pct = height > 0 ? (scrollTop / height) * 100 : 0;
    fill.style.width = pct + '%';
  }
  document.addEventListener('scroll', update, { passive: true });
  update();
})();

// ============================================================
// Active stage highlight in the signature pipeline strip
// ============================================================
(function activeStage(){
  const stages = Array.from(document.querySelectorAll('.stage'));
  if (!stages.length) return;
  const targets = stages.map(s => document.querySelector(s.getAttribute('href')));

  function update(){
    let activeIndex = 0;
    targets.forEach((t, idx) => {
      if (t && t.getBoundingClientRect().top <= 140) activeIndex = idx;
    });
    stages.forEach((s, idx) => s.classList.toggle('is-active', idx === activeIndex));
  }
  document.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
  update();
})();

// ============================================================
// Reveal-on-scroll for sections
// ============================================================
(function revealOnScroll(){
  const items = document.querySelectorAll('.section, .metric, .stack-card, .project-card, .timeline__item');
  items.forEach(el => el.classList.add('reveal'));

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  items.forEach(el => io.observe(el));
})();

// ============================================================
// Footer year
// ============================================================
(function footerYear(){
  const el = document.getElementById('year');
  if (el) el.textContent = new Date().getFullYear();
})();
