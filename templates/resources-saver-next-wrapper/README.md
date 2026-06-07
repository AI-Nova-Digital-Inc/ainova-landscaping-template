# Resources Saver Next Wrapper

Minimal Next.js wrapper for deploying a Resources Saver HTML capture to Vercel.

## Use

1. Copy this whole folder into a new repo.
2. Replace `public/site/index.html` with the `index.html` exported by Resources Saver.
3. Keep original CDN URLs untouched first. Do not localize assets until the page works.
4. Install and verify:

```bash
npm install
npm run check
npm run dev -- --port 3000
```

5. Open `http://localhost:3000`.
6. Deploy to Vercel with `npm run build`.

## Important

This wrapper does not rebuild the website as React components. It serves the captured HTML through Next.js so Vercel can host it.

If the page looks like huge raw text/SVGs, the main stylesheet is not loading. Check DevTools Network for the CSS file.

If the page is stuck on a preloader, one of the original runtime scripts failed. Check DevTools Console and keep the original Webflow/Slater/CDN URLs when possible.
