import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Para GitHub Pages, descomente a linha abaixo:
  // base: '/vite-react-final/',
  // Para Vercel, deixe sem base path (raiz do domínio)
})
