#!/bin/bash

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"
NODE_SCRIPT="$PROJECT_ROOT/src/index.ts"


npx ts-node "$NODE_SCRIPT" "$@"