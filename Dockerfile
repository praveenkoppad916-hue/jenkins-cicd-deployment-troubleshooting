FROM node:9999-nonexistent
WORKDIR /app
COPY package.json ./
COPY app ./app
USER node
EXPOSE 3000
CMD ["node", "app/server.js"]
