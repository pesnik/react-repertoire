import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // server: {
  //   port: 5174,
  //   cors: true, // Enable CORS for all origins in development
  //   origin: 'http://localhost:5174',
  //   headers: {
  //     'Access-Control-Allow-Origin': '*',
  //     'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  //     'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  //     'Cross-Origin-Resource-Policy': 'cross-origin',
  //     'Cross-Origin-Embedder-Policy': 'unsafe-none'
  //   }
  // },
  // build: {
  //   sourcemap: true
  // }
});