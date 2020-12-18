FROM node:lts-alpine


WORKDIR /app

COPY service /app

RUN npm install --no-package-lock --no-optional
