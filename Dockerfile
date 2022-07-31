FROM node:18-alpine

RUN mkdir ./app

COPY . ./app

WORKDIR /app

RUN npm install

EXPOSE 3000

CMD ["npm", "run", "dev"]