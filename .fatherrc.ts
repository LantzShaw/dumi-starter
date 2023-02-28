import { defineConfig } from 'father';

export default defineConfig({
  esm: {
    input: 'packages',
    output: 'dist',
  },
  umd: {
    entry: 'packages/index.tsx',
  },
});
