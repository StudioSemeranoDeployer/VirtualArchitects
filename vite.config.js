import { defineConfig } from 'vite'

export default defineConfig({
  base: '/remix-circle-of-water-3d-websi/',
  build: {
    target: 'esnext'
  },
  esbuild: {
    supported: {
      'top-level-await': true
    }
  }
})
