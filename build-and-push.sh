#!/bin/bash

# Build and push script for React IPL Dashboard
# Usage: ./build-and-push.sh [version] [dockerhub-username]

set -e

# Default values
VERSION=${1:-latest}
DOCKERHUB_USERNAME=${2:-srikanthkandi}
IMAGE_NAME="react-ipl-dashboard"
FULL_IMAGE_NAME="${DOCKERHUB_USERNAME}/${IMAGE_NAME}"

echo "🚀 Building and pushing Docker image..."
echo "Image: ${FULL_IMAGE_NAME}:${VERSION}"

# Build the production image
echo "📦 Building production image..."
docker build -t ${FULL_IMAGE_NAME}:${VERSION} .

# Also tag as latest if version is not latest
if [ "$VERSION" != "latest" ]; then
    echo "🏷️  Tagging as latest..."
    docker tag ${FULL_IMAGE_NAME}:${VERSION} ${FULL_IMAGE_NAME}:latest
fi

# Login to Docker Hub (you'll be prompted for credentials)
echo "🔐 Logging in to Docker Hub..."
docker login

# Push the image
echo "⬆️  Pushing image to Docker Hub..."
docker push ${FULL_IMAGE_NAME}:${VERSION}

if [ "$VERSION" != "latest" ]; then
    echo "⬆️  Pushing latest tag..."
    docker push ${FULL_IMAGE_NAME}:latest
fi

echo "✅ Successfully pushed ${FULL_IMAGE_NAME}:${VERSION} to Docker Hub!"
echo ""
echo "🐳 To run on your Ubuntu server:"
echo "docker run -d --name ipl-dashboard -p 3000:80 ${FULL_IMAGE_NAME}:${VERSION}"
echo ""
echo "🌐 Or with docker-compose:"
echo "docker-compose --profile prod up -d"
