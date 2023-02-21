FROM node:alpine

WORKDIR /app

EXPOSE 5000

COPY package*.json ./

RUN npm i --force

COPY . .

CMD ["npm", "run", "dev"]