@echo off
REM Simple script to run React IPL Dashboard container (Windows)
REM Usage: run-container.bat [port] [image-tag]

set PORT=%1
if "%PORT%"=="" set PORT=3001

set IMAGE_TAG=%2
if "%IMAGE_TAG%"=="" set IMAGE_TAG=latest

set DOCKERHUB_USERNAME=srikanthkandi
set IMAGE_NAME=react-ipl-dashboard
set FULL_IMAGE_NAME=%DOCKERHUB_USERNAME%/%IMAGE_NAME%
set CONTAINER_NAME=ipl-dashboard

echo 🚀 Running React IPL Dashboard container...
echo Port: %PORT%
echo Image: %FULL_IMAGE_NAME%:%IMAGE_TAG%

REM Stop and remove existing container if it exists
echo 🛑 Stopping existing container...
docker stop %CONTAINER_NAME% 2>nul
docker rm %CONTAINER_NAME% 2>nul

REM Pull latest image
echo ⬇️  Pulling latest image...
docker pull %FULL_IMAGE_NAME%:%IMAGE_TAG%

REM Run the container
echo 🚀 Starting container on port %PORT%...
docker run -d --name %CONTAINER_NAME% --restart unless-stopped -p %PORT%:80 -e NODE_ENV=production %FULL_IMAGE_NAME%:%IMAGE_TAG%

REM Wait for container to be ready
echo ⏳ Waiting for container to be ready...
timeout /t 5 /nobreak >nul

REM Check if container is running
docker ps | findstr %CONTAINER_NAME% >nul
if %errorlevel%==0 (
    echo ✅ Container is running successfully!
    echo 🌐 Application is available at: http://localhost:%PORT%
    echo 🔍 Container logs: docker logs %CONTAINER_NAME%
    echo.
    echo 📋 Nginx configuration for your existing setup:
    echo Add this to your Nginx site configuration:
    echo.
    echo location /ipl/ {
    echo     proxy_pass http://127.0.0.1:%PORT%/;
    echo     proxy_http_version 1.1;
    echo     proxy_set_header Upgrade $http_upgrade;
    echo     proxy_set_header Connection 'upgrade';
    echo     proxy_set_header Host $host;
    echo     proxy_set_header X-Real-IP $remote_addr;
    echo     proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    echo     proxy_set_header X-Forwarded-Proto $scheme;
    echo     proxy_cache_bypass $http_upgrade;
    echo }
    echo.
    echo Or for root domain:
    echo location / {
    echo     proxy_pass http://127.0.0.1:%PORT%;
    echo     # ... same proxy settings as above
    echo }
) else (
    echo ❌ Container failed to start. Check logs:
    docker logs %CONTAINER_NAME%
    exit /b 1
)
