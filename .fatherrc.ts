import { defineConfig } from 'father';

export default defineConfig({
  esm: {
    input: 'packages/ui/src',
    output: 'es',
  },
  cjs: {
    input: 'packages/ui/src',
    output: 'lib',
  },
  umd: {
    entry: 'packages/ui/src',
    output: 'dist',
  },
});
