FROM node:alpine

WORKDIR /opt/app

ENV NODE_ENV production

COPY package*.json ./

COPY . /opt/app

RUN yarn && yarn add typescript @types/node && yarn build 

CMD [ "yarn", "start" ]