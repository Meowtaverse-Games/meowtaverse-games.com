# meowtaverse-games.com

The Meowtaverse Games website, built with Astro 5, Tailwind CSS 4, and
Tailwind Typography. All pages are static; no analytics or signup forms are used.

## Local development

Use Node.js 22 (22.12 or newer) and npm.

```sh
npm ci
npm run dev
```

To build and preview the production output:

```sh
npm run build
npm run preview
```

The generated site is in `dist/`. Stop either local server with Ctrl+C.

## Pages

- `/`: brand homepage and game listing
- `/waribashi/`: game introduction and App Store link
- `/waribashi/privacy/`: Japanese privacy policy
- `/waribashi/support/`: Japanese support page
- `/404.html`: custom not-found page

Pages use directory indexes so URLs work with or without a trailing slash
(the host may redirect to the directory URL).

## Publishing

`.github/workflows/deploy.yml` installs the locked dependencies, builds the site,
and deploys `dist/` to GitHub Pages on pushes to `main` or manual runs.
The custom domain is `https://meowtaverse-games.com`, without a repository path.

`public/CNAME` contains the custom domain and is copied to the output root.
GitHub Pages must also be enabled with GitHub Actions as its source and the
custom domain configured in the repository settings. CNAME alone does not
enable hosting. Pages setup and the DNS cutover are separate, owner-approved
steps after merge; preserve existing mail MX and TXT records.

`public/app-ads.txt` declares the authorized Google AdMob publisher for the
mobile app. It is copied unchanged to `/app-ads.txt` so advertising services
can verify it at the domain root. Keep the publisher line and its final LF intact.
