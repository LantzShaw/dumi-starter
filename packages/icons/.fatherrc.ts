import { defineConfig } from 'father';

export default defineConfig({
  esm: {
    output: 'es',
  },
  cjs: {
    output: 'lib',
  },
  umd: {
    entry: '.',
    output: 'dist',
  },
});
