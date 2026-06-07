# Resources Saver Deploy Workflow

Use this when a site was captured with the Chrome "Resources Saver" extension and the goal is to deploy the captured page through this Next.js/Vercel wrapper.

## What This Workflow Does

- Serves a captured static HTML page at `/` using `src/app/route.ts`.
- Keeps the captured HTML mostly unchanged so Webflow/Slater/GSAP/Lenis/Lottie sites can continue loading their original runtime from CDN.
- Uses Next.js only as the deployment wrapper. This is not a React component rebuild.

## Files That Matter

- `public/jeskojets/index.html` is the HTML currently served at `/`.
- `src/app/route.ts` reads that HTML and returns it as `text/html`.
- `jeskojets.com/` is the raw Resources Saver export and is only a backup/source folder.
- `public/jeskojets-assets/` is an optional local resource mirror. The current working Jesko preview does not depend on it because the HTML uses original remote URLs.

## Steps For A New Resources Saver Site

1. Save the site with Resources Saver.
2. Find the exported `index.html`.
3. Copy that HTML to `public/<site-name>/index.html`.
4. Update `src/app/route.ts` so `htmlPath` points to that folder:

```ts
const htmlPath = join(process.cwd(), "public", "<site-name>", "index.html");
```

5. Prefer the original captured HTML first. Do not rewrite all CDN URLs to local paths unless you verify every CSS, JS module, image, font, and dynamic import still resolves.
6. Run:

```bash
npm run check
```

7. Preview locally:

```bash
npm run dev -- --port 3000
```

8. Hard refresh the browser with `Ctrl + F5`.

## Important Lessons From Jesko Jets

- Resources Saver captures files, but it does not create a self-contained app.
- Webflow animation pages can break if CDN URLs are rewritten incorrectly.
- Slater scripts may dynamically import other scripts from remote URLs.
- Preloaders can hide all real content if the original animation scripts fail.
- If the page appears as huge raw text/SVGs, the main Webflow CSS is not loading. Check the Network tab for the stylesheet request.
- If only the preloader appears, check browser console errors for failed JS modules or blocked CDN scripts.

## Vercel Notes

- Deploy as a normal Next.js project.
- Build command: `npm run build`.
- Node version: 24 or newer.
- This approach can depend on external CDNs. If those URLs disappear or block the deployment domain, the clone may degrade.

