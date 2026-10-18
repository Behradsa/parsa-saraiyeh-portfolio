/* Shared header for pages that are not part of the new static site
   (NikAndish case study, old React app / Nebulox).
   Same look as the case-study header: sticky, Parsa · label · Home · Projects · Contact · Resume · EN|DE.
   <script src="/site-header.js" data-label="NIKANDISH" data-hide="#root header" data-mode="nik"></script>
   data-mode="nik"  → the page has its own German; we press its DE button.
   data-mode="dict" → translate text with the JSON dictionary at data-dict. */
(function () {
  var me = document.currentScript;
  var cfg = {
    label: me.getAttribute('data-label') || '',
    hide: me.getAttribute('data-hide') || '',
    mode: me.getAttribute('data-mode') || '',
    dict: me.getAttribute('data-dict') || ''
  };
  var params = new URLSearchParams(location.search);
  var lang = params.get('lang') === 'de' ? 'de' : 'en';
  var CV = '/PARSA_SARAIYEH_2026-10-16.pdf';
  var MAIL = 'mailto:parsa.saraiyeh@gmail.com';
  var T = {
    en: { home: 'Home', projects: 'Projects', contact: 'Contact', resume: 'Resume', root: '/' },
    de: { home: 'Start', projects: 'Projekte', contact: 'Kontakt', resume: 'Lebenslauf', root: '/de/' }
  }[lang];

  function langUrl(l) {
    var p = new URLSearchParams(location.search);
    if (l === 'de') p.set('lang', 'de'); else p.delete('lang');
    var q = p.toString();
    return location.pathname + (q ? '?' + q : '') + location.hash;
  }

  var css = '' +
    (cfg.hide ? cfg.hide + '{display:none!important}' : '') +
    '.sh-hdr.sh-hdr{position:sticky;top:0;z-index:2147483000;height:72px;box-sizing:border-box;padding:0 60px;display:flex;align-items:center;justify-content:space-between;' +
    'background:rgba(248,247,243,.97);-webkit-backdrop-filter:saturate(1.4) blur(14px);backdrop-filter:saturate(1.4) blur(14px);border-bottom:1px solid #dcd8d1;' +
    "font-family:'Inter Tight',Inter,system-ui,-apple-system,'Segoe UI',sans-serif;color:#0a0a0a;-webkit-font-smoothing:antialiased}" +
    '.sh-hdr,.sh-hdr *{box-sizing:border-box;margin:0;padding:0;border:0;float:none;position:static;text-transform:none;font-style:normal;line-height:1;letter-spacing:normal}' +
    '.sh-hdr{position:sticky}' +
    '.sh-hdr a,.sh-hdr span{display:inline-flex;align-items:center;width:auto;height:auto;background:none}' +
    '.sh-hdr a{color:#0a0a0a;text-decoration:none}' +
    '.sh-hdr .sh-l{display:flex;align-items:center;gap:16px}' +
    '.sh-hdr .sh-logo{font-size:20px;font-weight:700;letter-spacing:-.02em}' +
    '.sh-hdr .sh-logo{align-items:flex-start}.sh-hdr .sh-tm{display:inline-block;font-size:9px;line-height:1;font-weight:600;margin:3px 0 0 0}' +
    '.sh-hdr .sh-bar{display:inline-block;width:1px;height:18px;background:#dcd8d1}' +
    ".sh-hdr .sh-lab{font-family:'JetBrains Mono',ui-monospace,Menlo,monospace;font-size:11px;letter-spacing:.08em;color:#6f6a61}" +
    '.sh-hdr .sh-nav{display:flex;align-items:center;gap:36px}' +
    '.sh-hdr .sh-nav>a{font-size:15px;font-weight:500;line-height:1}' +
    '.sh-hdr .sh-dot{display:inline-block;width:6px;height:6px;border-radius:999px;background:#ef3411;margin-left:5px;vertical-align:top}' +
    ".sh-hdr .sh-lsw{display:inline-flex;align-items:center;gap:2px;padding:3px;border:1px solid #dcd8d1;border-radius:999px;font-family:'JetBrains Mono',ui-monospace,Menlo,monospace;font-size:11px;line-height:1;letter-spacing:.06em}" +
    '.sh-hdr .sh-lsw a{display:inline-block;padding:5px 9px;border-radius:999px;color:#6f6a61!important}' +
    '.sh-hdr .sh-lsw a.on{background:#0a0a0a;color:#f8f7f3!important}' +
    '@media (max-width:819px){.sh-hdr.sh-hdr{height:60px;padding:0 20px}.sh-hdr .sh-bar,.sh-hdr .sh-lab,.sh-hdr .sh-c,.sh-hdr .sh-r{display:none}.sh-hdr .sh-nav{gap:20px}}';
  var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);
  if (!document.querySelector('link[href*="Inter+Tight"]')) {
    var lk = document.createElement('link'); lk.rel = 'stylesheet';
    lk.href = 'https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap';
    document.head.appendChild(lk);
  }

  function label() {
    if (cfg.label) return cfg.label;
    var h = location.hash.replace(/^#\/?/, '').split(/[/#?]/)[0];
    return (h || 'Archive').toUpperCase();
  }
  var hdr = document.createElement('div');
  hdr.setAttribute('role', 'banner');
  hdr.className = 'sh-hdr';
  function render() {
    hdr.innerHTML =
      '<div class="sh-l"><a class="sh-logo" href="' + T.root + '">Parsa<sup class="sh-tm">™</sup></a><span class="sh-bar"></span><span class="sh-lab">' + label() + '</span></div>' +
      '<div class="sh-nav" role="navigation">' +
      '<a href="' + T.root + '">' + T.home + '</a>' +
      '<a href="' + T.root + '#work">' + T.projects + '<span class="sh-dot"></span></a>' +
      '<a class="sh-c" href="' + T.root + '#contact">' + T.contact + '</a>' +
      '<a class="sh-r" href="' + CV + '" target="_blank" rel="noopener">' + T.resume + '</a>' +
      '<span class="sh-lsw" role="group" aria-label="' + (lang === 'de' ? 'Sprache' : 'Language') + '">' +
      '<a href="' + langUrl('en') + '" hreflang="en" lang="en"' + (lang === 'en' ? ' class="on" aria-current="true"' : '') + '>EN</a>' +
      '<a href="' + langUrl('de') + '" hreflang="de" lang="de"' + (lang === 'de' ? ' class="on" aria-current="true"' : '') + '>DE</a>' +
      '</span></div>';
  }
  render();
  function mount() { if (!hdr.parentNode) document.body.insertBefore(hdr, document.body.firstChild); }
  if (document.body) mount(); else document.addEventListener('DOMContentLoaded', mount);
  addEventListener('hashchange', render);
  if (lang === 'de') document.documentElement.lang = 'de';

  // German: the NikAndish page has its own translation behind its DE button
  if (lang === 'de' && cfg.mode === 'nik') {
    var tries = 0;
    (function press() {
      var b = Array.prototype.find.call(document.querySelectorAll('#root button, #root a, #root span'), function (el) {
        return el.textContent.trim() === 'DE' && !el.closest('.sh-hdr');
      });
      if (b) { b.click(); return; }
      if (++tries < 60) setTimeout(press, 100);
    })();
  }

  // German: dictionary-based text replacement for the old React pages
  if (lang === 'de' && cfg.mode === 'dict' && cfg.dict) {
    fetch(cfg.dict).then(function (r) { return r.json(); }).then(function (D) {
      var norm = function (s) { return s.replace(/\s+/g, ' ').trim(); };
      function tr(root) {
        var w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT), n;
        while ((n = w.nextNode())) {
          if (n.parentElement && n.parentElement.closest('script,style,.sh-hdr')) continue;
          var k = norm(n.nodeValue);
          if (k && D[k] && n.nodeValue.indexOf(D[k]) < 0) n.nodeValue = n.nodeValue.replace(n.nodeValue.trim(), D[k]);
        }
        Array.prototype.forEach.call((root.querySelectorAll ? root : document).querySelectorAll('img[alt]'), function (i) {
          var k = norm(i.alt); if (D[k]) i.alt = D[k];
        });
      }
      tr(document.body);
      var busy = false;
      new MutationObserver(function () {
        if (busy) return; busy = true;
        requestAnimationFrame(function () { tr(document.body); busy = false; });
      }).observe(document.body, { childList: true, subtree: true, characterData: true });
    }).catch(function () {});
  }

  // Links inside the page that still point at the old home page
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a[href]');
    if (!a || a.closest('.sh-hdr')) return;
    var h = a.getAttribute('href');
    if (/^https:\/\/parsa-sa\.com\/#\/?(#.*)?$/.test(h) || h === '#/' ) { e.preventDefault(); location.href = T.root; }
    else if (/#\/?#projects$/.test(h)) { e.preventDefault(); location.href = T.root + '#work'; }
    else if (/#\/?#contact/.test(h)) { e.preventDefault(); location.href = T.root + '#contact'; }
  }, true);
})();
