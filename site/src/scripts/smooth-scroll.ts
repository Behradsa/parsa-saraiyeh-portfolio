// Smooth mouse-wheel scrolling (eases toward the target instead of jumping).
// Touch, trackpad side-swipes, keyboard and zoom are left alone.
import { reduceMotion, clamp } from './motion';

export function initSmoothScroll() {
  if (reduceMotion()) return;
  const root = document.documentElement;
  let cur = scrollY, tgt = cur, running = false;
  const maxY = () => Math.max(0, root.scrollHeight - innerHeight);
  const loop = () => {
    cur += (tgt - cur) * 0.1;
    if (Math.abs(tgt - cur) < 0.5) { cur = tgt; running = false; }
    scrollTo(0, cur);
    if (running) requestAnimationFrame(loop);
  };
  addEventListener('wheel', (e) => {
    if (e.ctrlKey || maxY() < 2 || Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;
    // let scrollable boxes inside the page (menus, iframes) handle their own wheel
    if ((e.target as Element).closest?.('[data-own-scroll]')) return;
    e.preventDefault();
    const d = e.deltaY * (e.deltaMode === 1 ? 40 : e.deltaMode === 2 ? innerHeight : 1);
    if (!running) { cur = scrollY; tgt = cur; }
    tgt = clamp(tgt + d, 0, maxY());
    if (!running) { running = true; requestAnimationFrame(loop); }
  }, { passive: false });
  addEventListener('scroll', () => { if (!running) cur = tgt = scrollY; }, { passive: true });
}
