# Menu CSVs

One CSV per tab of the Google Sheet "Duke's Seafood — Website Menus (LIVE)", re-pulled from the live dukesseafood.com menus on November 11, 2026. `_menus.csv` is the hub tab.

These files serve two purposes:

1. **Updating the sheet.** In each tab, select all and paste the matching CSV, or use File > Import > Replace current sheet. Tab names must match the file names exactly. Production picks up the change within an hour (ISR).
2. **The code fallback.** `lib/menus.js` is generated from these files. After editing a CSV, run `python3 scripts/menus-from-csv.py` and commit both.

## Before pasting

- A few items have blank descriptions because the live wording couldn't be copied exactly: Chilled Prawn Cocktail Veracruz, Dungeness Crab & Prawn Louie Louie, Chowder Loaded Fries, and most of Chef Bill's Specials. Copy them from the current menu PDFs.
- `specials.csv` is the August 2026 Chef Bill's Specials set, the newest one on the live site. Confirm it's still current.
- `gluten-free-menu.csv` lists only items Duke's itself marks GF on its live menus. The live gluten-free menu page currently returns an error.
- The GF flags in `dessert-menu.csv` (Sorbet, Carrot Cake) come from Duke's live dessert menu. The sheet had no GF flags on desserts.
