import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { copyFileSync } from 'fs'

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'copy-redirects',
      writeBundle() {
        copyFileSync('_redirects', 'dist/_redirects')
      }
    }
  ],
  build: {
    outDir: 'dist',
  },
})