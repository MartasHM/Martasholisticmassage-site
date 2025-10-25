import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Configuration for both local dev and your custom domain
export default defineConfig({
  plugins: [react()],
  base: '/', // ✅ important: custom domains must use root path
})
