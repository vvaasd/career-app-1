import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  plugins: [pluginReact()],
  html: {
    template: './index.html',
    favicon: './src/assets/img/favicon.svg',
  },
  source: {
    alias: {
      '@': './src',
    },
  },
});
