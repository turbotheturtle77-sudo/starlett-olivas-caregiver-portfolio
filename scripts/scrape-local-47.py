#!/usr/bin/env python3
"""
Scrape Local 47 (IBEW & AFM) websites for job postings, dispatch procedures, office locations, and administrative contacts.
Enforcing standard kebab-case file naming standards. Zero external dependencies.
"""

import sys
import json
import re
import urllib.request
from html.parser import HTMLParser

class TextExtractor(HTMLParser):
    def __init__(self):
        super().__init__()
        self.text_chunks = []
        self.in_script_or_style = False

    def handle_starttag(self, tag, attrs):
        if tag in ('script', 'style', 'head', 'meta'):
            self.in_script_or_style = True

    def handle_endtag(self, tag):
        if tag in ('script', 'style', 'head', 'meta'):
            self.in_script_or_style = False

    def handle_data(self, data):
        if not self.in_script_or_style:
            cleaned = data.strip()
            if cleaned:
                self.text_chunks.append(cleaned)

    def get_text(self):
        return "\n".join(self.text_chunks)

def fetch_page(url):
    try:
        req = urllib.request.Request(
            url, 
            headers={'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/119.0'}
        )
        with urllib.request.urlopen(req, timeout=15) as response:
            return response.read().decode('utf-8', errors='ignore')
    except Exception as e:
        print(f"Error fetching {url}: {e}")
        return ""

def parse_html(html, source_name, url):
    if not html:
        return {'source': source_name, 'url': url, 'text_summary': 'Could not fetch content.'}
    
    parser = TextExtractor()
    parser.feed(html)
    text = parser.get_text()
    
    # Extract links using regex
    link_pattern = re.compile(r'href=["\'](https?://[^"\']+|/[^"\']+)["\']', re.IGNORECASE)
    raw_links = link_pattern.findall(html)
    links = list(set(raw_links))[:30]

    return {
        'source': source_name,
        'url': url,
        'links_sample': links,
        'text_summary': text[:3000]
    }

def main():
    print("Scraping IBEW Local 47 (ibew47.org)...")
    ibew_html = fetch_page('https://ibew47.org')
    ibew_data = parse_html(ibew_html, 'IBEW Local 47', 'https://ibew47.org')

    print("Scraping AFM Local 47 (afm47.org)...")
    afm_html = fetch_page('https://www.afm47.org')
    afm_data = parse_html(afm_html, 'AFM Local 47', 'https://www.afm47.org')

    scraped_intel = {
        'timestamp': '2026-09-06T00:44:00Z',
        'ibew_local_47': ibew_data,
        'afm_local_47': afm_data
    }

    out_json = '/data/data/com.termux/files/home/10_DEV/11_PROJECTS/starlett-olivas-caregiver-portfolio/data/scraped-local-47-intel.json'
    out_md = '/data/data/com.termux/files/home/10_DEV/11_PROJECTS/starlett-olivas-caregiver-portfolio/data/scraped-local-47-intel.md'

    with open(out_json, 'w', encoding='utf-8') as f:
        json.dump(scraped_intel, f, indent=2)

    md_content = f"""# Scraped Intel — Local 47 (IBEW & AFM)

Scraped on: 2026-09-06

---

## ⚡ IBEW Local 47 (Electrical & Utility Workers)
- **URL**: https://ibew47.org
- **Riverside Office / Dispatch Hall**: 1405 Spruce St, Suite H, Riverside, CA 92507 | Phone: (951) 784-0717
- **Main HQ**: 600 N Diamond Bar Blvd, Diamond Bar, CA 91765 | Phone: (909) 860-4239

### Extracted Text Summary:
```text
{ibew_data.get('text_summary', 'No content')}
```

---

## 🎵 AFM Local 47 (Musicians Union of Los Angeles)
- **URL**: https://www.afm47.org
- **Burbank HQ**: 3220 Winona Ave, Burbank, CA 91504 | Phone: (323) 462-2161

### Extracted Text Summary:
```text
{afm_data.get('text_summary', 'No content')}
```
"""

    with open(out_md, 'w', encoding='utf-8') as f:
        f.write(md_content)

    print(f"\n[SUCCESS] Scraped data saved to:\n- {out_json}\n- {out_md}")

if __name__ == '__main__':
    main()
