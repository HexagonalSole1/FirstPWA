import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    VitePWA({
      includeAssets: ['conejo_kawai.ico', 'conejo_kawai.png'],
      manifest:{
        display:'stadalone',
        display_override:['window-controls-overlay'],
        lang:'es-ES ',
        name:'DayaWork PWA',
        short_name:'First PWA',
        description:'proyecto para panel de control de sensores',
        theme_color:'#1923c',
        background_color:'#d4d4d4',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose:'any'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose:'muskable'
          }
        ]
      }
    })
  ],
})
