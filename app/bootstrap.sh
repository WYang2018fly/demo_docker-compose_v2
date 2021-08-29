#!/usr/bin/env sh
echo "start frontend @bootstrap"
cat >> /var/www/my_app/runtime.config.js <<EOF
window.SVC_TRAEFIK_URL = 'http://localhost:19007';
EOF
nginx -g "daemon off;"