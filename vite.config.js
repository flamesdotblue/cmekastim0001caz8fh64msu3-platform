import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: true,
    port: 5173,
    strictPort: true,
    allowedHosts: ['sb-3jfi9hg3gr62.vercel.run']
  },
  preview: {
    host: true,
    port: 5173,
    strictPort: true,
    allowedHosts: ['sb-3jfi9hg3gr62.vercel.run']
  }
});
