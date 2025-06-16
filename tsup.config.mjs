import { defineConfig } from 'tsup';

export default defineConfig({
  outDir: 'dist',
  entry: ['src/*.ts', 'src/*.tsx', '!src/**/*.test.tsx', '!src/**/*.spec.tsx'],
  format: ['esm'],
  external: [],
  sourcemap: false,
  splitting: false,
  clean: true,
  treeshake: true,
  dts: true,
});
