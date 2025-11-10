import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import Sitemap from 'vite-plugin-sitemap';

// https://vite.dev/config/
export default defineConfig({
  base: '/Printer/',
  plugins: [react(),
    VitePWA({
      workbox: {
        maximumFileSizeToCacheInBytes: 4000000
      },
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'logo.svg'],
      manifest: {
        name: 'Printer',
        short_name: 'Printer',
        start_url: '/Printer/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#1a1a1a',
        icons: [
          {
            src: 'LogoEllipse.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'LogoEllipse.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    }),
      Sitemap({
      hostname: 'https://olgapotapova.github.io/Printer/',
      // dynamicRoutes: ['/'],
      // exclude: ['/admin'], 
      outDir: 'dist' 
    })
  ],
  server: {
    port: 3000
  }
})
