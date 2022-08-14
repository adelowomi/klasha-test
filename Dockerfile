FROM node:alpine

WORKDIR /opt/app

ENV NODE_ENV production

COPY package*.json ./

COPY next-sitemap.config.js ./

COPY . /opt/app

RUN yarn && yarn add -D typescript @types/node && yarn add next-sitemap

RUN yarn build 

CMD [ "yarn", "start" ]