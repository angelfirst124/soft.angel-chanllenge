FROM node:16.11

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN yarn install

RUN npm run build

EXPOSE 3000

CMD npm run start