/**
 * main.js — Where Do Korean Students Go?
 * Handles: section scroll behavior, stat loading, iframe fallback detection
 */

/* ── Scroll-aware nav highlighting ── */
(function () {
  const sections = document.querySelectorAll('section[id], header[id]');
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

/* ── Stat cards: load from data/summary_stats.json when available ── */
async function loadSummaryStats() {
  try {
    const res = await fetch('assets/data/summary_stats.json');
    if (!res.ok) return; // silently skip if not built yet
    const stats = await res.json();

    const set = (id, val) => {
      const el = document.getElementById(id);
      if (el && val !== undefined) el.textContent = val;
    };

    set('stat-peak',    stats.peak_enrollment?.toLocaleString() ?? '—');
    set('stat-current', stats.current_enrollment?.toLocaleString() ?? '—');
    set('stat-change',  stats.pct_change_from_peak ?? '—');
    set('stat-rank',    stats.current_rank_among_sending_countries ?? '—');
  } catch (_) {
    // Data not yet generated — placeholders remain
  }
}

/* ── Iframe fallback: show placeholder div if iframe fails to load ── */
function setupIframeFallbacks() {
  document.querySelectorAll('.chart-wrapper iframe').forEach((iframe) => {
    const placeholder = iframe.nextElementSibling;
    if (!placeholder || !placeholder.classList.contains('viz-placeholder')) return;

    // Show placeholder by default, hide when iframe loads
    iframe.style.display = 'none';
    placeholder.style.display = 'block';

    iframe.addEventListener('load', () => {
      try {
        // Check if iframe loaded a real document (same-origin only)
        const doc = iframe.contentDocument || iframe.contentWindow.document;
        if (doc && doc.body && doc.body.innerHTML.trim() !== '') {
          iframe.style.display = 'block';
          placeholder.style.display = 'none';
        }
      } catch (_) {
        // Cross-origin or failed load — keep placeholder
      }
    });

    iframe.addEventListener('error', () => {
      iframe.style.display = 'none';
      placeholder.style.display = 'block';
    });
  });
}

/* ── Static image fallback ── */
function setupImageFallbacks() {
  document.querySelectorAll('.chart-wrapper img').forEach((img) => {
    img.addEventListener('error', () => {
      img.style.display = 'none';
      // Insert placeholder if not already there
      if (!img.nextElementSibling || !img.nextElementSibling.classList.contains('viz-placeholder')) {
        const ph = document.createElement('div');
        ph.className = 'viz-placeholder';
        ph.innerHTML = `<p>📊 Static figure — coming in Phase 4</p><p style="font-size:0.85rem;">${img.alt}</p>`;
        img.parentNode.insertBefore(ph, img.nextSibling);
      }
    });
    // Trigger check if already broken
    if (img.complete && img.naturalWidth === 0) img.dispatchEvent(new Event('error'));
  });
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
  setupIframeFallbacks();
  setupImageFallbacks();
  setupSmoothScroll();
});
