// npm run test → run your unit tests
// npm run test:ui → open a cute little visual test runner (optional)

// vitest.config.js
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',  // simulates browser
    setupFiles: './src/setupTests.js', 
    globals: true,         // lets you use describe, it, expect without importing manually
  },
});
