import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const getProcessArg = (key: string) => {
  const arg = process.argv.find((arg) => arg.startsWith(`--${key}`));

  if (!arg) {
    return false;
  }
  if (!arg.includes('=')) {
    return true;
  }

  return arg.split('=').pop();
}

const isDocker = getProcessArg('is-docker');
const proxyHost = isDocker ? 'backend' : '0.0.0.0'


export default defineConfig({
  plugins: [react()],
  server: {
    host: 'localhost',
    port: 4915,
    proxy: {
      '/api': {
        target: `http://${proxyHost}:8000/`,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});
