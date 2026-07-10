# Alila Services — Website

A multi-page marketing + shop site for **Alila Services**, a custom 3D printing studio. Built as plain HTML/CSS/JS (no build step, no framework) so it can be cloned directly into GoHighLevel's page builder.

## Pages

| Page | File |
|---|---|
| Home | `index.html` |
| Our Work (portfolio gallery, filterable) | `our-work.html` |
| Shop (product showcase) | `shop.html` |
| About | `about.html` |
| The Process | `process.html` |
| Contact | `contact.html` |

Shared assets live in `assets/css/style.css`, `assets/js/main.js`, and `assets/img/`.

## Brand

Colors, fonts, and layout are matched to the provided Alila Services brand reference (cream background, navy/maroon/olive/dusty-blue accents, Baloo 2 headings + Inter body). CSS variables are defined at the top of `assets/css/style.css` under `:root` if you need to tweak them.

**Logo files are placeholders.** `assets/img/logo-mark-maroon.svg`, `logo-mark-navy.svg`, `logo-wordmark.svg`, and `favicon.svg` are simplified recreations of the real Alila mark (circle + cross), built because the original exported logo files couldn't be pulled from the chat into this repo. Before final import, replace these files (same filenames, so nothing else needs to change) with the real exported logo assets for pixel-perfect branding.

## Deploying + importing into GoHighLevel

GoHighLevel doesn't accept raw code as a native import. The standard workflow:

1. **Host the site somewhere public first.** Any static host works — GitHub Pages, Netlify, Vercel, Cloudflare Pages, etc. Since there's no build step, you can deploy this repo as-is (root = site root).
2. **In GoHighLevel:** Sites → Websites (or Funnels) → **Clone from URL** (sometimes labeled "Import Website"). Point it at your deployed URL, one page at a time if it doesn't crawl the whole site automatically.
3. GHL pulls in the visual HTML/CSS as editable sections/rows in its builder. You'll then want to:
   - Swap the **Contact** form (`contact.html`, and the embedded form on `index.html`) for a native GHL Form/Survey element so submissions flow into your GHL contacts + pipelines.
   - Swap the **Shop** page's "Buy Now" buttons for GHL's native Products/Payments (or a Stripe/PayPal payment link). The current buttons are placeholders — GHL's URL clone only captures layout, not backend cart logic, so no e-commerce is functional until you wire this up inside GHL.
   - Point social icons (Instagram/TikTok/Facebook) in the header/footer to your real profile URLs.

## Local preview

No build step required — just open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.
