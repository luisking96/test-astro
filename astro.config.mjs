import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind({
    // Ejemplo: Deshabilita la inyección de una importación básica de `base.css` en cada página.
    // Muy útil si necesitas definir e/o importar tu propio `base.css` personalizado.
    applyBaseStyles: false,
  })]
});