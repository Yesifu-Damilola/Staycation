/* eslint-disable no-undef */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // Alias for 'src' folder
    },
  },
  build: {
    // Disable stripping out unused code in production (adjust as needed)
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
});
