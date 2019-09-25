FROM node:12.10-slim

WORKDIR /server

COPY . /server
RUN npm install

EXPOSE 4000
CMD [ "npm", "start" ]
