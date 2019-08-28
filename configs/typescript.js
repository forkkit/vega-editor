module.exports = {
  compilerOptions: {
    target: 'es6',
    module: 'es2015',
    lib: ['es2017', 'dom'],
    moduleResolution: 'node',
    declaration: false,
    noImplicitAny: false,
    sourceMap: true,
    strictNullChecks: false,
    jsx: 'react',
    suppressImplicitAnyIndexErrors: true,
    esModuleInterop: true,
    allowSyntheticDefaultImports: true,
    importHelpers: true
  },
  files: ['src/index.tsx'],
  include: ['node_modules/vega-lite/typings/*.d.ts'],
  awesomeTypescriptLoaderOptions: {
    useCache: true,
    forceIsolatedModules: true,
    silent: true
  }
};
