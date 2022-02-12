FROM node:16

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 5000

ENV MONGO_USERNAME=hyacinth
ENV MONGO_PASSWORD=htnicayh

CMD ["npm", "start"]