/**
 * main.js — Where Do Korean Students Go?
 * Handles: scroll-aware nav, stat card loading, smooth scroll.
 * Figures are now self-contained inside website/ — no fallback hiding needed.
 */

/* ── Scroll-aware nav highlighting ── */
(function () {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('nav a[href^="#"]');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navLinks.forEach((link) => {
            link.classList.toggle(
              'nav-active',
              link.getAttribute('href') === `#${entry.target.id}`
            );
          });
        }
      });
    },
    { rootMargin: '-40% 0px -55% 0px' }
  );

  sections.forEach((s) => observer.observe(s));
})();

/* ── Stat cards: load from assets/data/summary_stats.json ── */
async function loadSummaryStats() {
  try {
    const res = await fetch('assets/data/summary_stats.json');
    if (!res.ok) return;
    const stats = await res.json();

    const set = (id, val) => {
      const el = document.getElementById(id);
      if (el && val !== undefined) el.textContent = val;
    };

    set('stat-peak',    stats.peak_enrollment != null
                          ? stats.peak_enrollment.toLocaleString() : '75,065');
    set('stat-current', stats.current_enrollment != null
                          ? stats.current_enrollment.toLocaleString() : '42,293');
    set('stat-change',  stats.pct_change_from_peak ?? '−43.7%');
    set('stat-rank',    stats.current_rank_among_sending_countries ?? '#3');
  } catch (_) {
    /* Stats already hard-coded in HTML as fallback */
  }
}

/* ── Smooth scroll for anchor links ── */
function setupSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

/* ── Init ── */
document.addEventListener('DOMContentLoaded', () => {
  loadSummaryStats();
  setupSmoothScroll();
});
