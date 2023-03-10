import { defineConfig } from 'father';

export default defineConfig({
  esm: {
    input: 'packages/ui/src/components/',
    output: 'es',
  },
  cjs: {
    input: 'packages/ui/src/components/',
    output: 'lib',
  },
  umd: {
    entry: 'packages/index.tsx',
    output: 'dist',
  },
});
