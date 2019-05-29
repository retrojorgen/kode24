FROM node:10.15.0

WORKDIR /opt/app

COPY . .

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]