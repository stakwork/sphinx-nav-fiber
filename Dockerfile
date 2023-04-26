FROM node:16 as build


# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./
COPY yarn.lock ./
VOLUME ./node_modules /app/node_modules
RUN yarn clean & yarn cache clean
RUN yarn install 

COPY . .

RUN yarn run build

FROM nginx:alpine
COPY --from=build /usr/src/app/build /usr/share/nginx/html
