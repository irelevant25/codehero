/* ═══════════════════════════════════════════════════════════
   app — Initialisation + UI interactions
   Depends on: i18n.js, theme.js  (loaded before this file)
   ═══════════════════════════════════════════════════════════ */

// ── Bootstrap ─────────────────────────────────────────────────────────────────
applyTheme(currentTheme);
applyLang(currentLang);

// ── Theme toggle ──────────────────────────────────────────────────────────────
document.getElementById('themeBtn').addEventListener('click', () => {
  applyTheme(resolveTheme(currentTheme) === 'dark' ? 'light' : 'dark');
});

// ── Language toggle ───────────────────────────────────────────────────────────
document.getElementById('langBtn').addEventListener('click', () => {
  applyLang(currentLang === 'sk' ? 'en' : 'sk');
});

// ── Mobile hamburger ──────────────────────────────────────────────────────────
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');

hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));

navLinks.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => navLinks.classList.remove('open'))
);

// ── Reference tabs ────────────────────────────────────────────────────────────
document.querySelectorAll('.ref-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.ref-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.ref-grid').forEach(g => g.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById('tab-' + tab.dataset.tab).classList.add('active');
  });
});

// ── Scroll animations (fade-up) ───────────────────────────────────────────────
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    fadeObserver.unobserve(entry.target);
  });
}, { threshold: 0.12 });

document.querySelectorAll('.fade-up').forEach(el => fadeObserver.observe(el));

// ── Skill bar animation (triggered when About section enters viewport) ─────────
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    document.querySelectorAll('.skill-fill').forEach(bar => {
      bar.style.width = bar.getAttribute('data-target');
    });
    skillObserver.disconnect();
  });
}, { threshold: 0.1 });

const aboutSection = document.getElementById('about');
if (aboutSection) skillObserver.observe(aboutSection);
