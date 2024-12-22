// @ts-check
// @ts-ignore
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  // Para GitHub Pages
  base: '/dwc',
  site: 'https://alamonatalia.github.io/dwc',
  

  server: {
      open: true,
  },
  vite: {
    resolve: {
      alias: {
        '@components': '/src/components',
        '@icon': '/src/components/icon',
        '@scaffolding': '/src/components/scaffolding',
        '@ui': '/src/components/ui',
        '@layouts': '/src/layouts'
      },
    },
  },
  integrations: [tailwind()]
});