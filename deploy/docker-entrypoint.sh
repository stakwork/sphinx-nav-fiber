#!/bin/sh

# Replace the placeholder in index.html with actual environment variable
ENV_VARS=""

if [ ! -z "$BOLTWALL_URL" ]; then
    echo "Injecting BOLTWALL_URL: $BOLTWALL_URL"
    ENV_VARS="BOLTWALL_URL: '$BOLTWALL_URL'"
fi

if [ ! -z "$STAKWORK_WEBSOCKET_URL" ]; then
    echo "Injecting STAKWORK_WEBSOCKET_URL: $STAKWORK_WEBSOCKET_URL"
    if [ ! -z "$ENV_VARS" ]; then
        ENV_VARS="$ENV_VARS, "
    fi
    ENV_VARS="${ENV_VARS}STAKWORK_WEBSOCKET_URL: '$STAKWORK_WEBSOCKET_URL'"
fi

if [ ! -z "$ENV_VARS" ]; then
    # Create the environment configuration
    ENV_CONFIG="window.ENV = { $ENV_VARS };"

    # Find index.html and inject the environment config
    find /usr/share/nginx/html -name "index.html" -exec sed -i "s|<head>|<head><script>$ENV_CONFIG</script>|g" {} \;
else
    echo "No environment variables set, using build-time configuration"
fi

# Start nginx
exec "$@"
