import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: process.env.API_URL || "http://localhost:3000",
        secure: false,
      },
    },
  },
  plugins: [react()],
  build: { chunkSizeWarningLimit: 1600 },
});
