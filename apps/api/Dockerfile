FROM node:24-alpine

WORKDIR /app

COPY package.json ./
COPY apps/api apps/api

RUN npm install --production

WORKDIR /app/apps/api

EXPOSE 8000

CMD ["node", "dist/apps/api/src/server.js"]
