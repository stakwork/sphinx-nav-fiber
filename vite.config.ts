/* eslint-disable no-console */
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill'

import react from '@vitejs/plugin-react'
import { isArray, mergeWith } from 'lodash'

import builtins from 'rollup-plugin-node-builtins'
import { UserConfigExport, defineConfig, loadEnv } from 'vite'
import eslint from 'vite-plugin-eslint'
import svgrPlugin from 'vite-plugin-svgr'
import viteTsconfigPaths from 'vite-tsconfig-paths'

const commonConfigOptions = (): UserConfigExport => ({
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

  optimizeDeps: {
    include: ['base64-arraybuffer', 'diffie-hellman'],
    esbuildOptions: {
      // Node.js global to browser globalThis
      define: {
        global: 'globalThis',
      },
      plugins: [
        NodeGlobalsPolyfillPlugin({
          buffer: true,
          process: true,
        }),
      ],

      // Enable esbuild polyfill plugins
    },
  },
})

const devConfigOptions: UserConfigExport = {
  ...mergeWith(
    commonConfigOptions(),
    {
      server: {
        open: true,
      },
      optimizeDeps: {
        esbuildOptions: {
          // Enable esbuild polyfill plugins
          // plugins: [
          //   NodeGlobalsPolyfillPlugin({
          //     buffer: true,
          //     process: true,
          //   }),
          // ],
        },
      },
    },
    customizer,
  ),
}

const prodConfigOptions: UserConfigExport = {
  ...mergeWith(
    commonConfigOptions(),
    {
      resolve: {},
      build: {
        rollupOptions: {
          // plugins: [inject({ Buffer: ['Buffer', 'Buffer'] })],
        },
        outDir: 'build',
      },
      optimizeDeps: {
        esbuildOptions: {
          // Enable esbuild polyfill plugins
          plugins: [
            // NodeGlobalsPolyfillPlugin({
            //   buffer: true,
            //   process: true,
            // }),
          ],
        },
      },
    },
    customizer,
  ),
}

type Mode = 'development' | 'production'

const configDispatch: Record<Mode, UserConfigExport> = {
  development: devConfigOptions,
  production: prodConfigOptions,
}

// https://vitejs.dev/config/
export default ({ mode }: { mode: Mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }

  const config = configDispatch[mode]

  // console.log('🚀 ~ file: vite.config.ts:90 ~ config:', config, mode)

  return defineConfig(config)
}

// eslint-disable-next-line consistent-return
function customizer(objValue, srcValue) {
  if (isArray(objValue)) {
    return objValue.concat(srcValue)
  }
}
