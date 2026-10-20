// Headings fill from grey, cards and text rise into place as they enter the screen.
// Elements opt in with the classes .rvh (heading colour), .rvu (rise) and .rv-watch (just gets .rv-in).
export function initReveal() {
  const els = document.querySelectorAll('.rvh, .rvu, .rv-watch');
  if (!els.length || !('IntersectionObserver' in window)) return;
  document.documentElement.classList.add('rv-js');
  const io = new IntersectionObserver((entries) => {
    for (const e of entries) {
      if (e.isIntersecting) { e.target.classList.add('rv-in'); io.unobserve(e.target); }
    }
  }, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' });
  els.forEach((el) => io.observe(el));
}
