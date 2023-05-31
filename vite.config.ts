import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill'
import react from '@vitejs/plugin-react'

import builtins from 'rollup-plugin-node-builtins'
import { defineConfig, loadEnv } from 'vite'
import eslint from 'vite-plugin-eslint'
import svgrPlugin from 'vite-plugin-svgr'
import viteTsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }

  return defineConfig({
    resolve: {
      alias: {
        stream: 'stream-browserify',
        crypto: 'crypto-browserify',
      },
    },
    plugins: [react(), viteTsconfigPaths(), svgrPlugin(), eslint(), builtins({ crypto: false })],

    define: {
      'process.env': process.env,
    },
    build: {
      rollupOptions: {},
      outDir: 'build',
    },
    optimizeDeps: {
      include: ['base64-arraybuffer', 'diffie-hellman'],

      esbuildOptions: {
        // Node.js global to browser globalThis
        define: {
          global: 'globalThis',
        },

        // Enable esbuild polyfill plugins
        plugins: [
          NodeGlobalsPolyfillPlugin({
            buffer: true,
            process: true,
          }),
        ],
      },
    },
  })
}
