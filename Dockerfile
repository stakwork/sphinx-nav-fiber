FROM node:16 as builder
WORKDIR /app
COPY package.json yarn.lock .yarnrc.yml ./
COPY .yarn ./.yarn
RUN yarn --immutable
COPY . .
RUN yarn build

# step2
FROM nginx:alpine
COPY --from=builder /app/build /usr/share/nginx/html
