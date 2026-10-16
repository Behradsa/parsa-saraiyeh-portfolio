import asyncio, os
from playwright.async_api import async_playwright
SC='/tmp/claude-0/-home-claude/c06c42a9-f612-5d30-b91e-47dfb4222301/scratchpad/'
F=SC+'fonts/node_modules/@fontsource/'
IMG='/home/claude/parsa-site/images/'
OUT=SC+'repo/public/og/'; os.makedirs(OUT,exist_ok=True)
FONTS=f"""@font-face{{font-family:IT;font-weight:700;src:url(file://{F}inter-tight/files/inter-tight-latin-700-normal.woff2)}}
@font-face{{font-family:IT;font-weight:500;src:url(file://{F}inter-tight/files/inter-tight-latin-500-normal.woff2)}}
@font-face{{font-family:JB;font-weight:400;src:url(file://{F}jetbrains-mono/files/jetbrains-mono-latin-400-normal.woff2)}}
*{{margin:0;box-sizing:border-box}} body{{width:1200px;height:630px;overflow:hidden;background:#f8f7f3;font-family:IT}}"""
HOME=f"""<style>{FONTS}
.c{{position:absolute;inset:24px;border-radius:32px;background:#0a0a0a;overflow:hidden}}
.p{{position:absolute;right:0;top:0;bottom:0;width:520px;background:url(file://{IMG}d67c2682f9365d8db8a1feac3bb0d9b7.png) center 20%/cover}}
.f{{position:absolute;right:0;top:0;bottom:0;width:640px;background:linear-gradient(90deg,#0a0a0a 0%,#0a0a0a 18%,rgba(10,10,10,0) 60%)}}
.t{{position:absolute;left:56px;top:56px;bottom:56px;display:flex;flex-direction:column;justify-content:space-between;color:#f8f7f3}}
.k{{font-family:JB;font-size:18px;letter-spacing:.12em;color:rgba(248,247,243,.7);display:flex;align-items:center;gap:12px}}
.k i{{width:9px;height:9px;border-radius:9px;background:#ef3411;display:inline-block}}
h1{{font-size:104px;line-height:.92;letter-spacing:-.04em;font-weight:700}}
sup{{font-size:.3em;vertical-align:top;position:relative;top:.25em;font-weight:500}}
.r{{font-size:30px;font-weight:500;letter-spacing:-.01em;color:#f8f7f3;margin-top:22px}}
.u{{font-family:JB;font-size:18px;letter-spacing:.06em;color:rgba(248,247,243,.6)}}</style>
<div class="c"><div class="p"></div><div class="f"></div><div class="t"><div class="k"><i></i>PORTFOLIO</div>
<div><h1>Parsa<sup>™</sup><br>Saraiyeh</h1><div class="r">Product Designer (UI/UX)</div></div><div class="u">parsa-sa.com · Oldenburg, Germany</div></div></div>"""
def CASE(img,title,pos='center'):
    return f"""<style>{FONTS}
.c{{position:absolute;inset:24px;border-radius:32px;overflow:hidden;background:#0a0a0a url(file://{IMG}{img}) {pos}/cover}}
.g{{position:absolute;inset:0;background:linear-gradient(0deg,rgba(10,10,10,.82) 0%,rgba(10,10,10,.35) 38%,rgba(10,10,10,0) 62%)}}
.t{{position:absolute;left:52px;right:52px;bottom:46px;color:#f8f7f3;display:flex;align-items:flex-end;justify-content:space-between}}
.k{{font-family:JB;font-size:17px;letter-spacing:.12em;color:rgba(248,247,243,.8);display:flex;align-items:center;gap:12px;margin-bottom:14px}}
.k i{{width:9px;height:9px;border-radius:9px;background:#ef3411;display:inline-block}}
h1{{font-size:84px;line-height:.95;letter-spacing:-.035em;font-weight:700}}
.u{{font-size:24px;font-weight:500;color:rgba(248,247,243,.85)}} sup{{font-size:.34em;vertical-align:top;position:relative;top:.2em}}</style>
<div class="c"><div class="g"></div><div class="t"><div><div class="k"><i></i>CASE STUDY</div><h1>{title}</h1></div><div class="u">Parsa Saraiyeh<sup>™</sup></div></div></div>"""
JOBS=[('home',HOME),('carriot',CASE('da2147c5ed9dd7e55ce78772d9486217.jpg','Carriot.')),('snapptrip',CASE('054b12a001750f685043034c3a733c6d.jpg','Snapp!Trip.')),
      ('omid',CASE('456dead309bc993a951a23307b04c25c.jpg','Omid Analyzer.')),('homano',CASE('45ea7482d6c9629e8ddbce8ddf3ffaa8.jpg','Homano.')),('nikandish',CASE('43cc5da78576a8bece42543119cd8fe5.jpg','NikAndish.')),('nebulox',CASE('1770a11960f065ba01470f0292f12e7b.jpg','Nebulox.'))]
async def main():
  async with async_playwright() as p:
    b=await p.chromium.launch()
    pg=await b.new_page(viewport={'width':1200,'height':630})
    for n,h in JOBS:
      open(SC+'og/'+n+'.html','w').write('<!doctype html><meta charset=utf-8>'+h); await pg.goto('file://'+SC+'og/'+n+'.html'); await pg.wait_for_timeout(800)
      await pg.screenshot(path=OUT+n+'.jpg',type='jpeg',quality=86)
    await b.close()
asyncio.run(main())
for n,_ in JOBS: print(n, os.path.getsize(OUT+n+'.jpg'))
