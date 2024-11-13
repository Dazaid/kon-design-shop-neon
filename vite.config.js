import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/kon-design-shop-neon/',  // El nombre de tu repositorio en GitHub
  plugins: [react()],
});
