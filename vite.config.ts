import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill'
import react from '@vitejs/plugin-react'
import { isArray, mergeWith } from 'lodash'
import rollupNodePolyFill from 'rollup-plugin-node-polyfills'
import istanbul from 'vite-plugin-istanbul'

import builtins from 'rollup-plugin-node-builtins'
import { defineConfig, loadEnv, UserConfigExport } from 'vite'
import eslint from 'vite-plugin-eslint'
import svgrPlugin from 'vite-plugin-svgr'
import viteTsconfigPaths from 'vite-tsconfig-paths'

const commonConfigOptions = ({ mode }: { mode: Mode }): UserConfigExport => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }

  const config: UserConfigExport = {
    resolve: {
      alias: {
        stream: 'stream-browserify',
        crypto: 'crypto-browserify',
      },
    },
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    plugins: [react(), viteTsconfigPaths(), svgrPlugin(), eslint(), builtins({ crypto: false })],
    server: { debug: false },
    define: {
      APP_VERSION: JSON.stringify(process.env.npm_package_version),
    },

    optimizeDeps: {
      include: ['base64-arraybuffer', 'diffie-hellman'],
      esbuildOptions: {
        define: {
          global: 'globalThis',
        },
        plugins: [
          NodeGlobalsPolyfillPlugin({
            buffer: true,
            process: true,
          }),
        ],
      },
    },
  }

  return config
}

const devConfigOptions: UserConfigExport = {
  ...mergeWith(
    commonConfigOptions({ mode: 'development' }),
    {
      server: {
        open: true,
      },
      plugins: [
        ...(process.env.VITE_APP_IS_E2E
          ? [
              istanbul({
                include: 'src/*',
                exclude: ['node_modules', 'test/'],
                extension: ['.js', '.ts', '.jsx', '.tsx'],
                requireEnv: false,
                cypress: true,
              }),
            ]
          : []),
      ],
    },
    customizer,
  ),
}

const prodConfigOptions: UserConfigExport = {
  ...mergeWith(
    commonConfigOptions({ mode: 'production' }),
    {
      resolve: {},
      build: {
        outDir: 'build',
      },
      rollupOptions: {
        plugins: [
          // Enable rollup polyfills plugin
          // used during production bundling
          rollupNodePolyFill(),
        ],
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
  const config = configDispatch[mode]

  return defineConfig(config)
}

// eslint-disable-next-line consistent-return
function customizer(objValue, srcValue) {
  if (isArray(objValue)) {
    return objValue.concat(srcValue)
  }
}
