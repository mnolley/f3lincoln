#!/bin/bash
set -e

mkdir -p "$(dirname "$0")/../assets/img"
cd "$(dirname "$0")/../assets/img"

urls=(
  "https://img.icons8.com/ios-filled/24/ffffff/facebook-new.png"
  "https://img.icons8.com/ios-filled/24/ffffff/instagram-new.png"
  "https://img.icons8.com/ios-filled/24/ffffff/twitter.png"
  "https://img.icons8.com/ios-filled/16/marker.png"
  "https://via.placeholder.com/80"
  "https://images.unsplash.com/photo-1518611012118-f5d0b130381b?auto=format&fit=crop&w=800&q=60"
  "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=800&q=60"
  "https://images.unsplash.com/photo-1503694978374-8a2fa686963a?auto=format&fit=crop&w=800&q=60"
  "https://images.unsplash.com/photo-1526401281623-449ab4c1124b?auto=format&fit=crop&w=1350&q=80"
  "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1350&q=80"
)

for url in "${urls[@]}"; do
  filename=$(basename "${url%%\?*}")
  curl -L -o "$filename" "$url"
  echo "Downloaded $url -> $filename"
  sleep 1
done
