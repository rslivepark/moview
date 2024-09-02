import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import vercel from 'vite-plugin-vercel';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: Number(process.env.PORT),
  },
  plugins: [react(), vercel()],
  base: '/',
});
