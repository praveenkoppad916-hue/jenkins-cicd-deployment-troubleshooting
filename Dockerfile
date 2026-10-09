FROM node:22-alpine
WORKDIR /app
COPY package.json ./
COPY app ./app
USER node
EXPOSE 3000
CMD ["node", "app/server.js"]
