FROM quay.io/jitesoft/node:13-slim

COPY . .

RUN npm install

CMD [ "node", "server.js" ]
