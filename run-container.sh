#!/bin/bash

# Simple script to run React IPL Dashboard container
# Usage: ./run-container.sh [port] [image-tag]

set -e

PORT=${1:-3001}
IMAGE_TAG=${2:-latest}
DOCKERHUB_USERNAME="srikanthkandi"
IMAGE_NAME="react-ipl-dashboard"
FULL_IMAGE_NAME="${DOCKERHUB_USERNAME}/${IMAGE_NAME}"
CONTAINER_NAME="ipl-dashboard"

echo "🚀 Running React IPL Dashboard container..."
echo "Port: $PORT"
echo "Image: ${FULL_IMAGE_NAME}:${IMAGE_TAG}"

# Stop and remove existing container if it exists
echo "🛑 Stopping existing container..."
docker stop $CONTAINER_NAME 2>/dev/null || true
docker rm $CONTAINER_NAME 2>/dev/null || true

# Pull latest image
echo "⬇️  Pulling latest image..."
docker pull ${FULL_IMAGE_NAME}:${IMAGE_TAG}

# Run the container
echo "🚀 Starting container on port $PORT..."
docker run -d \
  --name $CONTAINER_NAME \
  --restart unless-stopped \
  -p $PORT:80 \
  -e NODE_ENV=production \
  ${FULL_IMAGE_NAME}:${IMAGE_TAG}

# Wait for container to be ready
echo "⏳ Waiting for container to be ready..."
sleep 5

# Check if container is running
if docker ps | grep -q $CONTAINER_NAME; then
    echo "✅ Container is running successfully!"
    echo "🌐 Application is available at: http://localhost:$PORT"
    echo "🔍 Container logs: docker logs $CONTAINER_NAME"
    echo ""
    echo "📋 Nginx configuration for your existing setup:"
    echo "Add this to your Nginx site configuration:"
    echo ""
    echo "location /ipl/ {"
    echo "    proxy_pass http://127.0.0.1:$PORT/;"
    echo "    proxy_http_version 1.1;"
    echo "    proxy_set_header Upgrade \$http_upgrade;"
    echo "    proxy_set_header Connection 'upgrade';"
    echo "    proxy_set_header Host \$host;"
    echo "    proxy_set_header X-Real-IP \$remote_addr;"
    echo "    proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;"
    echo "    proxy_set_header X-Forwarded-Proto \$scheme;"
    echo "    proxy_cache_bypass \$http_upgrade;"
    echo "}"
    echo ""
    echo "Or for root domain:"
    echo "location / {"
    echo "    proxy_pass http://127.0.0.1:$PORT;"
    echo "    # ... same proxy settings as above"
    echo "}"
else
    echo "❌ Container failed to start. Check logs:"
    docker logs $CONTAINER_NAME
    exit 1
fi
