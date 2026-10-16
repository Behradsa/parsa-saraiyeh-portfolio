"""Adds the EN/DE switch links to the built English pages and writes German copies into de/.
usage: python3 build_de.py <site dir>"""
import re, sys, os, html, json
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from de_strings import DE
SITE = sys.argv[1].rstrip('/') + '/'
PAGES = ['index', 'm', 'carriot', 'snapptrip', 'omid', 'homano']
BASE = 'https://parsa-sa.com/'
def url(lang, p):
    path = '' if p == 'index' else p + '.html'
    return BASE + ('de/' if lang == 'de' else '') + path
def norm(t): return ' '.join(t.split())
missing = {}
def tr(text, page):
    k = norm(html.unescape(text))
    if not k or not re.search('[A-Za-z]', k): return None
    if k in DE: return DE[k]
    missing.setdefault(k, set()).add(page); return None
def set_switch(s, page, lang):
    def fix(m):
        l = m.group(1)
        href = (page + '.html') if l == lang else (('de/' + page + '.html') if lang == 'en' else ('../' + page + '.html'))
        on = (l == lang)
        return '<a class="lsw-a%s" href="%s" data-lang="%s" hreflang="%s" lang="%s"%s>' % (' on' if on else '', href, l, l, l, ' aria-current="true"' if on else '')
    return re.sub(r'<a [^>]*data-lang="(en|de)"[^>]*>', fix, s)
def head_links(s, page, lang):
    links = ('<link rel="alternate" hreflang="en" href="%s"><link rel="alternate" hreflang="de" href="%s">'
             '<link rel="alternate" hreflang="x-default" href="%s"><link rel="canonical" href="%s">') % (url('en', page), url('de', page), url('en', page), url(lang, page))
    s = re.sub(r'<link rel="alternate" hreflang[^>]*>|<link rel="canonical"[^>]*>', '', s)
    return s.replace('<meta charset="utf-8">', '<meta charset="utf-8">' + links, 1)
def translate(s, page):
    s = s.replace('<html lang="en">', '<html lang="de">', 1)
    # About heading: words are separate spans (they light up one by one); translate the whole sentence
    def swr(m):
        words = re.findall(r'<span class="sw">(.*?)</span>', m.group(2))
        sent = html.unescape(' '.join(words))
        de = DE.get(norm(sent))
        if de is None:
            missing.setdefault(sent, set()).add(page); return m.group(0)
        return m.group(1) + ' '.join('<span class="sw">%s</span>' % html.escape(w, quote=False) for w in de.split()) + m.group(3)
    s = re.sub(r'(<h2 class="swr[^"]*"[^>]*>)(.*?)(</h2>)', swr, s, flags=re.S)
    # text outside <script>/<style>
    parts = re.split(r'(<script\b.*?</script>|<style\b.*?</style>)', s, flags=re.S)
    for i, part in enumerate(parts):
        if part.startswith('<script') or part.startswith('<style'): continue
        def txt(m):
            raw = m.group(1)
            if 'class="sw"' in raw: return m.group(0)
            t = tr(raw, page)
            if t is None: return m.group(0)
            lead = raw[:len(raw) - len(raw.lstrip())]; trail = raw[len(raw.rstrip()):]
            return '>' + lead + html.escape(t, quote=False) + trail + '<'
        part = re.sub(r'>([^<>]+)<', txt, part)
        def att(m):
            t = tr(m.group(2), page)
            return m.group(0) if t is None else '%s="%s"' % (m.group(1), html.escape(t, quote=True))
        part = re.sub(r'\b(alt|aria-label|title)="([^"]*)"', att, part)
        parts[i] = part
    s = ''.join(parts)
    # assets live one folder up
    for q in ('"', "'", '&quot;', '('):
        s = s.replace(q + 'images/', q + '../images/')
    return s

FIT = """<style>.pcc-pill .pcc-card, .pcc-cta.pcc-pill .pcc-card, .pcc-flow.pcc-pill .pcc-card { width: 206px; } .roll, .roll-i > span { white-space: nowrap; } @media (max-width: 819px) { body { -webkit-hyphens: auto; hyphens: auto; overflow-wrap: break-word; } }</style>
<script>
// German text runs longer: let fixed-height text blocks grow to fit instead of overflowing.
(function(){function fit(){var els=document.querySelectorAll('[style*="height:"]');for(var pass=0;pass<4;pass++){var changed=false;
for(var i=els.length-1;i>=0;i--){var e=els[i];if(/^(IMG|VIDEO|IFRAME|svg|H1)$/i.test(e.tagName))continue;
if(e.querySelector('.hrot,.odo,.roll,.mq,img.himg')||e.closest('.roll,.odo,.mnu,.pcc'))continue;
var need=e.scrollHeight-e.clientHeight;if(need>4){var cs=getComputedStyle(e);var h=cs.boxSizing==='border-box'?e.scrollHeight+(e.offsetHeight-e.clientHeight):e.scrollHeight-parseFloat(cs.paddingTop)-parseFloat(cs.paddingBottom);e.style.height=h+'px';changed=true;}}
if(!changed)break;}}
function go(){(document.fonts&&document.fonts.ready?document.fonts.ready:Promise.resolve()).then(function(){setTimeout(fit,60);});}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',go);else go();})();
</script>"""

os.makedirs(SITE + 'de', exist_ok=True)
for p in PAGES:
    en = open(SITE + p + '.html', encoding='utf-8').read()
    en = head_links(set_switch(en, p, 'en'), p, 'en')
    open(SITE + p + '.html', 'w', encoding='utf-8').write(en)
    de = head_links(set_switch(translate(en, p), p, 'de'), p, 'de').replace('</head>', FIT + '</head>', 1)
    open(SITE + 'de/' + p + '.html', 'w', encoding='utf-8').write(de)
KEEP = re.compile(r'^(Parsa|Saraiyeh|Parsa Saraiyeh|EN|DE|LinkedIn|LINKEDIN|in/parsa-saraiyeh|parsa\.saraiyeh@gmail\.com|.*\.(ir|com)|© 2026 .*|Steve Jobs|\[.*|“\[.*|.*\[which campaign.*|.*\[what each city.*|.*\[the rule.*|.*\[how many.*|“What stood out.*|“Parsa designed.*|Amirfarhad Kamaee|Dr\. Medai Abadi|Product Design Chapter Lead, Nikandish Group|Founder and CEO, Medai Digital|Universität Oldenburg|OFFIS|Carriot|Carriot\.|Snapp!Trip|Snapp!Trip\.|Omid|Omid Analyzer|Omid Analyzer\.|Homano|Homano\.|Tournova|RZ TV|Gamopedia|Maani Studio|Dice Maniacs|Tokenova|NikAndish|Nebulox|Visual Designer\.|Product Designer\.|CARRIOT|SNAPP TRIPP|OMID ANALYZER|HOMANO|Selected work\.)$')
rest = {k: sorted(v) for k, v in missing.items() if not KEEP.match(k)}
print('pages written; untranslated (left in English):', len(rest))
for k, v in rest.items(): print('  ', v, k[:110])
