const CracoAlias = require('craco-alias')

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.module.rules.push({
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto',
      })
      return webpackConfig
    },
  },
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        // see in examples section
        source: 'tsconfig',
        tsConfigPath: './tsconfig.paths.json',
      },
    },
  ],
}
