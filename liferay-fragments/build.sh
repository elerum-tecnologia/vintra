#!/usr/bin/env bash
# Gera dist/vintra-fragments.zip, pronto para importar no Liferay
# (Construtor de Sites > Fragmentos > Importar).
set -euo pipefail
cd "$(dirname "$0")"
rm -rf dist && mkdir -p dist
(cd src && zip -qr ../dist/vintra-fragments.zip vintra -x '*.DS_Store')
echo "OK: dist/vintra-fragments.zip"
