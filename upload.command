#!/bin/bash
cd "$(dirname "$0")"
git add .
git commit -m "Update content"
git push origin main
echo "Update completed! Changes will be live in a few minutes."
