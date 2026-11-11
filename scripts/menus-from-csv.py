import csv, json
import os
ROOT=os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
D=os.path.join(ROOT,'migration','menus')
hub=list(csv.DictReader(open(f'{D}/_menus.csv')))
menus={}
for h in hub:
    groups=[]; idx={}
    for r in csv.DictReader(open(f"{D}/{h['slug']}.csv")):
        if r['section'] not in idx:
            idx[r['section']]=len(groups); groups.append({'title':r['section'],'items':[]})
        it={'name':r['item'],'price':r['price'],'desc':r['description']}
        if r['gf']: it['gf']=True
        groups[idx[r['section']]]['items'].append(it)
    menus[h['slug']]={'name':h['name'],'note':h['note'],'groups':groups}
H=[{'slug':h['slug'],'name':h['name'],'blurb':h['blurb']} for h in hub]
src=open(os.path.join(ROOT,'lib','menus.js')).read()
tail=src[src.index('// ---------------------------------------------------------------------------\n// Sheet-backed'):]
head='''// Menu hub + per-menu content: the STATIC FALLBACK for the Google Sheet
// ("Duke's Seafood: Website Menus (LIVE)"). The site normally reads the sheet;
// this copy only renders if the sheet read fails, so it has to stay complete.
//
// GENERATED from migration/menus/*.csv by scripts/menus-from-csv.py. Edit the
// CSVs (which are also what gets pasted into the sheet tabs), then regenerate.
// Source: live dukesseafood.com menus, re-pulled November 11, 2026.

export const MENU_HUB = '''+json.dumps(H,indent=2,ensure_ascii=False)+''';

export const MENUS = '''+json.dumps(menus,indent=2,ensure_ascii=False)+''';


'''
open(os.path.join(ROOT,'lib','menus.js'),'w').write(head+tail)
print('ok', {k:sum(len(g['items']) for g in v['groups']) for k,v in menus.items()})
