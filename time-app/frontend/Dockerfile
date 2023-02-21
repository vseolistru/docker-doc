FROM node:alpine

WORKDIR /app

EXPOSE 3000

COPY package*.json ./

RUN npm i

COPY . .

CMD ["npm", "run", "dev"]