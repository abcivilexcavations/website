# ABCivil Excavations Website

Static website for ABCivil Excavations, built with HTML5, CSS3 and vanilla JavaScript for deployment on GitHub Pages.

## Phase 1 contents

- Responsive homepage
- Sticky navigation and mobile menu
- Hero, trust, about, services, testimonial placeholder and quote CTA sections
- Optimised WebP images
- Placeholder pages for Phase 2
- Basic SEO metadata and accessibility features

## Project structure

```text
abcivil-website/
├── index.html
├── about.html
├── services.html
├── projects.html
├── contact.html
├── assets/
│   ├── css/style.css
│   ├── js/main.js
│   └── images/
├── robots.txt
├── sitemap.xml
├── ROADMAP.md
└── STYLEGUIDE.md
```

## Previewing the website

The simplest option is to open `index.html` in a browser. For a local web server:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Updating content

- Homepage text: edit `index.html`.
- Colours and layout: edit `assets/css/style.css`.
- Menu behaviour and scroll effects: edit `assets/js/main.js`.
- Images: replace files in `assets/images/`. Keep the same filename to avoid changing HTML.

## Important placeholders before launch

Search the code for these values and replace them:

- `Add phone number`
- `Add email address`
- `hello@example.com`
- `+61000000000`
- `example.com` in `robots.txt` and `sitemap.xml`

## Uploading through the GitHub website

1. Open the repository.
2. Select **Add file → Upload files**.
3. Drag the contents of this folder into GitHub.
4. In the commit message field, enter `Build Phase 1 homepage`.
5. Select **Commit directly to the main branch**.
6. Click **Commit changes**.

GitHub Pages will redeploy automatically after each commit to `main`.

## Suggested Phase 1 commit

```text
Build responsive Phase 1 homepage
```


## Brand assets

The master website logo files are stored in `assets/logos/`.

- `logo.svg` — primary logo for light backgrounds
- `logo-white.svg` — primary logo for dark backgrounds
- `icon.svg` — standalone excavator mark
- `favicon.ico`, `favicon.png` and `apple-touch-icon.png` — browser and device icons

Brand line: **EXCAVATIONS & CIVIL WORKS**
