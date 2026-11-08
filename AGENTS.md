# Image delivery

- Keep original uploaded artwork URLs for full-size opening; use pixel-identical lossless variants for display to reduce transfer size without changing the artwork.
- Reference uploaded assets through `hostedAsset()` (absolute published Lovable origin) because the site is also deployed on a non-Lovable host where relative asset paths 404.
- Keep `vercel.json` SPA rewrite because the custom domain is served by Vercel, which otherwise 404s on direct visits to inner pages.