FROM node:19-alpine

WORKDIR /dir

COPY package.json /dir

COPY ./app /dir/

RUN npm install

CMD ["node","server.js"]



