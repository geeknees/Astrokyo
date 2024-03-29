import { defineConfig } from 'astro/config'

import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
  site: 'https://geeknees.github.io',
  base: '/Astrokyo',
  integrations: [tailwind()]
})
