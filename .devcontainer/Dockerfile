FROM mcr.microsoft.com/devcontainers/javascript-node:20

# [Optional] Uncomment this section to install additional OS packages.
RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
    && apt-get -y install --no-install-recommends wget sed

RUN sudo mkdir -p -m 755 /etc/apt/keyrings \
        && out=$(mktemp) && wget -nv -O$out https://cli.github.com/packages/githubcli-archive-keyring.gpg \
        && cat $out | sudo tee /etc/apt/keyrings/githubcli-archive-keyring.gpg > /dev/null \
    && sudo chmod go+r /etc/apt/keyrings/githubcli-archive-keyring.gpg \
    && echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/githubcli-archive-keyring.gpg] https://cli.github.com/packages stable main" | sudo tee /etc/apt/sources.list.d/github-cli.list > /dev/null \
    && sudo apt update -y \
    && sudo apt install gh -y

# Install PM2 globally and ensure it's accessible
RUN npm install -g pm2 && \
    # Create symlink in /usr/local/bin to ensure it's always in PATH
    ln -sf /usr/local/node/bin/pm2 /usr/local/bin/pm2 && \
    # Verify installation
    pm2 --version
