FROM node:24-alpine

WORKDIR /app

COPY package.json ./
COPY packages/common packages/common
COPY apps/api apps/api

WORKDIR /app/apps/api

RUN npm install --production
RUN npm run build

CMD ["node", "dist/apps/api/src/server.js"]
