#!/usr/bin/bash
setcap cap_net_bind_service=+ep `readlink -f \`which node\``
