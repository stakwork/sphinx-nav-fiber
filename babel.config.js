const test = process.env.NODE_ENV === 'test'

module.exports = {
  presets: [['@babel/preset-env', { targets: { node: 'current' }, modules: 'commonjs' }], '@babel/preset-typescript', ["@babel/preset-react", {"runtime": "automatic"}]],
  plugins: [...(test ? ['babel-plugin-transform-vite-meta-env'] : [])],
}
