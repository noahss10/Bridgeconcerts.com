# Bridge Concerts

Marketing site for Bridge Concerts — a touring support company bridging the Eastern entertainment market and Western artists.

## Structure

- `index.html` — page markup
- `style.css` — styles
- `script.js` — nav, scroll reveal, client list toggle
- `assets/img/` — logo and photography

## Local preview

This is a static site with no build step. Serve the folder with any static server, e.g.:

```
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Deploying

`CNAME` is set for GitHub Pages at `bridgeconcerts.com`. Enable Pages on this repo (Settings → Pages → deploy from the default branch) and point the domain's DNS at GitHub Pages.
