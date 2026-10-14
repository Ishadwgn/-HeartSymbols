# Heart Symbols Tool Site (Phase 1: Hub & Full Site Shell)

A fast, static, accessible, copy-and-paste **Heart Symbols** hub and tool site built with pure HTML5, vanilla CSS, and lightweight vanilla JavaScript.

## Tech Architecture & Guarantees
- **Static & Fast:** Pure HTML5 + 1 CSS file (`/assets/style.css`) + 1 Vanilla JS file (`/assets/app.js`).
- **Zero Third-Party Requests:** No external fonts, no CDNs, no tracking scripts, no cookies, no analytics.
- **Search Engine Optimized:** Symbol grids are baked as static HTML for instant indexing; valid schema markup (`Organization`, `WebSite`, `WebPage`, `WebApplication`, `FAQPage`, `BreadcrumbList`).
- **Accessible (a11y):** Full keyboard navigation, ARIA live region toasts, high-contrast tokens for light/dark modes, screen-reader labels.
- **Resilient:** Fully usable with JavaScript disabled (static characters remain copyable manually).

---

## File Structure

```
/
├── index.html                     ← HOMEPAGE / HUB
├── about/index.html               ← About page
├── contact/index.html             ← Contact page
├── privacy-policy/index.html      ← Plain-English privacy policy
├── 404.html                       ← Custom 404 page (noindex)
├── assets/
│   ├── style.css                  ← Design system & styles (<15 KB)
│   ├── app.js                     ← Vanilla JS copy engine (<6 KB)
│   ├── favicon.svg                ← Inline rose heart SVG
│   └── og-image.png               ← 1200×630 Open Graph preview image
├── _templates/
│   └── spoke.html                 ← Reusable spoke page template (noindex)
├── robots.txt                     ← Crawler rules & sitemap reference
├── sitemap.xml                    ← XML sitemap with lastmod dates
└── README.md                      ← Documentation & 6-step spoke guide
```

---

## Configuration & Placeholders

The following `{{...}}` tokens are present across templates and can be replaced with production values:

1. `{{DOMAIN}}` — Canonical website URL without trailing slash (e.g., `https://example.com`)
2. `{{SITE_NAME}}` — Brand / website title (e.g., `HeartSymbols`)
3. `{{CONTACT_EMAIL}}` — Support email address (e.g., `hello@example.com`)
4. `{{AUTHOR_NAME}}` — Maintainer / author name in trust line (or remove if none)

---

## How to Add a Spoke Page in 6 Steps

When Phase 2 begins and supporting keywords are ready, follow this 6-step workflow to add a new spoke page in under 3 minutes:

### Step 1: Copy the Template
Duplicate `/_templates/spoke.html` into a new folder named after your target keyword slug:
```bash
# Example: for keyword "pink heart symbol"
mkdir pink-heart-symbol
cp _templates/spoke.html pink-heart-symbol/index.html
```

### Step 2: Remove the noindex Tag
Open `/{keyword-slug}/index.html` and delete this line near the top of the `<head>`:
```html
<meta name="robots" content="noindex,nofollow">
```

### Step 3: Fill Head & Schema Fields
Update the following metadata in `/{keyword-slug}/index.html`:
- `<title>`: Include your target spoke keyword and symbol.
- `<meta name="description">`: 1–2 sentence direct answer and copy call-to-action (≤ 155 characters).
- `<link rel="canonical">`: `{{DOMAIN}}/{keyword-slug}/`
- Open Graph & Twitter tags: title, description, URL.
- JSON-LD `<script type="application/ld+json">`: Update `BreadcrumbList`, `WebPage`, and `FAQPage` nodes with spoke-specific questions and exact answers.

### Step 4: Write the Body Content
- Ensure `<h1>` contains the spoke keyword (never "heart symbols" alone).
- First paragraph must answer the search intent immediately and include a natural link to the hub: `<a href="/">heart symbols</a>`.
- Populate the copy grid with only the symbols directly relevant to this spoke topic.
- Write 600–900 words of substantive copy organized into 3–5 `<h2>` sections (including at least one question-style `<h2>`).
- Populate 3–5 FAQs matching the schema entities word-for-word.
- Update the "Related guides" section with links to 2–3 sibling pages in the same topical cluster and 1 cross-cluster link.

### Step 5: Link from Homepage Hub & Unhide Explore Section
Open `/index.html`:
1. Find `<section class="content-section" id="explore" hidden>`.
2. Remove the `hidden` attribute so the section becomes visible: `<section class="content-section" id="explore">`.
3. Locate the matching cluster block (e.g., Cluster 1, 2, 3, or 4).
4. Uncomment the `<ul>` and add your new spoke link:
   ```html
   <li><a href="/pink-heart-symbol/">Pink Heart Symbol</a> — Meanings, Unicode codes, and copy-paste text pink hearts</li>
   ```

### Step 6: Update `sitemap.xml`
Add your new spoke URL to `sitemap.xml`:
```xml
<url>
  <loc>{{DOMAIN}}/{keyword-slug}/</loc>
  <lastmod>2026-10-14</lastmod>
</url>
```
