FROM node:16.15.0 as build


# Create app directory
WORKDIR /usr/src/app

COPY package*.json /usr/src/app
COPY yarn.lock /usr/src/app
VOLUME node_modules /usr/src/app/node_modules
RUN yarn cache clean && yarn install --ignore-scripts


COPY . /usr/src/app

RUN yarn run build

FROM nginx:alpine
COPY --from=build /usr/src/app/build /usr/share/nginx/html
