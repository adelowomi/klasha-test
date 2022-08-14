FROM node:alpine

WORKDIR /opt/app

ENV NODE_ENV production

COPY package*.json ./

COPY . /opt/app

RUN yarn && yarn build

CMD [ "yarn", "start" ]