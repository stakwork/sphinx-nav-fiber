FROM node:18-alpine3.17 as build

# Create app directory
WORKDIR /usr/src/app

COPY package*.json /usr/src/app
COPY yarn.lock /usr/src/app


ENV YARN_VERSION 3.5.0

RUN yarn policies set-version $YARN_VERSION

ENV NODE_ENV=production


RUN yarn install --immutable

COPY . /usr/src/app

ARG REACT_APP_API_URL

ENV REACT_APP_API_URL=$REACT_APP_API_URL

ENV NODE_OPTIONS=--max_old_space_size=4096

RUN yarn run build-docker

FROM nginx:alpine
COPY --from=build /usr/src/app/build /usr/share/nginx/html
