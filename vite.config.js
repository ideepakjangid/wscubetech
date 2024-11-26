import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // server: {
  //   host: '192.168.156.27', // This allows Vite to listen on all network interfaces
  //   port: 3000, // You can specify a custom port if desired
  // },
})
