const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('#menu');
const year = document.querySelector('#year');
const glow = document.querySelector('.cursor-glow');
const themeBox = document.querySelector('#date-theme');

if (year) year.textContent = new Date().getFullYear();

if (toggle && menu) {
  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    menu.classList.toggle('open');
  });
  menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    menu.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }));
}

if (glow) {
  window.addEventListener('pointermove', (event) => {
    glow.style.left = event.clientX + 'px';
    glow.style.top = event.clientY + 'px';
  }, { passive: true });
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.16 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const element = entry.target;
    const target = Number(element.dataset.target || 0);
    let current = 0;
    const step = Math.max(1, Math.ceil(target / 34));
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      element.textContent = current;
    }, 28);
    counterObserver.unobserve(element);
  });
}, { threshold: 0.6 });
document.querySelectorAll('.counter').forEach(el => counterObserver.observe(el));

function setDateTheme() {
  const now = new Date();
  const month = now.getMonth() + 1;
  const day = now.getDate();

  const fixedThemes = [
    { month: 12, from: 1, to: 31, cls: 'theme-christmas', text: 'Temporada de fin de año: programe mantenimiento preventivo antes de cierres operativos.' },
    { month: 7, from: 15, to: 22, cls: 'theme-colombia', text: 'Mes de Colombia: servicio técnico profesional en Bogotá.' },
    { month: 1, from: 1, to: 15, cls: 'theme-special', text: 'Inicio de año: ideal para programar mantenimiento preventivo.' }
  ];

  // Fechas especiales editables. Para activar modo partido, agregue fechas reales en formato YYYY-MM-DD.
  const specialDates = {
    // '2026-06-15': { cls: 'theme-colombia', text: 'Modo partido: apoyamos a Colombia y mantenemos sus equipos en operación.' },
    // '2026-07-20': { cls: 'theme-colombia', text: 'Colombia presente: servicio técnico con cumplimiento y calidad.' }
  };

  const iso = now.toISOString().slice(0, 10);
  const special = specialDates[iso];
  const fixed = fixedThemes.find(item => item.month === month && day >= item.from && day <= item.to);
  const theme = special || fixed;

  if (!theme || !themeBox) return;
  document.body.classList.add(theme.cls);
  themeBox.textContent = theme.text;
  themeBox.classList.add('active');
  setTimeout(() => themeBox.classList.remove('active'), 8500);
}
setDateTheme();
