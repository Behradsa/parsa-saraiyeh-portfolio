// Small helpers shared by the page scripts.
export const reduceMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
export const finePointer = () => window.matchMedia('(hover: hover) and (pointer: fine)').matches;
export const isMobile = () => window.matchMedia('(max-width: 819px)').matches;
export const clamp = (v: number, a: number, b: number) => Math.max(a, Math.min(b, v));
export const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);
export const $$ = <T extends Element = HTMLElement>(sel: string, root: ParentNode = document) =>
  Array.from(root.querySelectorAll<T>(sel as any)) as T[];

/** Run `fn` once per frame while the page scrolls or resizes. */
export function onScrollFrame(fn: () => void) {
  let ticking = false;
  const tick = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => { ticking = false; fn(); });
  };
  addEventListener('scroll', tick, { passive: true });
  addEventListener('resize', tick);
  fn();
}

/** Whether the page is long enough to scroll at all. */
export const pageScrolls = () => document.documentElement.scrollHeight - innerHeight >= 2;
