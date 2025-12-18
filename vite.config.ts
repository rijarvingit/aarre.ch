import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Base path for standalone deployment at root of aarre.ch
  base: '/',
  server: {
    port: 3000
  },
  build: {
    outDir: 'dist'
  }
})
