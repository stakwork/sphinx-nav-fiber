FROM node:18.15.0 as build

# Create app directory
WORKDIR /usr/src/app

COPY package*.json /usr/src/app
COPY yarn.lock /usr/src/app


ENV YARN_VERSION 3.5.0

RUN yarn policies set-version $YARN_VERSION

ENV NODE_ENV=production

RUN apt-get update && \
    apt-get install -y libgtk2.0-0 libgtk-3-0 libgbm-dev \
    libnotify-dev libgconf-2-4 libnss3 libxss1 \
    libasound2 fonts-liberation libappindicator3-1 \
    xdg-utils


RUN yarn install --immutable

COPY . /usr/src/app

ARG VITE_APP_API_URL

ENV VITE_APP_API_URL=$VITE_APP_API_URL

ENV NODE_OPTIONS=--max_old_space_size=4096

RUN yarn run build-docker

FROM nginx:alpine
COPY --from=build /usr/src/app/build /usr/share/nginx/html
COPY --from=build /usr/src/app/deploy/nginx.conf /etc/nginx/conf.d/default.conf
