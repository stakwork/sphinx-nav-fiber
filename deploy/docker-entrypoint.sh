#!/bin/sh

# Replace the placeholder in index.html with actual environment variable
if [ ! -z "$BOLTWALL_URL" ]; then
    echo "Injecting BOLTWALL_URL: $BOLTWALL_URL"

    # Create the environment configuration
    ENV_CONFIG="window.ENV = { BOLTWALL_URL: '$BOLTWALL_URL' };"

    # Find index.html and inject the environment config
    find /usr/share/nginx/html -name "index.html" -exec sed -i "s|<head>|<head><script>$ENV_CONFIG</script>|g" {} \;
else
    echo "BOLTWALL_URL not set, using build-time configuration"
fi

# Start nginx
exec "$@"