import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,   // or '0.0.0.0' so it listens on all interfaces
    port: 5173,   // you can change if you want, e.g. 3000
  },
})
