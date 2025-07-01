module.exports = {
  apps: [
    {
      name: "frontend",
      script: "yarn start",
      cwd: "/workspaces/sphinx-nav-fiber",
      instances: 1,
      autorestart: true,
      watch: false,
      env: {
        INSTALL_COMMAND: "yarn && yarn install",
        PORT: "3000"
      }
    }
  ],
};
