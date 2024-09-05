import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Portfolio/',
  server: {
    proxy: {
      '^/api/SecureWebsite': {
        target:'https://localhost:7247', // The URL of your .NET backend
        secure: false, // Set to false if your backend uses a self-signed certificate
      },
    },
  },
});