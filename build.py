#!/usr/bin/env python3
"""
Patches the three Duke's preview HTML files for local Vercel hosting.
Run from the dukes-preview/ folder; expects the three source files to be there.
"""
import re
from pathlib import Path
import sys

HERE = Path(__file__).parent

# Each (input_filename, output_filename, swap_table)
# swap_table is a list of (search_pattern, replacement) - applied in order
# IMPORTANT: longer/more-specific patterns first so they don't get swallowed

# Internal preview pages we have designed:
INTERNAL_PAGES = {
    'index': 'index.html',
    'bellevue': 'Bellevue.html',     # capital B because the home file already references it that way
    'about': 'About.html',            # capital A for consistency
}

# Location URLs: route them all to index.html so clicks stay in-preview.
# Reasoning: Duke's reviewing the design shouldn't get yanked to the live site
# when they click "Tacoma" from the Bellevue page footer. Sending them to the
# homepage's location grid is a softer UX failure than a context switch to live.
LOCATION_URLS = [
    'https://dukesseafood.com/locations/bellevue/',
    'https://dukesseafood.com/locations/lake-union/',
    'https://dukesseafood.com/locations/green-lake/',
    'https://dukesseafood.com/locations/tacoma/',
    'https://dukesseafood.com/locations/southcenter/',
    'https://dukesseafood.com/locations/kent-station/',
    'https://dukesseafood.com/locations/',
]

# These stay pointing at the live site. Clicking them from the preview takes
# Duke's to their current website, which is a reasonable "compare to current"
# affordance during the review.
KEEP_LIVE = [
    'https://dukesseafood.com/menus/',
    'https://dukesseafood.com/menus/lunch-menu/',
    'https://dukesseafood.com/menus/specials/',
    'https://dukesseafood.com/menus/happy-hour-menu/',
    'https://dukesseafood.com/menus/dessert-menu/',
    'https://dukesseafood.com/menus/kids-menu/',
    'https://dukesseafood.com/blog',
    'https://dukesseafood.com/blog/dukes-partners-with-damsel-cellars-and-train-to-launch-foundation-to-save-wild-salmon/',
    'https://dukesseafood.com/recipes/',
    'https://dukesseafood.com/gift-cards/',
    'https://dukesseafood.com/frozen-chowders/',
    'https://dukesseafood.com/dukes-vip',
]


def patch_home(src_path, dest_path):
    """Patch the home Design export to wire its 'Read our history' button to about.html
    and lowercase the Bellevue.html references for consistent Vercel routing."""
    content = src_path.read_text(encoding='utf-8')
    swaps = 0

    # Wire 'Read our history' to about.html (lowercase for URL consistency)
    new_content = content.replace(
        '<a href=\\"#\\" class=\\"btn btn-ghost btn-sm\\">Read our history',
        '<a href=\\"about.html\\" class=\\"btn btn-ghost btn-sm\\">Read our history'
    )
    if new_content != content:
        swaps += 1
        content = new_content

    # Lowercase Bellevue.html references so URLs are consistent (/bellevue, /about, /index)
    count = content.count('Bellevue.html')
    if count:
        content = content.replace('Bellevue.html', 'bellevue.html')
        swaps += count

    # The home file's own wordmark/logo links to Home.html — point it at index instead.
    count = content.count('Home.html')
    if count:
        content = content.replace('Home.html', 'index.html')
        swaps += count

    dest_path.write_text(content, encoding='utf-8')
    return swaps


def patch_bellevue(src_path, dest_path):
    """Patch the Bellevue export to wire its location links into the preview."""
    content = src_path.read_text(encoding='utf-8')
    swaps = 0

    # The Bellevue page links to its own canonical URL (probably from a footer
    # or sibling location list). Self-link goes to itself.
    swaps += content.count('https://dukesseafood.com/locations/bellevue/')
    content = content.replace('https://dukesseafood.com/locations/bellevue/', 'bellevue.html')

    # Other location links and the generic /locations/ link route to index.html
    for url in [
        'https://dukesseafood.com/locations/lake-union/',
        'https://dukesseafood.com/locations/green-lake/',
        'https://dukesseafood.com/locations/tacoma/',
        'https://dukesseafood.com/locations/southcenter/',
        'https://dukesseafood.com/locations/kent-station/',
        'https://dukesseafood.com/locations/',
    ]:
        count = content.count(url)
        if count:
            swaps += count
            content = content.replace(url, 'index.html')

    # Lowercase any remaining Bellevue.html references (footer location list, etc.)
    count = content.count('Bellevue.html')
    if count:
        content = content.replace('Bellevue.html', 'bellevue.html')
        swaps += count

    # The Bellevue file's own wordmark/logo may link to Home.html
    count = content.count('Home.html')
    if count:
        content = content.replace('Home.html', 'index.html')
        swaps += count

    dest_path.write_text(content, encoding='utf-8')
    return swaps


def patch_about(src_path, dest_path):
    """Patch the About page (already mostly wired — just confirm)."""
    content = src_path.read_text(encoding='utf-8')
    swaps = 0
    # The About page already has logo->index.html and footer Bellevue link patched.
    # No further work needed; just copy through.
    dest_path.write_text(content, encoding='utf-8')
    return swaps


def main():
    files = {
        'Duke_s_Seafood_-_Home__standalone_.html': ('index.html', patch_home),
        'Duke_s_Seafood_-_Bellevue__standalone_.html': ('bellevue.html', patch_bellevue),
        'about.html': ('about.html', patch_about),
    }

    for src_name, (dest_name, fn) in files.items():
        src = HERE / src_name
        if not src.exists():
            print(f"SKIP: {src_name} not found in {HERE}")
            continue
        dest = HERE / dest_name
        # Skip self-copies
        if src == dest:
            print(f"  {src_name}  (kept as-is)")
            continue
        swaps = fn(src, dest)
        print(f"  {src_name}  ->  {dest_name}   ({swaps} swap{'s' if swaps != 1 else ''})")

    print("\nDone.  Run `vercel --prod` from this folder.")


if __name__ == '__main__':
    main()
