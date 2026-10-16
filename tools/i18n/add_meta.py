"""Share previews (Open Graph / Twitter) + meta description for every page in repo/public."""
import re, sys, os, html
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from de_strings import DE
PUB = sys.argv[1].rstrip('/') + '/'
BASE = 'https://parsa-sa.com/'
HOME_EN = 'Product designer in Oldenburg, Germany. Brand, interfaces and design systems for products in fintech, logistics, travel and real estate.'
HOME_DE = 'Produktdesigner in Oldenburg. Marken, Interfaces und Designsysteme für Produkte aus Fintech, Logistik, Reisen und Immobilien.'
CASES = {
 'carriot': ('Carriot', 'A cloud-based last-mile delivery and dispatch platform — I rebuilt its brand and redesigned the platform its dispatchers run the fleet from.'),
 'snapptrip': ('Snapp!Trip', 'Iran’s online travel platform — hotels, flights, trains and buses — inside the Snapp Group. I made its weekly marketing output for three years, and built the brand book it never had.'),
 'omid': ('Omid Analyzer', 'A brand for Omid Financial Group, who have run algorithmic trading and market-making in Iran’s capital market since 2015 — built to read in Persian and Latin at once.'),
 'homano': ('Homano', 'A platform for buying a share of a flat while it is still being built. I designed its brand, its website and the investor panel, in Persian, right to left.'),
}
def block(title, desc, url, img, alt, lang):
    e = lambda s: html.escape(s, quote=True)
    loc, alt_loc = ('de_DE', 'en_US') if lang == 'de' else ('en_US', 'de_DE')
    return ('<!--og-->'
        f'<meta name="description" content="{e(desc)}">'
        '<meta property="og:type" content="website"><meta property="og:site_name" content="Parsa Saraiyeh">'
        f'<meta property="og:title" content="{e(title)}"><meta property="og:description" content="{e(desc)}">'
        f'<meta property="og:url" content="{url}"><meta property="og:image" content="{BASE}og/{img}.jpg">'
        '<meta property="og:image:width" content="1200"><meta property="og:image:height" content="630">'
        f'<meta property="og:image:alt" content="{e(alt)}">'
        f'<meta property="og:locale" content="{loc}"><meta property="og:locale:alternate" content="{alt_loc}">'
        '<meta name="twitter:card" content="summary_large_image">'
        f'<meta name="twitter:title" content="{e(title)}"><meta name="twitter:description" content="{e(desc)}">'
        f'<meta name="twitter:image" content="{BASE}og/{img}.jpg">'
        '<!--/og-->')
def inject(path, meta, title=None):
    s = open(path, encoding='utf-8').read()
    s = re.sub(r'<!--og-->.*?<!--/og-->', '', s, flags=re.S)
    s = re.sub(r'<meta name="description"[^>]*>', '', s)
    if title: s = re.sub(r'<title>.*?</title>', '<title>%s</title>' % html.escape(title, quote=False), s, count=1, flags=re.S)
    s = s.replace('</title>', '</title>' + meta, 1)
    open(path, 'w', encoding='utf-8').write(s)
for lang, sub in (('en', ''), ('de', 'de/')):
    t = 'Parsa Saraiyeh — Product Designer (UI/UX)' if lang == 'en' else 'Parsa Saraiyeh – Product Designer (UI/UX)'
    d = HOME_EN if lang == 'en' else HOME_DE
    for p in ('index', 'm'):
        inject(PUB + sub + p + '.html', block(t, d, BASE + sub, 'home', 'Parsa Saraiyeh, Product Designer (UI/UX)', lang), t)
    for p, (name, en) in CASES.items():
        desc = en if lang == 'en' else DE.get(en, en)
        tt = f'{name} — Case study by Parsa Saraiyeh' if lang == 'en' else f'{name} – Case Study von Parsa Saraiyeh'
        inject(PUB + sub + p + '.html', block(tt, desc, BASE + sub + p + '.html', p, f'{name} case study', lang))
# pages outside the new site
inject(PUB + 'design-system-case-study/index.html',
       block('NikAndish — Design system case study by Parsa Saraiyeh', 'Defining three brands, unified by one system: a scalable multi-brand design system with semantic tokens and shared components.', BASE + 'design-system-case-study/index.html', 'nikandish', 'NikAndish case study', 'en'))
print('meta added')
