# Duke's Seafood shop theme (shop.dukesseafood.com)

Shopify's Dawn 16.1.1 reference theme with a Duke's brand layer, so the shop matches the dukesseafood.com rebuild. Dawn's license is in `LICENSE.md`.

## What's Duke's-specific

| File | What it does |
|---|---|
| `assets/dukes.css` | Brand layer loaded after Dawn's `base.css`: tokens, type, buttons, header nav, product cards, Duke's sections |
| `snippets/dukes-fonts.liquid` | Self-hosted Newsreader, Geist and JetBrains Mono (OFL 1.1), the same fonts as the main site |
| `snippets/dukes-wordmark.liquid` | Logo plus the "Wild Pacific Seafood · Since 1977" tagline, shown when no logo is uploaded |
| `sections/dukes-hero.liquid` | Homepage hero with a two-part headline whose second part is set in brass italic |
| `sections/dukes-products.liquid` | Product grid for any collection, or all products if none is chosen |
| `sections/dukes-band.liquid` | Dark callout band, defaulting to the gift card phone line |
| `sections/dukes-footer.liquid` | Footer matching the main site, with links edited as "Label \| URL" lines |
| `config/settings_data.json` | Duke's color schemes (cream, ink, brass), square buttons, 1240px width |
| `sections/header-group.json`, `footer-group.json`, `templates/index.json` | Centered logo header, Duke's footer, homepage layout |
| `layout/theme.liquid`, `sections/header.liquid` | Small marked edits (search for "Duke's") that load the brand layer, set the favicon and point the logo at dukesseafood.com |

## Install (non-destructive)

1. Shopify admin > Online Store > Themes > Add theme > Upload zip file, then choose `dukes-shop-theme.zip`. It installs unpublished, and the current theme stays live.
2. Click Customize to preview it with the real products and cart.
3. Navigation: the header uses the store's existing **Main menu** (Online Store > Navigation). Update its links there; the theme doesn't need to change.
4. Publish when it looks right. To roll back, publish the previous theme again.

## Rebuild the zip

From this folder: `zip -qr ../dukes-shop-theme.zip assets config layout locales sections snippets templates`

## Theme Check

The Duke's files pass Shopify Theme Check with no errors. The nine remaining warnings come from Dawn's own stock files.
