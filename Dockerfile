FROM node:18.15.0 as build

ENV YARN_VERSION 3.5.0

RUN yarn policies set-version $YARN_VERSION

# Create app directory
WORKDIR /usr/src/app

COPY package*.json /usr/src/app
COPY yarn.lock /usr/src/app
VOLUME node_modules /usr/src/app/node_modules

RUN yarn install --immutable


COPY . /usr/src/app

ARG REACT_APP_API_URL

ENV REACT_APP_API_URL $REACT_APP_API_URL
ENV NODE_ENV=production

RUN yarn run build-docker

FROM nginx:alpine
COPY --from=build /usr/src/app/build /usr/share/nginx/html
