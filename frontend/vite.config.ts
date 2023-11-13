import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import isDocker from 'is-docker'

// const proxyHost = isDocker ? 'backend' : 'backend'

export default defineConfig({
  plugins: [react()],
  server: {
    host: 'localhost',
    port: 4915,
    proxy: {
      '/api': {
        target: `http://backend:8000/`,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});
