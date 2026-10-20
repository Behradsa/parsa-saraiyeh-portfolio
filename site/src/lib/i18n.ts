// Texts live in site/src/i18n/<lang>/*.json — one folder per language.
// This file only loads them and builds links between the language versions.
import site from '../data/site.json';
import enUi from '../i18n/en/ui.json';
import deUi from '../i18n/de/ui.json';
import enHome from '../i18n/en/home.json';
import deHome from '../i18n/de/home.json';

export const LANGS = ['en', 'de'] as const;
export type Lang = (typeof LANGS)[number];

const caseFiles = import.meta.glob('../i18n/*/cases/*.json', { eager: true, import: 'default' });

export function ui(lang: Lang) {
  return lang === 'de' ? deUi : enUi;
}

export function home(lang: Lang) {
  return lang === 'de' ? deHome : enHome;
}

export type Case = typeof import('../i18n/en/cases/carriot.json') & Record<string, any>;

export function caseStudy(lang: Lang, slug: string): Case {
  const data = caseFiles[`../i18n/${lang}/cases/${slug}.json`];
  if (!data) throw new Error(`Missing case study text: ${lang}/cases/${slug}.json`);
  return data as Case;
}

/** The case that follows `slug` in the project order (the last one wraps to the first). */
export function nextCase(slug: string) {
  const i = site.cases.indexOf(slug);
  return site.cases[(i + 1) % site.cases.length];
}

const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

/** Link to a page of this site: url('de', 'carriot') → /de/carriot, url('en') → / */
export function url(lang: Lang, page = '', hash = '') {
  const path = (lang === 'de' ? '/de/' : '/') + page;
  return BASE + path + (hash ? '#' + hash : '');
}

/** Full address, for canonical links and share previews. */
export function absUrl(lang: Lang, page = '') {
  return site.domain + url(lang, page);
}

/** Links to parts of the site that are not built here (NikAndish, the old app) — German gets ?lang=de. */
export function external(lang: Lang, href: string) {
  if (lang !== 'de' || !href.startsWith('/')) return href;
  const [path, hash] = href.split('#');
  return path + '?lang=de' + (hash !== undefined ? '#' + hash : '');
}

export function fill(template: string, values: Record<string, string>) {
  return template.replace(/\{(\w+)\}/g, (_, k) => values[k] ?? '');
}

export { site };
