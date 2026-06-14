#!/bin/sh

set -eu

ENV_CONFIG_FILE=${ENV_CONFIG_FILE:-/usr/share/nginx/html/env-config.js}

js_escape() {
    printf '%s' "$1" | sed 's/\\/\\\\/g; s/"/\\"/g'
}

append_env_value() {
    key=$1
    value=$2

    if [ -z "$value" ]; then
        return
    fi

    if [ "$wrote_env" = "1" ]; then
        printf ',\n'
    fi

    escaped_value=$(js_escape "$value")
    printf '  "%s": "%s"' "$key" "$escaped_value"
    wrote_env=1
}

runtime_api_url="${VITE_APP_API_URL:-${API_URL:-${BOLTWALL_URL:-}}}"
wrote_env=0

{
    printf 'window.ENV = {\n'
    append_env_value "VITE_APP_API_URL" "$runtime_api_url"
    append_env_value "BOLTWALL_URL" "${BOLTWALL_URL:-}"
    append_env_value "STAKWORK_WEBSOCKET_URL" "${STAKWORK_WEBSOCKET_URL:-}"
    printf '\n};\n'
} > "$ENV_CONFIG_FILE"

echo "Runtime configuration written to $ENV_CONFIG_FILE"

# Start nginx
exec "$@"
