import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// "base" deve corrispondere al nome del repository su GitHub
export default defineConfig({
  plugins: [react()],
  base: '/sdm-demo/',
})
