# Introduction
This project is the frontend part of a YouTube video sharing application built with React.js.

## Key features
- Watch list shared videos
- Share video
- Vote video
- Readtime notification when new video has been shared.

# Prerequisites
- nodejs 16.19.1
- yarn 1.22.19
- react 18

# Installation & Configuration (Using Docker)
- step 1: clone repository from github
```
git clone git@github.com:amaterasu1096/sample-video-app-frontend.git
```

- step 2: create .env file
```
touch .env
```

- step 3: paste below content to .env file - replace by your urls
```
REACT_APP_API_URL=http://localhost:3001
REACT_APP_WEBSOCKET_URL=ws://localhost:3001/cable
```

- step 4: build docker image
```
docker-compose build .
```

- step 5: run container
```
docker-compose up -d
```

# Running the Application (Using Docker)
Start or stop application

```
docker-compose start
docker-compose stop
```

Application run at : `http://localhost:3000`

# Troubleshooting

If you install new package, you can run:
```
docker-compose run --rm app yarn add your_package
```
or paste your package to `package.json` and run

```
docker-compose run --rm app yarn install
```
