const CracoAlias = require("craco-alias");

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        // see in examples section
        source: "tsconfig",
        tsConfigPath: "./tsconfig.paths.json",
      },
    },
  ],
};
