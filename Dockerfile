FROM node:18-alpine

WORKDIR /biometric-time-clock/

COPY . .

RUN npm install --production

EXPOSE 3000

CMD [ "node", "src/app.js" ]

