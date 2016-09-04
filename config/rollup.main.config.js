import path from 'path';
import alias from 'rollup-plugin-alias';
import resolve from 'rollup-plugin-node-resolve';
import angular from 'rollup-plugin-angular';
import ts from 'rollup-plugin-typescript';
import buble from 'rollup-plugin-buble';


export default {
  entry: 'src/main.ts',
  format: 'iife',
  dest: 'dist/main.js',
  moduleName: 'main',
  context: 'this',
  plugins: [
    angular({
      exclude: 'node_modules/**'
    }),
    ts({
      typescript: require('../node_modules/typescript')
    }),
    alias({ 
      'rxjs': path.resolve(__dirname, '../node_modules/rxjs-es')    }),
    resolve({ jsnext: true, main: true, browser: true }),
    buble({
      transforms: { dangerousForOf: true }
    })
  ]
}
