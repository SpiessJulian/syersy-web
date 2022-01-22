FROM node:lts-alpine

RUN mkdir -p /syersy/app/node_modules && chown -R ses:ses /syersy/app

WORKDIR /syersy/app

COPY package*.json ./

USER ses

RUN npm install

COPY --chown=ses:ses . .

RUN npm run build

EXPOSE 3000

CMD [ "npm", "start" ]
