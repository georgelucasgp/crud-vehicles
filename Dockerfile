FROM node:slim
RUN apt-get update && apt-get install -y openssl libssl-dev

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .
RUN npm run build


EXPOSE 3333
  
CMD [ "npm", "run", "start" ]