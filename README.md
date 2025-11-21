# pwa-mobile-ui

## Overview

This repo contains a Vue 3 + Vite mobile experience that recreates the latest Papara home flow with Tailwind-based theming and PWA-ready scaffolding. The implementation now includes:

- **Home dashboard shell** with top bar, horizontally scrollable shortcuts, product carousel (slides 1–3 populated), alerts, quick actions, account activity list, cashback card, and bottom navigation.
- **Dynamic action sheets** that open from quick actions or bottom-nav items for transfer and QR flows.
- **Card promo route** (`/card/promo`) showcasing the Akbank ATM promotion with responsive layout and CTA stubs.
- **Payments summary route** (`/payments/summary`) highlighting monthly spend insights with donut visualization.
- Centralized design tokens in Tailwind config and reusable icon component library for vector illustrations.

> **Note:** Additional carousel slides (4–9) can be filled in once design assets arrive by extending `productSlides` in `src/data/homeContent.ts`.

## Navigation Map

| Path | View | Notes |
| --- | --- | --- |
| `/` | `HomeView` | Main dashboard with carousels, banners, quick actions, and drawers. |
| `/card/promo` | `CardPromoView` | Akbank ATM promo screen; linked from quick action & bottom nav. |
| `/payments/summary` | `PaymentsSummaryView` | Monthly spending donut summary; linked from quick action & bottom nav. |

Quick actions leverage extra metadata (`route`, `sheetId`) defined in `src/data/homeContent.ts` to either push routes or open the appropriate action sheet. Bottom navigation uses the same data source for consistency.

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Recommended Browser Setup

- Chromium-based browsers (Chrome, Edge, Brave, etc.):
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd) 
  - [Turn on Custom Object Formatter in Chrome DevTools](http://bit.ly/object-formatters)
- Firefox:
  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
  - [Turn on Custom Object Formatter in Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## Recreating the Vue + Tailwind + PWA Stack

Follow these steps whenever you need to spin up a fresh project identical to this one.

1. **Scaffold the Vue project**
   ```sh
   npm create vue@latest your-app-name -- --ts --router --pinia --vitest --eslint-with-prettier
   ```
   - Choose TypeScript, Vue Router, Pinia, Vitest, and ESLint + Prettier when prompted.
   - Move into the new folder and install dependencies: `cd your-app-name && npm install`.

2. **Add Tailwind CSS v3**
   ```sh
   npm install -D tailwindcss@3.4.15 postcss@8.4.49 autoprefixer@10.4.20
   npx tailwindcss init -p
   ```
   - Update `tailwind.config.js` to scan Vue files:
     ```js
     export default {
       content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
       theme: { extend: {} },
       plugins: [],
     }
     ```
   - Replace `src/assets/main.css` with Tailwind directives:
     ```css
     @tailwind base;
     @tailwind components;
     @tailwind utilities;
     ```

3. **Hook Tailwind into the app shell**
   - In `src/App.vue`, wrap the router view with Tailwind-friendly layout classes, e.g.:
     ```vue
     <template>
       <div class="min-h-screen bg-neutral-950 text-white">
         <RouterView />
       </div>
     </template>
     ```

4. **Install and configure PWA support**
   ```sh
   npm install -D vite-plugin-pwa@1.1.0
   ```
   - Extend `vite.config.ts`:
     ```ts
     import { VitePWA } from 'vite-plugin-pwa'

     export default defineConfig({
       plugins: [
         vue(),
         vueDevTools(),
         VitePWA({
           registerType: 'autoUpdate',
           includeAssets: ['favicon.ico'],
           devOptions: { enabled: true },
           manifest: {
             name: 'Your App',
             short_name: 'App',
             description: 'Describe your PWA here.',
             theme_color: '#0ea5e9',
             background_color: '#111827',
             display: 'standalone',
             start_url: '/',
             icons: [
               { src: '/pwa-192x192.png', sizes: '192x192', type: 'image/png' },
               { src: '/pwa-512x512.png', sizes: '512x512', type: 'image/png', purpose: 'any maskable' },
             ],
           },
         }),
       ],
     })
     ```
   - Add icon assets (e.g., `pwa-192x192.png`, `pwa-512x512.png`) to `public/`.

5. **Verify everything works**
   ```sh
   npm run dev -- --host
   ```
   - Confirm Tailwind classes render and the service worker registers (check dev tools > Application > Service Workers).

6. **Optional tooling**
   - Initialize Git: `git init && git add . && git commit -m "feat: scaffold"`.
   - Push to GitHub: `git remote add origin <repo-url>` then `git push -u origin main`.

7. **Next steps**
   - Replace starter components in `src/views` with your designs.
   - Keep styles in Tailwind classes, extract reusable Vue components, and ensure README instructions stay updated.
