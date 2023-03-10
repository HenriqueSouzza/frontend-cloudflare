import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'http://localhost:3001',
  server: {
    port: 3001,
  },
  preview: {
    port: 3001,
    cors: {
      origin: "*"
    },
  },
})
