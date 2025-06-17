import { defineConfig } from 'tsup';

export default defineConfig({
  outDir: 'dist',
  entry: ['src/*.ts', '!src/**/*.test.ts', '!src/**/*.spec.ts'],
  format: ['esm'],
  external: [],
  sourcemap: false,
  splitting: false,
  clean: true,
  treeshake: true,
  dts: true,
});
