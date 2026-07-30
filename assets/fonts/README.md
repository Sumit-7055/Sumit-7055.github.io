# Fonts

The site loads **Space Grotesk**, **IBM Plex Sans** and **IBM Plex Mono** from
Google Fonts via the `<link>` tags in `index.html` — the same way the original
site did. Nothing needs to live in this folder for the site to work.

## Optional: self-host instead

Self-hosting removes the third-party request and makes the site fully offline.

1. Download the families from
   [fonts.google.com](https://fonts.google.com) (or `google-webfonts-helper`)
   and drop the `.woff2` files here, e.g.
   `space-grotesk-700.woff2`, `ibm-plex-sans-400.woff2`, `ibm-plex-mono-400.woff2`.
2. Delete the three Google Fonts `<link>` tags from `index.html`.
3. Add one `@font-face` per file to the **top** of `assets/css/typography.css`:

```css
@font-face {
  font-family: 'IBM Plex Sans';
  src: url('../fonts/ibm-plex-sans-400.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
```

The `--font-body` / `--font-display` / `--font-mono` variables in
`variables.css` already point at these family names, so no other file changes.
