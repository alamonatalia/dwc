// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  // Para GitHub Pages
  site: 'https://alamonatalia.github.io/dwc',
  base: 'dwc',

  server: {
      open: true,
  },
  integrations: [tailwind()]
});