# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **static HTML presentation website** for an LMS (Learning Management System) project proposal for Ru.di SNC, a consulting firm focused on HACCP food safety and workplace safety training. The site showcases project features, development roadmap, and interactive mockups/demos.

## Tech Stack

- **Vanilla HTML/CSS/JavaScript** (no build system)
- **TailwindCSS** via CDN
- **Material Icons** (outlined + symbols)
- Tab-based navigation with dynamic content loading

## Project Structure

```
├── index.html           # Main entry point with header, nav, footer
├── env.json             # Configuration (expiration date, analysis status)
├── assets/
│   ├── css/styles.css   # Custom styles, brand color (#FCD415)
│   └── js/
│       ├── main.js      # Tab click handlers
│       └── tabs.js      # Content loading and tab-specific initialization
└── views/               # Tab content loaded dynamically via fetch()
    ├── overview-content.html   # Project overview, features, workflow
    ├── analysis-content.html   # Development roadmap (5 sprint plan)
    └── demo-content.html       # UI mockups (admin, client, mobile)
```

## Development

**No build step required.** Open `index.html` directly in a browser or use any local server:

```bash
# Python
python -m http.server 8000

# Node.js (if npx available)
npx serve
```

Note: Content loading requires a server due to fetch() for view files.

## Key Architecture Notes

- **Expiration system**: `env.json` controls `analysisExpired` flag and `expirationDate`. When expired, main content is replaced with a contact message.
- **Tab content loading**: Views are loaded on-demand via `loadTabContent()` in both `index.html` (inline) and `tabs.js`. Content is cached after first load.
- **Brand color**: `#FCD415` (yellow) used throughout, defined as CSS variable `--brand-color`.
- **Italian language**: All content is in Italian.

## Content Files in `.claude/`

The `.claude/` directory contains reference documents (XML invoices, Excel exports, PDFs) used for project context. These are not part of the website itself.
