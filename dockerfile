FROM node:16.19.1

WORKDIR /app
COPY package.json yarn.lock /app/
RUN yarn install

COPY . /app
