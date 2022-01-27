FROM node:lts-alpine

RUN mkdir -p /syersy/app/node_modules

WORKDIR /syersy/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD [ "npm", "start" ]
