import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
    build: {
      rollupOptions: {
        output: {
          dir: "dist", // ✅ Correct option
          entryFileNames: "index.js"
        }
      }
    }
})

