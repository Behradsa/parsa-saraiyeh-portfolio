"""Clean URLs: /, /de/, /carriot, /de/carriot … instead of index.html / carriot.html / m.html."""
import re, sys
PUB = sys.argv[1].rstrip('/') + '/'
PAGES = ['index', 'm', 'carriot', 'snapptrip', 'omid', 'homano']
def clean(lang, name):
    pre = '/de/' if lang == 'de' else '/'
    return pre if name in ('index', 'm') else pre + name
for sub, lang in (('', 'en'), ('de/', 'de')):
    for p in PAGES:
        f = PUB + sub + p + '.html'; s = open(f, encoding='utf-8').read()
        def href(m):
            attr, path, frag = m.group(1), m.group(2), m.group(3) or ''
            if path.startswith('../'): l, n = 'en', path[3:-5]
            elif path.startswith('de/'): l, n = 'de', path[3:-5]
            else: l, n = lang, path[:-5]
            if n not in PAGES: return m.group(0)
            return '%s="%s%s"' % (attr, clean(l, n), frag)
        s = re.sub(r'\b(href)="((?:\.\./|de/)?[a-z]+\.html)(#[^"]*)?"', href, s)
        # absolute URLs in canonical / hreflang / og:url
        s = re.sub(r'https://parsa-sa\.com/(de/)?([a-z]+)\.html', lambda m: 'https://parsa-sa.com' + clean('de' if m.group(1) else 'en', m.group(2)), s)
        s = s.replace('https://parsa-sa.com/design-system-case-study/index.html', 'https://parsa-sa.com/design-system-case-study/')
        s = s.replace('/design-system-case-study/index.html?lang=de', '/design-system-case-study/?lang=de')
        # desktop/mobile switch: going back to desktop lands on the folder, not index.html
        s = s.replace("location.replace('index.html'+location.hash)", "location.replace('./'+location.hash)")
        open(f, 'w', encoding='utf-8').write(s)
print('urls cleaned')
