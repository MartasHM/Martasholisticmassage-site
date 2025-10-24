import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Martasholisticmassage-site/',  // ✅ Add this line
  plugins: [react()],
  base: '/Martasholisticmassage-site/'
})
