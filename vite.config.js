import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['/src/main.jsx'], // This is incorrect
      external: ['/src/main.jsx'], // Add the correct module name here
    },
  },
})
