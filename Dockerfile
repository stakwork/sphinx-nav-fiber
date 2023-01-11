FROM node:16

# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn install


EXPOSE 3000

CMD [ "yarn", "start" ]
