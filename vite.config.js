import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: {
        'my-lib': 
          './src/my-lib.js',
      },
      formats: ['es'],
    },
  },
})
