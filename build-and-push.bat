@echo off
REM Build and push script for React IPL Dashboard (Windows)
REM Usage: build-and-push.bat [version] [dockerhub-username]

set VERSION=%1
if "%VERSION%"=="" set VERSION=latest

set DOCKERHUB_USERNAME=%2
if "%DOCKERHUB_USERNAME%"=="" set DOCKERHUB_USERNAME=srikanthkandi

set IMAGE_NAME=react-ipl-dashboard
set FULL_IMAGE_NAME=%DOCKERHUB_USERNAME%/%IMAGE_NAME%

echo 🚀 Building and pushing Docker image...
echo Image: %FULL_IMAGE_NAME%:%VERSION%

REM Build the production image
echo 📦 Building production image...
docker build -t %FULL_IMAGE_NAME%:%VERSION% .

REM Also tag as latest if version is not latest
if not "%VERSION%"=="latest" (
    echo 🏷️  Tagging as latest...
    docker tag %FULL_IMAGE_NAME%:%VERSION% %FULL_IMAGE_NAME%:latest
)

REM Login to Docker Hub (you'll be prompted for credentials)
echo 🔐 Logging in to Docker Hub...
docker login

REM Push the image
echo ⬆️  Pushing image to Docker Hub...
docker push %FULL_IMAGE_NAME%:%VERSION%

if not "%VERSION%"=="latest" (
    echo ⬆️  Pushing latest tag...
    docker push %FULL_IMAGE_NAME%:latest
)

echo ✅ Successfully pushed %FULL_IMAGE_NAME%:%VERSION% to Docker Hub!
echo.
echo 🐳 To run on your Ubuntu server:
echo docker run -d --name ipl-dashboard -p 3000:80 %FULL_IMAGE_NAME%:%VERSION%
echo.
echo 🌐 Or with docker-compose:
echo docker-compose --profile prod up -d
