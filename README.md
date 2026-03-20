# Frowns Next.js Marketing Site

This is a small Next.js marketing website for a tongue-in-cheek product family focused on turning negative tone into constructive communication.

## Local run

```bash
cd frowns
npm install
npm run dev
```

Open `http://localhost:3000`.

## Included pages

- `/` home
- `/products` all products
- `/products/frown-flip` product landing
- `/products/smile-map` product landing
- `/products/ceremonial-mode` product landing
- `/about` about us
- `/enterprise` enterprise page
- `/legal` legal hub
- `/legal/privacy`
- `/legal/terms`
- `/legal/cookies`
- `/legal/accessibility`
- default `404` page

## Brand logo options

- `public/images/frowns-logo-mark.svg` (frown mark only)
- `public/images/frowns-logo-wordmark.svg` (icon + text mark, used by default)
- `public/images/frowns-logo-badge.svg` (badge style)

To switch the header logo, edit `[frowns/components/site-nav.tsx](./components/site-logo.tsx)` usage:

```tsx
<SiteLogo variant="wordmark" />
```

Try `mark` or `badge` as alternatives.
