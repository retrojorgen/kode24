FROM node:10.15.0

WORKDIR /opt/app

COPY . .

RUN npm install
RUN npm run heroku-postbuild

EXPOSE 3000

CMD ["npm", "start"]