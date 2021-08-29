#!/usr/bin/env sh
echo "start frontend @bootstrap"
cat >> /var/www/my_app/runtime.config.js <<EOF
window.SVC_TRAEFIK_URL = '$SVC_TRAEFIK_URL';
EOF
nginx -g "daemon off;"