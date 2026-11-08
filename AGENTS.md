# Image delivery

- Keep original uploaded artwork URLs for full-size opening; use pixel-identical lossless variants for display to reduce transfer size without changing the artwork.
- Proxy hosted asset paths only in the Vite development server because its SPA fallback otherwise returns HTML rather than image bytes.