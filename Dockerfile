FROM node:16 as build


# Create app directory
WORKDIR /usr/src/app

COPY package*.json .
COPY yarn.lock .
RUN yarn cache clean && yarn install --production=true --ignore-scripts

COPY . .

RUN yarn run build

FROM nginx:alpine
COPY --from=build /usr/src/app/build /usr/share/nginx/html
