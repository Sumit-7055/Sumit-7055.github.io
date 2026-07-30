# Sumit Kumar — Portfolio

A hand-written static site. No build step, no framework, no package manager.
Open `index.html` in a browser and it runs.

---

## Folder structure

```
portfolio/
├── index.html                  # All page content (the only HTML file)
├── README.md
└── assets/
    ├── css/
    │   ├── variables.css       # Design tokens: colours, fonts, layout sizes
    │   ├── reset.css           # Box-sizing, margins, selection colour
    │   ├── typography.css      # Fonts, headings, links, <strong>
    │   ├── layout.css          # Page shell, header, sections, grids
    │   ├── components.css      # Buttons, cards, chips, terminal, form…
    │   ├── utilities.css       # Keyframes, scroll-reveal states, a11y helpers
    │   └── responsive.css      # All breakpoints (loaded last on purpose)
    ├── js/
    │   ├── utils.js            # Tiny query helpers on window.Portfolio
    │   ├── theme.js            # Dark / light toggle
    │   ├── animations.js       # Scroll reveal (IntersectionObserver)
    │   ├── contact-form.js     # mailto: composer for the contact form
    │   └── main.js             # Entry point — boots the three features
    ├── images/
    │   └── profile.jpg         # Profile photo
    ├── documents/
    │   └── resume.pdf          # Downloadable résumé
    ├── svg/
    │   └── favicon.svg         # Browser tab icon
    └── fonts/
        └── README.md           # How to self-host the fonts (optional)
```

---

## How to change things

| I want to…                     | Edit this                                                     |
| ------------------------------ | ------------------------------------------------------------- |
| Replace my photo               | Overwrite `assets/images/profile.jpg` (keep the name)         |
| Replace my résumé              | Overwrite `assets/documents/resume.pdf` (keep the name)       |
| Change any wording             | `index.html`                                                  |
| Change a colour                | `assets/css/variables.css` — one value updates the whole site |
| Change the accent green        | `--accent` and `--accent-soft` in `variables.css`             |
| Adjust spacing / a component   | `assets/css/components.css` or `layout.css`                   |
| Adjust mobile behaviour        | `assets/css/responsive.css`                                   |
| Change the contact email       | `RECIPIENT` at the top of `assets/js/contact-form.js`         |
| Add a section                  | Copy an existing `<section class="section">` block in `index.html` |

Photo and résumé are referenced by path only, so swapping the file is the
entire job — no code changes, no encoded strings to edit.

---

## Conventions

- **CSS**: plain classes, no preprocessor, no utility framework. Load order in
  `index.html` is the cascade: tokens → reset → typography → layout →
  components → utilities → responsive. Keep it.
- **Naming**: components use their real name (`.project-card`, `.skill-card`,
  `.contact-form`); variants use a `--modifier` suffix (`.chip--sm`,
  `.section-title--contact`).
- **JS**: classic scripts, no modules, so the site also works when opened from
  the file system. Each file registers one function on `window.Portfolio`;
  `main.js` calls them.
- **JS hooks are `data-` attributes** (`data-reveal`, `data-theme-toggle`,
  `data-contact-form`, `data-submit-button`) so renaming a CSS class never
  breaks behaviour.

---

## Behaviour notes

- **Theme** — `data-theme` on `<html>` (`dark` by default, set in `index.html`).
  All colours are variables, so nothing else knows about the theme.
- **Scroll reveal** — elements marked `data-reveal` fade up once on first view.
  The hidden state is added by JavaScript, so content stays visible if JS fails.
  The reveal animates the `translate` property while card hovers use
  `transform`, so the two never fight.
- **Contact form** — no backend; it composes a `mailto:` link. Swap the body of
  `handleSubmit` in `contact-form.js` to post to a form service instead.

---

## Deploying

Any static host. For GitHub Pages, publish the **contents** of this folder at
the repo root (so `index.html` sits at the top level), then
Settings → Pages → Source: `main` / `(root)`.
