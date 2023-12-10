import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: {
        'my-lib': './src/my-lib.js',
      },
      formats: ['es'],
    },
  },
  server: {
    // Automatically open the sandbox page in the browser when the dev server starts.
    // If you aren't using the sandbox page, or don't want this behavior, remove this setting:
    open: '/sandbox.html',
  },
});
