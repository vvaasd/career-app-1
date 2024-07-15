import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

const isProd = process.env.NODE_ENV === 'production';

export default defineConfig({
  plugins: [pluginReact()],
  html: {
    title: 'Career App',
  },
  source: {
    alias: {
      '@components': './src/components',
      '@assets': './src/assets',
      '@utils': './src/utils',
      '@data': './src/data',
      '@hooks': './src/hooks',
      '@services': './src/services',
      '@constants': './src/constants',
      '@stores': './src/stores',
    },
  },
  output: {
    cssModules: {
      localIdentName: isProd
        ? '[local]-[hash:base64:6]'
        : '[path][name]__[local]-[hash:base64:6]',
    },
  },
});
