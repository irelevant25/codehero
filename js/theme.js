/* ═══════════════════════════════════════════════════════════
   theme — Dark / light mode with OS preference detection
   ═══════════════════════════════════════════════════════════ */

let currentTheme = localStorage.getItem('theme') || 'auto';

const mq = window.matchMedia('(prefers-color-scheme: dark)');

function resolveTheme(t) {
  return t === 'auto' ? (mq.matches ? 'dark' : 'light') : t;
}

function applyTheme(theme) {
  currentTheme = theme;
  localStorage.setItem('theme', theme);

  const resolved = resolveTheme(theme);
  document.documentElement.setAttribute('data-theme', resolved);

  const sun  = document.getElementById('themeIconSun');
  const moon = document.getElementById('themeIconMoon');

  if (resolved === 'dark') {
    sun.style.display  = 'block';
    moon.style.display = 'none';
  } else {
    sun.style.display  = 'none';
    moon.style.display = 'block';
  }
}

// Re-apply when OS preference changes while theme is set to 'auto'
mq.addEventListener('change', () => {
  if (currentTheme === 'auto') applyTheme('auto');
});
